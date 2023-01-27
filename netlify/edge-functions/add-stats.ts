
import type { Context } from 'https://edge.netlify.com';
import type { Element } from 'https://ghuc.cc/worker-tools/html-rewriter/index.ts';
import { HTMLRewriter } from 'https://ghuc.cc/worker-tools/html-rewriter/index.ts';

function kFormatter(num: number) {
    return num > 999 ? (num/1000).toFixed(1) + 'k' : `~${Math.round(num / 10) * 10}`
}


export default async (request: Request, context: Context) => {
    const response = await context.next()

    const apiUrl = new URL(
        Deno.env.get('URL') || 'http://localhost:8888',
      );
      apiUrl.pathname = '/.netlify/functions/get-masto-account';
      const stats = await fetch(apiUrl.toString());
      const masto_data = await stats.json();

      const formatted = kFormatter(masto_data.followers)
      return new HTMLRewriter()
        .on('[data-site="masto"]', {
          element(element: Element) {
            element.append(
              `
              <span class="stats">${formatted} followers</span>
            `,
              {
                html: true,
              },
            );
          },
        })
        .transform(response);
}
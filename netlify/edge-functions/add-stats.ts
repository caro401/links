import type { Context } from "https://edge.netlify.com";
import type { Element } from "https://ghuc.cc/worker-tools/html-rewriter/index.ts";
import { HTMLRewriter } from "https://ghuc.cc/worker-tools/html-rewriter/index.ts";

function kFormatter(num: number) {
  return num > 999
    ? (num / 1000).toFixed(1) + "k"
    : `~${Math.round(num / 10) * 10}`;
}

export default async (request: Request, context: Context) => {
  const response = await context.next();

  const apiUrl = new URL(request.url);
  apiUrl.pathname = "/.netlify/functions/get-data";
  const stats = await fetch(apiUrl.toString());
  const data = await stats.json();

  const formatted = kFormatter(data.mastodon.followers);
  return new HTMLRewriter()
    .on('[data-site="masto"]', {
      element(element: Element) {
        element.append(`<span class="stats">${formatted} followers</span>`, {
          html: true,
        });
      },
    })
    .on('[data-site="blog"', {
      element(element: Element) {
        element.append(
          `<span class="stats">${data.blog.postCount} posts</span>`,
          {
            html: true,
          }
        );
      },
    })
    .on('[data-site="notes"', {
      element(element: Element) {
        element.append(
          `<span class="stats">${data.notes.notesCount} notes</span>`,
          {
            html: true,
          }
        );
      },
    })
    .on('[data-site="github"', {
      element(element: Element) {
        element.append(
          `<span class="stats">${data.github.publicRepos} public repos</span>`,
          {
            html: true,
          }
        );
      },
    })
    .transform(response);
};

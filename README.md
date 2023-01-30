# Links page with dynamic statistics

This project is inspired by [this episode of Learn with Jason](https://www.youtube.com/watch?v=19Sx7YeYyFo), in which they build a Linktree-like page, but pulling in regularly updated numbers of Twitch subscribers for a bit of social proof. I don't use Twitch, so I've instead added my follower count on Mastodon, number of public Github repositories, and the count of blog posts on my personal site. The resulting page is completely static HTML, as the data collection and injecting is done in Netlify functions.

This is my first experience with [Astro](https://astro.build/), [Netlify Functions](https://docs.netlify.com/functions/overview/) and [Netlify Edge Functions](https://docs.netlify.com/edge-functions/overview), so while you are free to use any of this code, don't treat me as an expert. And if you have any feedback or suggestions for improvements, please raise an issue to let me know.

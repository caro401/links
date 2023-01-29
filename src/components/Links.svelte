<script lang="ts">
  type Link = {
    interest: string;
    label: string;
    url: string;
    slug: string;
  };

  const LINKS: Link[] = [
    {
      interest: "Long-form writing about miscellaneous topics",
      label: "Read my blog posts",
      url: "https://caro.fyi/articles",
      slug: "blog",
    },
    {
      label: "Read my public notes",
      url: "https://notes.caro.fyi",
      slug: "notes",
      interest: "Digital gardening, things I'm learning about",
    },
    {
      interest: "Microblogging, cat photos",
      label: "Follow me on Mastodon",
      url: "https://fosstodon.org/@carofyi",
      slug: "masto",
    },
    {
      interest: "Code and open source contributions",
      url: "https://github.com/caro401",
      label: "Check out my Github profile",
      slug: "github",
    },
    {
      interest: "Folk music and dancing in southeast England",
      url: "https://flyingcat.dance",
      label: "Book my band to play for your dance",
      slug: "band",
    },
    {
      interest: "Textile arts and sustainability",
      url: "https://sheepsgreencrafts.co.uk",
      slug: "sheepsgreen",
      label: "Buy my handmade pieces and supplies",
    },
    {
      interest: "Productivity, getting through tasks",
      url: "https://herdingcats.work",
      label: "Try my app Herding Cats",
      slug: "herding-cats",
    },
    {
      interest: "Staying on top of my household chores",
      url: "https://www.flowhousework.com",
      label: "Try my app Flow Housework",
      slug: "flow",
    },
  ];
</script>

<nav>
  {#each LINKS as link}
    <a data-site={link.slug} href={link.url}>
      <h2>{link.interest}</h2>
      <p>{link.label}</p>
    </a>
  {/each}
</nav>

<style lang="postcss">
  a {
    @apply text-left px-4 block text-slate-800 dark:text-slate-200 shadow-md p-2 transition-all text-xl duration-500 border-4 border-violet-800 dark:border-violet-300 rounded-md bg-slate-100 dark:bg-slate-800;
    @apply hover:transition-all hover:bg-slate-50 dark:hover:bg-slate-700 dark:focus:bg-slate-700 focus:bg-slate-50 hover:shadow-xl focus:shadow-xl;
  }
  h2 {
    @apply text-lg font-semibold text-violet-800 dark:text-violet-200;
  }
  p {
    @apply text-base text-gray-700 dark:text-gray-300;
  }

  :global(.stats) {
    @apply block text-sm;
    @apply dark:text-violet-200 text-violet-800;
  }
  nav {
    @apply flex flex-col gap-4 w-fit mx-auto text-slate-800;
    @apply md:grid md:grid-cols-2 md:w-auto;
  }
</style>

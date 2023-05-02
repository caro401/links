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
      interest: "Sustainably sourced yarn, fibres and textile arts",
      url: "https://sheepsgreencrafts.co.uk",
      slug: "sheepsgreen",
      label: "Buy my handmade pieces and supplies",
    },
    {
      interest: "Sustainability in textile production and fashion",
      url: "#",
      slug: "sheepsgreen-blog",
      label: "Read my longform writing about sustainable textiles (coming soon!)",
    },
    {
      interest: "Productivity, getting through tasks",
      url: "https://herdingcats.work",
      label: "Try my app Herding Cats to gather all your tasks into one place",
      slug: "herding-cats",
    },
    {
      interest: "Staying on top of my household chores",
      url: "https://www.flowhousework.com",
      label: "Try my app Flow Housework to share out and track housework in a shared household",
      slug: "flow",
    },
    {
      interest: "Tracking what books I own",
      url: "https://shelf-cat.com",
      label: "Try my app ShelfCat to manage your library and reading lists",
      slug: "shelfcat",
    },
    {
      interest: "Help with software development for Digital Humanities projects",
      url: "https://codexfelis.dev",
      label: "Contact Codex Felis to discuss how we can help",
      slug: "codexfelis",
    },
    {
      interest: "Organising folk music and dancing in southeast England",
      url: "https://flyingcat.dance",
      label: "Book my band to play for your dance",
      slug: "band",
    },
    {
      interest: "Dancing Contra in Cambridge",
      url: "https://contrabridge.org",
      label: "Come to the contra dance series I help organise",
      slug: "contrabridge",
    },
    {
      interest: "Help with creating a website for my band or dance event",
      url: "https://flyingcat.dance/services",
      label: "Get in touch with Caro and James to discuss your needs",
      slug: "mail",
    },
    {
      interest: "Quick knitting calculations",
      url: "https://knitsum.caro.fyi",
      label: "Use my online knitting calculator",
      slug: "knitsum",
    },
  ];
</script>

<nav>
  {#each LINKS as link}
    <a data-site={link.slug} href={link.url} rel="me">
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
    @apply text-lg font-semibold text-violet-800 dark:text-violet-300;
  }
  p {
    @apply text-base text-gray-700 dark:text-gray-300;
  }

  :global(.stats) {
    @apply block text-sm;
    @apply dark:text-violet-300 text-violet-800;
  }
  nav {
    @apply flex flex-col gap-4 w-fit mx-auto text-slate-800;
    @apply md:grid md:grid-cols-2 md:w-auto lg:grid-cols-3;
  }
</style>

<script lang="ts">
  type Link = {
    label: string;
    url: string;
    slug: string;
  };

  const LINKS: Link[] = [
    {
      label: "Mastodon",
      url: "https://fosstodon.org/@carofyi",
      slug: "masto",
    },
    { label: "Website", url: "https://caro.fyi", slug: "site" },
    { label: "Notes", url: "https://notes.caro.fyi", slug: "notes" },
  ];
</script>

<nav>
  {#each LINKS as link}
    <p data-site={link.slug}><a href={link.url}>{link.label}</a></p>
  {/each}
</nav>

<style lang="postcss">
  p {
    @apply text-slate-800 dark:text-slate-200 shadow-md p-2 transition-all text-xl duration-500 border-4 border-violet-800 dark:border-violet-300 rounded-md bg-slate-100 dark:bg-slate-800;
    @apply  hover:transition-all hover:bg-slate-50 dark:hover:bg-slate-700 dark:focus:bg-slate-700 focus:bg-slate-50 hover:shadow-xl focus:shadow-xl;
  }
  
  :global(.stats) {
    @apply block text-sm;
    @apply dark:text-violet-200 text-violet-800;
  }
  nav {
    @apply flex flex-col gap-4 max-w-prose w-96 mx-auto text-slate-800;
  }
</style>

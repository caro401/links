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
    @apply block border-violet-600 border-2 rounded-md p-2 text-lg focus:bg-white hover:bg-white;
  }
  :global(.stats) {
    @apply text-sm text-violet-400 block;
  }
  nav {
    @apply flex flex-col gap-4 max-w-md w-96 mx-auto;
  }
</style>

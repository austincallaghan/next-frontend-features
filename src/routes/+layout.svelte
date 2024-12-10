<script lang="ts">
  import Theme from "$lib/components/Theme/Theme.svelte";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <title>Simple Svelte App</title>
</svelte:head>

  <Theme>
    {@render children?.()}
  </Theme>
<script lang="ts">
  interface Props {
    direction?: any;
    children?: import('svelte').Snippet;
    [key: string]: any;
  }
  // $$restProps is now "rest"
  // default prop values
  let { direction = 'column', children, ...rest }: Props = $props();
</script>

<div class="buttonGroup {direction}" {...rest}>
  <!-- ? optional children -->
  {@render children?.()}
</div>

<style>
  .buttonGroup {
    display: flex;
    gap: 16px;
  }

  .row {
    flex-direction: row;
  }

  .column {
    flex-flow: column wrap;
  }

  .buttonGroup :global(.button) {
    flex-grow: 1;
  }
</style>

<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import RedBigFoot from '../lib/components/Icon/RedBigFoot.svelte';

  const { Story } = defineMeta({
    title: 'Chromatic/BigFoots/RedBigFoot',
    component: RedBigFoot,
  });
</script>

<Story name="Default">
  <RedBigFoot />
</Story>

<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import BlueBigFoot from '../lib/components/Icon/BlueBigFoot.svelte';

  const { Story } = defineMeta({
    title: 'Chromatic/BigFoots/BlueBigFoot',
    component: BlueBigFoot,
  });
</script>

<Story name="Default">
  <BlueBigFoot />
</Story>

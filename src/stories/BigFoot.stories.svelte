<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import BigFoot from '../lib/components/Icons/BigFoot.svelte';

  const { Story } = defineMeta({
    title: 'Chromatic/BigFoots/BigFoot',
    component: BigFoot,
  });
</script>

<Story name="Default">
  <BigFoot />
</Story>

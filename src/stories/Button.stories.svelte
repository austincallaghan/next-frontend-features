<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from '../lib/components/Button/Button.svelte';

  const { Story } = defineMeta({
    title: 'Button',
    component: Button,
  });
</script>

<Story name="Primary" />

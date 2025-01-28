<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from '../lib/components/Button/Button.svelte';

  const { Story } = defineMeta({
    title: 'Chromatic/Button',
    component: Button,
  });
</script>

<Story name="Primary">
  <Button>Primary Button</Button>
</Story>
<Story name="Secondary">
  <Button variant="secondary">Secondary Button</Button>
</Story>

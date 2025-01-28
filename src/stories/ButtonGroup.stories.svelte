<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ButtonGroup from '../lib/components/ButtonGroup/ButtonGroup.svelte';
  import Button from '$lib/components/Button/Button.svelte';

  const { Story } = defineMeta({
    title: 'Chromatic/ButtonGroup',
    component: ButtonGroup,
  });
</script>

<Story name="Column">
  <ButtonGroup>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
  </ButtonGroup>
</Story>
<Story name="Row">
  <ButtonGroup direction="row">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
  </ButtonGroup>
</Story>

<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { within, userEvent, expect } from '@storybook/test';
  import Input from '../lib/components/Input/Input.svelte';

  const { Story } = defineMeta({
    title: 'Chromatic/Input',
    component: Input,
  });
</script>

<Story
  name="Normal"
  args={{ testid: 'normal-input' }}
  play={async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputField = canvas.getByTestId('normal-input');
    const inputValue = 'Lorem Ipsum';
    await userEvent.type(inputField, inputValue);
    await expect(inputField).toHaveValue(inputValue);
  }}
></Story>
<Story name="Password" args={{ type: 'password' }}></Story>

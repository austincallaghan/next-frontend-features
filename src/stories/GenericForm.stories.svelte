<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import GenericForm from '../lib/components/GenericForm/GenericForm.svelte';

  const { Story } = defineMeta({
    title: 'Chromatic/GenericForm',
    component: GenericForm,
  });
</script>

<Story name="Default" />

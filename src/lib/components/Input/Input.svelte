<script lang="ts">
  interface Props {
    testid?: string | undefined;
    placeholder?: string;
    value?: string;
    label?: string;
    type?: 'text' | 'email' | 'password' | 'number';
    disabled?: boolean;
  }

  let {
    testid = undefined,
    placeholder = 'Enter text',
    value = '',
    label,
    type = 'text',
    disabled = false,
  }: Props = $props();
</script>

{#if label}
  <label for="input-field" class="input-label">{label}</label>
{/if}

<input data-testid={testid} class="input-field" {type} {placeholder} {value} {disabled} />

<style>
  .input-label {
    display: block;
    margin-bottom: 4px;
    font-size: 14px;
    color: #333;
    font-weight: 600;
  }

  .input-field {
    padding: 8px 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.2s ease-in-out;
  }

  .input-field:focus {
    outline: none;
    border-color: #007bff; /* Blue border on focus */
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.25);
  }

  .input-field:disabled {
    background-color: #f5f5f5;
    color: #aaa;
    cursor: not-allowed;
  }
</style>

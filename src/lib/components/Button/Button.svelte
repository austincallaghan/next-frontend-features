<script lang="ts">
  export let variant: 'primary' | 'secondary' = 'primary';
</script>

<button class={`button ${variant}`}>
  <slot />
</button>

<style>
  .button {
    font-size: 16px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.2s ease-in-out;
  }

  .primary {
    background-color: tomato; /* Blue */
    color: black;
  }

  .primary:hover {
    background-color: #0056b3;
  }

  .secondary {
    background-color: #6c757d; /* Gray */
    color: white;
  }

  .secondary:hover {
    background-color: #545b62;
  }
</style>

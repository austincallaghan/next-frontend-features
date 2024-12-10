<script lang="ts">
  import { page } from "$app/stores";

  const errorCode = 404;
</script>

{#if $page.status === errorCode}
  <div class="not-found">
   Not found.
  </div>
{:else}
  <div class="server-error">{$page.status} - {$page.error?.message}</div>
{/if}

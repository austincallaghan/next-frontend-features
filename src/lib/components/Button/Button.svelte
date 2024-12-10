<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import type { Color, Events, IconDirection, Props, Size, Slots, Variant } from './Button.types';

  const dispatch = createEventDispatcher();

  type $$Events = Events;
  type $$Slots = Slots;
  type $$Props = Props;

  export let id = '';
  export let variant: Variant = 'filled';
  export let color: Color = 'primary';
  export let size: Size = 'default';
  export let iconDirection: IconDirection = '';
  export let disabled = false;
  export let dataTestId = '';
  export let dataExperimentId = '';
  export let ariaLabel = '';
  export let onClick: () => void = () => null;
  export let fullWidth = false;
  export let isActive = false;
  export let loading = false;
  const handleClick = (event: MouseEvent) => {
    if (!disabled) {
      onClick();
      dispatch('click', event);
    }
  };
</script>

<button
  {id}
  class="button {variant} {color} {size} {iconDirection}"
  {disabled}
  class:disabled
  class:fullWidth
  class:isActive
  data-testid={dataTestId}
  data-experiment-id={dataExperimentId}
  aria-label={ariaLabel}
  on:click={handleClick}
  {...$$restProps}
  tabindex="0"
>
  <slot />
</button>

<style>
  .button {
    font-family: var(--font-primary, sans-serif);
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    border: none;
    border-radius: 4px;
    height: var(--button-height, initial);
  }

  .fullWidth {
    width: 100%;
  }

  .button :global(svg) {
    height: 20px;
    width: 20px;
  }

  .left :global(svg) {
    margin-right: 8px;
    margin-bottom: 2px;
  }

  .right :global(svg) {
    margin-left: 8px;
    margin-bottom: 2px;
  }

  .default {
    padding: var(--padding, 12px 24px);
    height: 44px;
  }

  .smallest {
    padding: var(--padding, 4px 12px);
  }

  .small {
    padding: var(--padding, 8px 16px);
  }

  .large {
    padding: var(--padding, 16px 24px);
  }

  .filled {
    color: white;
  }

  .filled.primary {
    background-color: var(--color-primary);
  }

  .filled.primary:hover:not(.disabled) {
    background-color: var(--color-primary-dark);
  }

  .filled.secondary {
    background-color: var(--color-secondary);
  }

  .filled.secondary:hover:not(.disabled) {
    background-color: var(--color-secondary-dark);
  }

  .outlined.primary,
  .text.primary {
    color: var(--color-primary);
  }

  .outlined.secondary,
  .text.secondary {
    color: var(--color-grey-800);
  }

  .outlined.secondary:hover:not(.disabled),
  .text.secondary:hover:not(.disabled) {
    background: linear-gradient(var(--color-secondary-background), var(--color-secondary-background)),
      linear-gradient(white, white);
  }

  .outlined.primary:hover:not(.disabled),
  .text.primary:hover:not(.disabled) {
    background: linear-gradient(var(--color-primary-background), var(--color-primary-background)),
      linear-gradient(white, white);
  }
  .isActive {
    background: linear-gradient(var(--color-primary-background), var(--color-primary-background)),
      linear-gradient(white, white);
  }
  .outlined {
    background-color: var(--outlined-button-background, var(--color-white));
  }

  .outlined.primary {
    border: solid 1px var(--color-primary);
  }

  .outlined.secondary {
    border: solid 1px var(--color-grey-800);
  }

  .filled.disabled {
    background-color: var(--color-grey-200);
  }

  .filled.disabled,
  .outlined.disabled,
  .text.disabled {
    color: var(--color-grey-500);
  }

  .outlined.disabled {
    border: 1px solid var(--color-grey-200);
  }

  .text {
    background-color: var(--text-button-background, var(--color-white));
  }

  .disabled {
    cursor: not-allowed;
  }

  .spinner {
    margin-right: 8px;
  }
</style>

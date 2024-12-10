<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

{@render children?.()}

<style>
    :root {
  /* Fonts */
  --font-primary: Hind;
  --font-secondary: Nunito;

  /* Basics */
  --color-white: rgba(255, 255, 255, 1);
  --color-black: rgba(0, 0, 0, 1);
  --current-color: currentColor;

  /* Primary */
  --color-primary: rgba(33, 113, 6, 1);
  --color-primary-dark: rgba(25, 96, 2, 1);
  --color-primary-light: rgba(101, 188, 70, 1);
  --color-primary-background: rgba(33, 113, 6, 0.08);
  --color-primary-border: rgba(33, 113, 6, 0.5);

  /* Secondary */
  --color-secondary: rgba(76, 76, 76, 1);
  --color-secondary-light: rgba(128, 128, 128, 1);
  --color-secondary-dark: rgba(25, 25, 25, 1);
  --color-secondary-background: rgba(76, 76, 76, 0.08);
  --color-secondary-border: rgba(76, 76, 76, 0.5);
  --color-secondary-border-light: rgba(76, 76, 76, 0.3);

  /* Blue */
  --color-blue: rgba(195, 217, 232, 1);
  --color-blue-dark: rgba(234, 240, 243, 1);
  --color-blue-light: rgba(245, 252, 255, 1);

  /* Green */
  --color-green: rgba(101, 188, 70, 1);
  --color-green-dark: rgba(101, 169, 47, 1);
  --color-green-light: rgba(159, 204, 59, 1);

  /* Grey */
  --color-grey-50: rgba(244, 244, 244, 1);
  --color-grey-100: rgba(233, 233, 233, 1);
  --color-grey-200: rgba(211, 211, 211, 1);
  --color-grey-300: rgba(188, 188, 188, 1);
  --color-grey-400: rgba(166, 166, 166, 1);
  --color-grey-500: rgba(144, 144, 144, 1);
  --color-grey-600: rgba(122, 122, 122, 1);
  --color-grey-700: rgba(100, 100, 100, 1);
  --color-grey-800: rgba(77, 77, 77, 1);
  --color-grey-900: rgba(33, 33, 33, 1);

  /* Neutral */
  --color-neutral-9: hsla(0, 0%, 13%, 1);
  --color-neutral-8: hsla(0, 0%, 30%, 1);
  --color-neutral-7: hsla(0, 0%, 39%, 1);
  --color-neutral-6: hsla(0, 0%, 48%, 1);
  --color-neutral-5: hsla(0, 0%, 56%, 1);
  --color-neutral-4: hsla(0, 0%, 65%, 1);
  --color-neutral-3: hsla(0, 0%, 74%, 1);
  --color-neutral-2: hsla(0, 0%, 83%, 1);
  --color-neutral-1: hsla(0, 0%, 91%, 1);
  --color-neutral-0: hsla(0, 0%, 96%, 1);

  /* Gradient */
  --color-gradient-1: linear-gradient(90deg, rgba(153, 199, 222, 0.1) 0%, rgba(35, 165, 110, 0.1) 100%);

  /* Info */
  --color-info: rgba(76, 121, 228, 1);
  --color-info-hover: rgba(43, 84, 182, 1);
  --color-info-dark: rgba(51, 100, 216, 1);
  --color-info-dark-1: rgba(205, 222, 234, 1);
  --color-info-dark-text: rgba(30, 48, 91, 1);
  --color-info-light: rgba(117, 155, 244, 1);
  --color-info-light-bg: rgba(237, 242, 252, 1);
  --color-info-light-1: rgba(222, 240, 252, 1);

  /* Error */
  --color-error: rgba(221, 75, 85, 1);
  --color-error-hover: rgba(177, 47, 55, 1);
  --color-error-dark: rgba(211, 56, 65, 1);
  --color-error-dark-text: rgba(88, 30, 34, 1);
  --color-error-light: rgba(236, 111, 119, 1);
  --color-error-light-bg: rgba(252, 237, 238, 1);

  /* Warning */
  --color-warning: rgba(235, 203, 38, 1);
  --color-warning-hover: rgba(255, 238, 148, 1);
  --color-warning-dark: rgba(193, 162, 1, 1);
  --color-warning-dark-text: rgba(94, 81, 15, 1);
  --color-warning-light: rgba(252, 222, 71, 1);
  --color-warning-light-bg: rgba(253, 250, 233, 1);

  /* Success */
  --color-success: rgba(35, 165, 110, 1);
  --color-success-hover: rgba(11, 107, 67, 1);
  --color-success-dark: rgba(11, 129, 79, 1);
  --color-success-dark-1: rgba(180, 220, 93, 1);
  --color-success-dark-text: rgba(14, 66, 44, 1);
  --color-success-light: rgba(62, 204, 144, 1);
  --color-success-light-bg: rgba(233, 246, 240, 1);
  --color-success-light-1: rgba(193, 235, 101, 1);

  /* Corporate Special */
  --color-corporate-special: rgba(39, 86, 91, 1);
  --color-corporate-special-border: rgba(39, 86, 91, 0.5);

  /* Banner Green */
  --color-banner-green: rgba(193, 235, 101, 1);
  --color-banner-green-accent: rgba(217, 255, 135, 1);

  /* Banner Blue */
  --color-banner-blue: rgba(222, 240, 252, 1);
  --color-banner-blue-accent: rgba(236, 248, 255, 1);

  /* Text sizes */
  --text-super: 12px;
  --text-sub: 16px;
  --text-sub-2: 14px;
  --text-body: 16px;
  --text-body-2: 14px;
  --text-body-lg: 18px;
  --text-h1-mobile: 28px;
  --text-h2-mobile: 24px;
  --text-h3-mobile: 24px;
  --text-heading-6: 18px;
  --text-heading-5: 20px;
  --text-heading-4: 24px;
  --text-heading-3: 32px;
  --text-heading-2: 36px;
  --text-heading-1: 60px;
  --font-size: 14px;
  --text-3xl: 28px;
  --text-4xl: 38px;

  /* Modal */
  --modal-max-width: 100%;
  --modal-max-height: 100%;
  --modal-title-font-size: 32px;
  --modal-padding-body: 24px 0px;
  --modal-padding-dialog: 24px;
  --modal-padding-header: 0px;

  /* Tooltip */
  --tooltip-border-radius: 4px;
}

</style>
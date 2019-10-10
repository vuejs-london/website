<template>
  <form-button tag="nuxt-link" to="/cfp" class="c-banner">
    <div class="c-banner__content">
      <heading level="4" variant="style-only">
        <slot />
      </heading>
    </div>
  </form-button>
</template>

<script>
import FormButton from '~/components/FormButton.vue'
import Heading from '~/components/Heading.vue'

export default {
  components: {
    FormButton,
    Heading,
  },
}
</script>

<style lang="postcss" scoped>
.c-banner {
  width: 100%;
  box-sizing: border-box;
  padding: var(--grid-two);
  margin: 0;
  background: var(--color-green--dark);
  border-radius: 0;
  white-space: normal;

  &:hover,
  &:active {
    background: var(--color-green);
    opacity: 1;
  }

  &__content {
    width: 100%;
    max-width: var(--page-width);
    margin: 0 auto;
    color: var(--color-white);
    text-align: center;
  }
}
</style>

<template>
  <div class="c-sponsor-group">
    <heading level="2" variant="block"><slot name="title"></slot></heading>
    <div :class="{ [`c-sponsor-group__logos--${size}`]: true }" class="c-sponsor-group__logos">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Heading from '~/components/Heading'
export default {
  components: {
    Heading,
  },

  props: {
    size: {
      type: String, // small | regular | medium | large | huge
      default: 'small',
    },
  },
}
</script>

<style lang="postcss">
.c-sponsor-group {
  &__logos {
    display: grid;
    align-items: center;
    justify-items: center;

    @media (--phablet-large) {
      &--small {
        padding: 0 calc(var(--grid-one) * 30);
      }

      &--regular {
        padding: 0 calc(var(--grid-one) * 24);
      }

      &--medium {
        padding: 0 calc(var(--grid-one) * 16);
      }

      &--large {
        padding: 0 var(--grid-eight);
      }

      &--huge {
        padding: 0 var(--grid-two);
      }
    }

    ^&[columns='1'] & {
      grid-template-columns: 1fr;
    }

    ^&[columns='2'] & {
      grid-template-columns: 1fr;

      @media (--phablet-large) {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
}
</style>

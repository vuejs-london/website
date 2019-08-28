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
    grid-gap: var(--grid-eight);
    justify-items: center;

    &--small {
      padding: 0 calc(var(--grid-one) * 8);
    }

    &--regular {
      padding: 0 calc(var(--grid-one) * 6);
    }

    &--medium {
      padding: 0 calc(var(--grid-one) * 4);
    }

    &--large {
      padding: 0 calc(var(--grid-one) * 2);
    }

    &--huge {
      padding: 0 calc(var(--grid-one) * 1);
    }

    @media (--mobile-large) {
      &--small {
        padding: 0 calc(var(--grid-one) * 14);
      }

      &--regular {
        padding: 0 calc(var(--grid-one) * 12);
      }

      &--medium {
        padding: 0 calc(var(--grid-one) * 10);
      }

      &--large {
        padding: 0 calc(var(--grid-one) * 6);
      }

      &--huge {
        padding: 0 calc(var(--grid-one) * 4);
      }
    }

    @media (--phablet-large) {
      &--small {
        padding: 0 calc(var(--grid-one) * 20);
      }

      &--regular {
        padding: 0 calc(var(--grid-one) * 16);
      }

      &--medium {
        padding: 0 calc(var(--grid-one) * 14);
      }

      &--large {
        padding: 0 calc(var(--grid-one) * 10);
      }

      &--huge {
        padding: 0 calc(var(--grid-one) * 8);
      }
    }

    @media (--tablet-large) {
      &--small {
        padding: 0 calc(var(--grid-one) * 36);
      }

      &--regular {
        padding: 0 calc(var(--grid-one) * 28);
      }

      &--medium {
        padding: 0 calc(var(--grid-one) * 22);
      }

      &--large {
        padding: 0 calc(var(--grid-one) * 18);
      }

      &--huge {
        padding: 0 calc(var(--grid-one) * 14);
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

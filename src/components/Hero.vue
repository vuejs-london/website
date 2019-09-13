<template>
  <div class="c-hero">
    <page-section class="c-hero__logo">
      <logo-animated />
    </page-section>
    <div class="c-hero__banner">
      <heading class="u-visually-hidden">Vue.js London</heading>
      <heading level="2" class="c-hero__location" variant="style-only">Cineworld at the O2</heading>
      <heading level="3" class="c-hero__date" variant="style-only">4-5 October 2019</heading>
    </div>
  </div>
</template>

<script>
import Heading from '~/components/Heading'
import PageSection from '~/components/PageSection'

export default {
  components: {
    Heading,
    LogoAnimated: () => import('~/components/LogoAnimated'),
    PageSection,
  },
}
</script>

<style lang="postcss" scoped>
.c-hero {
  & >>> &__logo {
    overflow: hidden;
    height: calc(var(--grid-one) * 55);
    padding-top: var(--grid-ten);
    padding-left: var(--grid-three);

    & > svg {
      overflow: visible;
      transform: scale(2.5);
      transform-origin: top;
    }

    @media (--mobile-medium) {
      & > svg {
        transform: scale(2.2);
      }
    }

    @media (--mobile-large) {
      & > svg {
        transform: scale(1.75);
      }
    }

    @media (--phablet-small) {
      height: calc(var(--grid-one) * 60);
    }

    @media (--phablet-medium) {
      height: calc(var(--grid-one) * 70);
    }

    @media (--phablet-large) {
      height: calc(var(--grid-one) * 80);
    }

    @media (--tablet-small) {
      height: calc(var(--grid-one) * 88);
      padding-top: calc(var(--grid-one) * 15);

      & > svg {
        transform: scale(1.5);
      }
    }

    @media (--tablet-large) {
      height: calc(var(--grid-one) * 90);
    }
  }

  &__banner {
    padding: var(--grid-four);
    background: var(--color-text);
    color: var(--color-white);
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;
  }

  &__location {
    font-size: var(--grid-three);

    @media (--phablet-small) {
      font-size: var(--grid-five);
    }
  }

  &__date {
    font-size: var(--grid-three);

    @media (--phablet-small) {
      font-size: var(--grid-four);
    }
  }
}
</style>

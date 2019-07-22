<template>
  <div class="c-navbar">
    <div class="c-navbar__container">
      <anchor :to="titleLink" class="c-navbar__logo">
        <slot name="title">
          <heading level="6" tag="span" variant="style-only">Vue.js London</heading>
        </slot>
      </anchor>
      <burger @click.native="toggle" :active="isOpen" class="c-navbar__burger"></burger>
      <nav v-show="isOpen" class="c-navbar__nav">
        <list @click="toggle" class="c-navbar__nav-items">
          <list-item v-for="item in links" :key="item.to || item.href" class="c-navbar__nav-item">
            <anchor v-bind="item" class="u-font--smaller">{{ item.text }}</anchor>
          </list-item>
        </list>
      </nav>
    </div>
  </div>
</template>

<script>
import Anchor from '~/components/Anchor.vue'
import Burger from '~/components/Burger.vue'
import Heading from '~/components/Heading.vue'
import List from '~/components/List.vue'
import ListItem from '~/components/ListItem.vue'

export default {
  components: {
    Burger,
    Anchor,
    Heading,
    List,
    ListItem,
  },

  props: {
    titleLink: {
      type: String,
      default: '/',
    },
    links: {
      type: Array, // AnchorProps
      default: () => [],
    },
  },

  data() {
    return {
      isOpen: false,
    }
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="postcss">
.c-navbar {
  position: fixed;
  position: sticky; /* stylelint-disable-line plugin/no-unsupported-browser-features */
  z-index: var(--z-index-navbar);
  top: 0;
  display: block;
  width: 100%;
  align-items: center;
  padding: calc(var(--grid-two) -5px) 0;
  border-bottom: 1px solid var(--color-grey--light);
  background: var(--color-white);
  transition: transform 0.3s ease;

  &__container {
    display: flex;
    max-width: var(--page-width);
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--grid-two);
    margin: 0 auto;
  }

  &__logo {
    display: flex;
    align-items: center;
    padding: 5px 0;
    text-transform: uppercase;
  }

  &__burger {
    @media (--tablet-large) {
      display: none !important;
    }
  }

  &__nav {
    flex: 1 0 100%;
    border-top: 1px solid var(--color-grey--light);
    margin-top: var(--grid-two);
    background: var(--color-white);

    @media (--tablet-large) {
      position: initial;
      display: block !important;
      flex: initial;
      border-top: initial;
      margin-top: initial;
      background: initial;
    }
  }

  &__nav-items {
    padding: 0;
    margin: 0;
  }

  &__nav-item {
    display: inline-block;
    width: 100%;
    padding-left: 0;
    text-transform: uppercase;
    vertical-align: middle;

    @media (--tablet-large) {
      width: initial;
    }

    & > * {
      display: block;
      padding: var(--grid-two) var(--grid-two);
    }
  }
}
</style>

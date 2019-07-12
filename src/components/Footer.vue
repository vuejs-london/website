<template>
  <footer class="c-footer">
    <page-section class="c-footer__top">
      <div>
        <heading level="2">Contact</heading>
        <list>
          <list-item>
            Twitter:
            <anchor
              variant="bold"
              href="https://twitter.com/vue_london"
              rel="noopener"
              target="_blank"
              >@vue_london</anchor
            >
          </list-item>
          <list-item>
            Email:
            <anchor variant="bold" href="mailto:team@vuejs.london" rel="noopener" target="_blank"
              >team@vue.js.london</anchor
            >
          </list-item>
        </list>
      </div>

      <div class="c-footer__links">
        <heading level="2">Useful links</heading>
        <list>
          <list-item v-for="item in links" :key="item.to || item.href">
            <anchor v-bind="item" variant="bold">{{ item.text }}</anchor>
          </list-item>
        </list>
      </div>
    </page-section>

    <page-section class="c-footer__bottom">
      Proudly produced by
      <anchor variant="bold" href="https://twitter.com/blakenewman" rel="noopener" target="_blank">
        Blake Newman
      </anchor>
      - supported by
      <anchor variant="bold" href="https://twitter.com/ruiposse" rel="noopener" target="_blank">
        Rui Posse
      </anchor>
      <div class="c-footer__copyright u-font--regular">
        Copyright 2019 Vue.js London. All rights reserved.
      </div>
    </page-section>
  </footer>
</template>

<script>
import Anchor from '~/components/Anchor.vue'
import Heading from '~/components/Heading.vue'
import List from '~/components/List.vue'
import ListItem from '~/components/ListItem.vue'
import PageSection from '~/components/PageSection.vue'

export default {
  components: {
    Anchor,
    Heading,
    List,
    ListItem,
    PageSection,
  },

  props: {
    links: {
      type: Array, // AnchorProps
      default: () => [],
    },
  },
}
</script>

<style lang="postcss">
.c-footer {
  padding-top: var(--grid-four);
  padding-bottom: calc(var(--grid-ten) * 2);
  border-top: 1px solid var(--color-grey--light);
  margin-top: var(--grid-four);
  background: var(--color-white);

  &__bottom {
    padding-top: var(--grid-four);
    text-align: center;
  }

  &__links {
    padding-top: var(--grid-two);
  }

  &__copyright {
    padding-top: var(--grid-two);
    color: var(--color-text--light);
  }

  @media (--tablet-small) {
    &__top {
      display: flex;
      justify-content: space-around;
    }

    &__links {
      padding-top: initial;
    }
  }
}
</style>

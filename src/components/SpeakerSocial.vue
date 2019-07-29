<template>
  <div class="c-speaker-social">
    <anchor
      v-if="github"
      :href="github"
      tabindex="-1"
      class="c-speaker-social__icon c-speaker-social__icon--github"
      rel="noopener"
      target="_blank"
    />
    <anchor
      v-if="gitlab"
      :href="gitlab"
      tabindex="-1"
      class="c-speaker-social__icon c-speaker-social__icon--gitlab"
      rel="noopener"
      target="_blank"
    />
    <anchor
      v-if="twitter"
      :href="twitter"
      tabindex="-1"
      class="c-speaker-social__icon c-speaker-social__icon--twitter"
      rel="noopener"
      target="_blank"
    />
  </div>
</template>

<script>
import Anchor from '~/components/Anchor'

export default {
  components: {
    Anchor,
  },

  props: {
    github: {
      type: String,
      default: null,
    },
    gitlab: {
      type: String,
      default: null,
    },
    twitter: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="postcss">
.c-speaker-social {
  &__icon {
    display: inline-block;
    box-sizing: border-box;
    padding: var(--grid-half);
    margin: 0 var(--grid-quarter);
    background-repeat: no-repeat;
    vertical-align: middle;

    &--twitter {
      width: 24px;
      height: 19px;
      background-image: url(~assets/img/twitter.svg);
      background-size: 24px 19px;
    }

    &--github,
    &--gitlab {
      width: 22px;
      height: 22px;
      background-size: 22px;
    }

    &--github {
      background-image: url(~assets/img/github.svg);
    }

    &--gitlab {
      background-image: url(~assets/img/gitlab.svg);
    }
  }
}
</style>

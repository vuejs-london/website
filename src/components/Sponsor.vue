<template>
  <anchor :href="href" class="c-sponsor" rel="noopener" target="_blank">
    <img :src="image" :alt="title" class="c-sponsor__image" />
  </anchor>
</template>

<script>
import Anchor from '~/components/Anchor'
export default {
  components: {
    Anchor,
  },

  props: {
    href: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="postcss">
.c-sponsor {
  width: 90%;
  box-sizing: border-box;
  text-align: center;

  &__image {
    width: 100%;
    object-fit: contain;
  }
}
</style>

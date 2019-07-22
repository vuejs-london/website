<template>
  <main>
    <page-section>
      <heading variant="block">Gallery</heading>
      <div class="p-image-container">
        <page-image
          v-for="(img, imgIndex) in imagesSmall"
          :key="imgIndex"
          @click="load(imgIndex)"
          @keydown.enter="load(imgIndex)"
          :src="img"
          alt="Vue.js London Image"
          class="p-image"
        />
      </div>
      <no-ssr placeholder="Loading...">
        <vue-easy-lightbox :visible="visible" :imgs="imagesFull" :index="index" @hide="close" />
      </no-ssr>
    </page-section>
  </main>
</template>

<script>
import Heading from '~/components/Heading.vue'
import Lightbox from 'vue-easy-lightbox'
import PageImage from '~/components/PageImage.vue'
import PageSection from '~/components/PageSection.vue'
import Vue from 'vue'

const images = new Array(473).fill('').map((_, index) => `${index + 1}`.padStart(4, '0'))

const imagesSmall = images.map(value => `/2018/images/gallery/10-percent/${value}.jpg`)
const imagesFull = images.map(value => `/2018/images/gallery/original/${value}.jpg`)

if (process.client) {
  Vue.use(Lightbox)
}

export default {
  layout: 'previous/2018',

  head: {
    title: 'Vue.js London 2018 | Gallery',
  },

  components: {
    Heading,
    PageImage,
    PageSection,
  },

  data() {
    return {
      imagesSmall,
      imagesFull,
      visible: false,
      index: 0,
    }
  },

  methods: {
    load(index) {
      this.index = index
      this.visible = true
    },

    close() {
      this.visible = false
    },
  },
}
</script>

<style lang="postcss" scoped>
.p-image-container {
  display: grid;
  align-items: stretch;
  grid-gap: var(--grid-two) var(--grid-two);

  @media (--phablet-medium) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (--tablet-medium) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.p-image {
  max-height: 300px;
  margin-top: 0;

  @media (--phablet-medium) {
    max-height: 240px;
  }

  @media (--tablet-medium) {
    max-height: 210px;
  }
}
</style>

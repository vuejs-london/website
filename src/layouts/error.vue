<template>
  <section class="container">
    <heading>
      {{ error.statusCode }}
    </heading>
    <heading level="2">
      {{ error.message }}
    </heading>
    <form-button v-if="error.statusCode === 404" tag="nuxt-link" to="/">
      Homepage
    </form-button>
  </section>
</template>

<script>
import FormButton from '~/components/FormButton.vue'
import Heading from '~/components/Heading.vue'

export default {
  components: {
    FormButton,
    Heading,
  },

  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>

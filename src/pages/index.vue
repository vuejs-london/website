<template>
  <main>
    <hero></hero>
    <page-section>
      <form-button to="/tickets" tag="nuxt-link" class="p__tickets">Conference tickets</form-button>
      <form-button to="/workshops" tag="nuxt-link">View workshops</form-button>
      <form-button to="/cfp" tag="nuxt-link">Submit CFP</form-button>
      <form-button to="/diversity" tag="nuxt-link">Diversity matters</form-button>
    </page-section>
  </main>
</template>

<script>
import FormButton from '~/components/FormButton'
import Hero from '~/components/Hero'
import PageSection from '~/components/PageSection'

export default {
  components: {
    FormButton,
    Hero,
    PageSection,
  },

  head: {
    title: 'Vue.js London 2019',
  },
}
</script>

<style lang="postcss" scoped>
.p__tickets {
  margin-top: var(--grid-eight);
}
</style>

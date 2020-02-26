<template>
  <main>
    <hero />
    <page-section>
      <why-icons class="p__icons" />

      <form-button tag="nuxt-link" to="/tickets">2020 Tickets</form-button>
      <form-button tag="a" href="mailto:sponsors@vuejs.london">Become a sponsor</form-button>
    </page-section>
  </main>
</template>

<script>
  import FormButton from '~/components/FormButton'
  import Hero from '~/components/Hero'
  import PageSection from '~/components/PageSection'
  import WhyIcons from '~/components/WhyIcons'

  export default {
    components: {
      FormButton,
      Hero,
      PageSection,
      WhyIcons,
    },

    head: {
      title: 'Vue.js London 2019',
    },
  }
</script>

<style lang="postcss" scoped>
  .p__icons {
    margin-top: var(--grid-six);
  }

  .p-sponsor__level5 {
    max-width: 80%;

    @media (--tablet-small) {
      max-width: 70%;
    }
  }

  .p__osawards {
    display: grid;
    grid-gap: var(--grid-two) var(--grid-four);

    @media (--tablet-small) {
      align-items: center;
      grid-template-columns: 40% 1fr;
    }

    @media (--tablet-large) {
      align-items: center;
      grid-template-columns: 45% 1fr;
    }
  }

  .p__osawards-image {
    margin: 0;
  }
</style>

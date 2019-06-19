<template>
  <main>
    <page-section>
      <form-button to="/workshops" tag="nuxt-link" class="p__workshops">
        Workshop tickets
      </form-button>
      <heading variant="block">Conference Tickets</heading>
      <paragraph>
        Join us at the iconic O2 Arena, for our conference on 4th October 2019 which includes
        breakfast and lunch with a day packed full of content; 10 Talks, 8 Lightning Talks, 8 Advice
        Lounge Experts, an After Party and more... Choose from 6 workshops, TBA, on the 5th (Sold
        Separately) This years theme is growth, scale and awareness; with Vue 3 at the centre of
        focus. Don't miss out of this critical conference to ensure you are prepped and ready for
        everything related to Vue 3 and more...
      </paragraph>

      <heading level="2" variant="block">Student &amp; low earning tickets</heading>
      <paragraph>
        If you are a student or a low earner or unemployed, you can get an additional discount.
        Please email team@vuejs.london with proof and we will send you a code to redeem your ticket.
      </paragraph>

      <heading level="2" variant="block">Payment Plan</heading>
      <paragraph>
        We offer an optional payment plan thanks for our tickets, thanks to our ticket platform.
        This allows you to spread the cost across four equal payments with
        <strong>no interest</strong>.
      </paragraph>

      <div ref="tickets" class="tickets"></div>
    </page-section>
  </main>
</template>

<script>
import FormButton from '~/components/FormButton.vue'
import Heading from '~/components/Heading.vue'
import PageSection from '~/components/PageSection.vue'
import Paragraph from '~/components/Paragraph.vue'

export default {
  head: {
    title: 'Vue.js London | 4-5 October 2019 | Tickets',
  },

  components: {
    FormButton,
    Heading,
    PageSection,
    Paragraph,
  },

  mounted() {
    const element = document.createElement('script')
    element.src = 'https://www.universe.com/embed2.js'
    element.dataset.widgetType = 'universe-ticket'
    element.dataset.targetType = 'Listing'
    element.dataset.targetId = 'vue-js-london-2019-conference-tickets-mountain-view-V1BH5D'
    element.dataset.state = 'buttonColor=#42b883&buttonText=Get Tickets'

    this.$refs.tickets && this.$refs.tickets.append(element)
  },
}
</script>

<style lang="postcss" scoped>
.tickets {
  margin: var(--grid-eight) 0;
}

.p__workshops {
  position: sticky;
  z-index: var(--z-index-button-sticky);
  top: calc(var(--grid-ten) - 3px);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>

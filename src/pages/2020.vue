<template>
  <main>
    <page-section>
      <heading variant="block" class="u-visually-hidden">Tickets</heading>
      <heading level="2" variant="block">2020 Conference tickets</heading>
      <location
        name="Cineworld at The O2"
        address="The O2, Peninsula Square, London SE10 0DX"
        image="/img/venue/cineworld-screen.jpg"
        url="https://www.google.com/maps/place/Cineworld+Cinema+London+O2+Greenwich/@51.5031809,0.0044136,15z/data=!4m2!3m1!1s0x0:0xb3ca4f4fde6ca073?sa=X&ved=2ahUKEwiOnv2nga_jAhWbTRUIHZyMCloQ_BIwC3oECA8QCA"
        date="October 2020"
      />
      <paragraph class="p__desc">
        Join us again next year for the 2020 edition; we aim to host at the Cineworld O2 once again
        on roughly the same dates. All tickets will be fully refundable with no questions asked if
        you no longer can make it.
      </paragraph>

      <ticket
        image="/img/logo-120.png"
        name="Extremely Early Bird"
        href="https://www.universe.com/events/vue-js-london-2020-conference-tickets-mountain-view-MG5RK2"
      />

      <div ref="tickets" class="tickets"></div>

      <br />
      <heading level="2">Student &amp; low earning tickets</heading>
      <paragraph>
        If you are a student or a low earner or unemployed, you can get an additional discount.
        Please email team@vuejs.london with proof and we will send you a code to redeem your ticket.
      </paragraph>
    </page-section>
  </main>
</template>

<script>
import Heading from '~/components/Heading.vue'
import Location from '~/components/Location.vue'
import PageSection from '~/components/PageSection.vue'
import Paragraph from '~/components/Paragraph.vue'
import Ticket from '~/components/Ticket.vue'

export default {
  head: {
    title: 'Vue.js London | October 2020 | Tickets',
  },

  components: {
    Location,
    Heading,
    PageSection,
    Paragraph,
    Ticket,
  },

  mounted() {
    const element = document.createElement('script')
    element.src = 'https://www.universe.com/embed2.js'

    this.$refs.tickets && this.$refs.tickets.append(element)
  },
}
</script>

<style lang="postcss" scoped>
.tickets {
  margin: var(--grid-eight) 0;
}

.p__desc {
  margin-top: var(--grid-four);
}
</style>

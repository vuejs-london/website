<template>
  <main>
    <page-section>
      <heading variant="block" class="u-visually-hidden">Tickets</heading>
      <heading level="2" variant="block">Conference tickets</heading>
      <location
        name="Cineworld at The O2"
        address="The O2, Peninsula Square, London SE10 0DX"
        image="/img/venue/cineworld-screen.jpg"
        url="https://www.google.com/maps/place/Cineworld+Cinema+London+O2+Greenwich/@51.5031809,0.0044136,15z/data=!4m2!3m1!1s0x0:0xb3ca4f4fde6ca073?sa=X&ved=2ahUKEwiOnv2nga_jAhWbTRUIHZyMCloQ_BIwC3oECA8QCA"
        date="04 October 2019"
      />
      <paragraph class="p__desc">
        Join us at the iconic O2 Arena, for our conference on 4th October 2019 which includes
        breakfast and lunch with a day packed full of content; 10 Talks, 8 Lightning Talks, 8 Advice
        Lounge Experts, an After Party and more... This years theme is growth, scale and awareness;
        with Vue 3 at the centre of focus. Don't miss out of this critical conference to ensure you
        are prepped and ready for everything related to Vue 3 and more...
      </paragraph>

      <ticket image="/img/logo-120.png" name="Super Early Bird" />
      <ticket image="/img/logo-120.png" name="Early Bird" />
      <ticket
        image="/img/logo-120.png"
        name="Regular Bird"
        href="https://www.universe.com/events/vue-js-london-2019-conference-tickets-mountain-view-V1BH5D"
      />

      <heading level="2" variant="block">Workshop tickets</heading>
      <location
        name="CCT Venues"
        address="193 Marsh Wall, Isle of Dogs, London E14 9RS"
        image="/img/venue/cct-venues.jpg"
        url="https://www.google.com/maps/place/CCT+Venues-Docklands/@51.5006797,-0.0170056,17z/data=!3m1!4b1!4m5!3m4!1s0x487602bba15e6c91:0x674d16e7ec0ae32c!8m2!3d51.5006797!4d-0.0148169"
        date="05 October 2019"
      />

      <ticket
        image="/img/logo-120.png"
        name="Motion Design with Vue"
        href="https://www.universe.com/events/vue-js-london-2019-workshops-tickets-london-ZGMY90"
      />
      <ticket
        image="/img/logo-120.png"
        name="Rea11y Simple A11y: A Focused Accessibility Workshop"
        href="https://www.universe.com/events/vue-js-london-2019-workshops-tickets-london-ZGMY90"
      />

      <ticket
        image="/img/logo-120.png"
        name="Proven patterns for building Vue apps"
        href="https://www.universe.com/events/vue-js-london-2019-workshops-tickets-london-ZGMY90"
      />
      <ticket
        image="/img/logo-120.png"
        name="Scaling applications with Vuex"
        href="https://www.universe.com/events/vue-js-london-2019-workshops-tickets-london-ZGMY90"
      />
      <ticket
        image="/img/logo-120.png"
        name="In-depth Application Testing with Vue"
        href="https://www.universe.com/events/vue-js-london-2019-workshops-tickets-london-ZGMY90"
      />
      <ticket
        image="/img/logo-120.png"
        name="E2E testing with Cypress"
        time="09:00 - 17:00"
        href="https://www.universe.com/events/vue-js-london-2019-workshops-tickets-london-ZGMY90"
      />

      <br />
      <heading level="2">Student &amp; low earning tickets</heading>
      <paragraph>
        If you are a student or a low earner or unemployed, you can get an additional discount.
        Please email team@vuejs.london with proof and we will send you a code to redeem your ticket.
      </paragraph>

      <heading level="2">Payment Plan</heading>
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
import Heading from '~/components/Heading.vue'
import Location from '~/components/Location.vue'
import PageSection from '~/components/PageSection.vue'
import Paragraph from '~/components/Paragraph.vue'
import Ticket from '~/components/Ticket.vue'

export default {
  head: {
    title: 'Vue.js London | 4-5 October 2019 | Tickets',
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

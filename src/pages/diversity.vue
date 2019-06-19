<template>
  <main>
    <page-section>
      <heading variant="block">Diversity at Vue.js London</heading>
      <paragraph>
        Diversity Tickets are fully sponsored (i.e. free) tickets that are awarded after an
        application process and lottery. In some cases, travel expenses will also be allocated.
      </paragraph>
      <paragraph>
        Anyone from an underrepresented group in tech is invited to apply, this includes, but is not
        limited to: women, people of colour, LGBTQ people, disabled people, and people facing
        economic or social hardships.
      </paragraph>
      <paragraph>
        We want to see the Vue.js and Web community grow and flourish - this is just a small way to
        ensure that everyone attending is equally represented within the community!
      </paragraph>

      <heading level="2" variant="block">Who?</heading>
      <paragraph>
        Diversity tickets are now open! Applicants will be notified when sufficient pool money is
        available. Anyone that submits their application will be advised if they qualify.
      </paragraph>
      <paragraph>
        We will close submissions one month before event day. We will use any available funds from
        Diversity sponsors and allocate the tickets based on a lottery system, also providing
        discounts to those who qualify.
      </paragraph>
      <form-button
        tag="a"
        href="https://docs.google.com/forms/d/e/1FAIpQLSc22Tfi_I9A_6IPE4OvVcTdPjMv2wltvG1KGEzAyRXwKHzC6A/viewform"
        rel="noopener"
        target="_blank"
        >Apply now!</form-button
      >

      <heading level="2" variant="block">Sponsors</heading>
      <paragraph>
        Diversity sponsorship is now open. Please help us improve diversity at Vue.js London 2019
        and future events.
      </paragraph>
      <paragraph>
        Please get in contact with us through email,
        <i>
          <strong>sponsors@vuejs.london</strong>
        </i>
      </paragraph>
      <form-button tag="a" href="mailto:sponsors@vuejs.london">Become a sponsor</form-button>
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
    title: 'Vue.js London 2019 | Diversity',
  },

  components: {
    FormButton,
    Heading,
    PageSection,
    Paragraph,
  },
}
</script>

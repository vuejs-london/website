<template>
  <main>
    <page-section>
      <heading variant="block">CFP</heading>
      <paragraph>
        CFP (Call for proposals) is an opportunity for everyone to apply to speak at Vue.js London,
        submit a proposal for a lightning/full session talk, MC, or run a full day workshop (8
        Hours).
      </paragraph>
      <paragraph>
        Anyone is welcome to apply! The prominent theme for this year will be around growth, scale
        and awareness. We will focus on talks and technologies that will share knowledge on scaling
        and growing Vue.js Applications to enterprise quality. Vue 3 will be the core focus of all
        talks, we will work with all accepted speakers to ensure their content is focused for Vue 3.
      </paragraph>
      <list bullet>
        <list-item>Deadline is 2nd July 2019</list-item>
        <list-item>Conference day is 4th October 2019</list-item>
        <list-item>Workshop day is 5th October 2019</list-item>
        <list-item>You are welcome to submit as many proposals as you like</list-item>
        <list-item>Accepted CFP's will be notified as soon as possible</list-item>
        <list-item>Rejected CFP's will be notified after the deadline</list-item>
        <list-item>Travel and Accommodation reimbursement is supplied where required</list-item>
        <list-item>Purchased tickets and addons will be refunded</list-item>
      </list>
      <form-button
        tag="a"
        href="https://docs.google.com/forms/d/e/1FAIpQLSdcRF5c8ZbsKAv1jD0CSs4h9IyMr8ySMxjPgGz8tnku8kY6vg/viewform"
        rel="noopener"
        target="_blank"
        >Apply now!</form-button
      >
    </page-section>
  </main>
</template>

<script>
import FormButton from '~/components/FormButton.vue'
import Heading from '~/components/Heading.vue'
import List from '~/components/List.vue'
import ListItem from '~/components/ListItem.vue'
import PageSection from '~/components/PageSection.vue'
import Paragraph from '~/components/Paragraph.vue'

export default {
  head: {
    title: 'Vue.js London 2019 | Diversity',
  },

  components: {
    FormButton,
    Heading,
    List,
    ListItem,
    PageSection,
    Paragraph,
  },
}
</script>

<template>
  <main>
    <page-section>
      <heading variant="block">Advice Lounge</heading>
      <paragraph>
        The Advice Lounge is a relaxed and friendly area to engage with experts, community leaders,
        speakers and other attendees. Join the Advice Lounge for one-on-one engagements with experts
        or initiate discussions with the experts, speakers and other attendees.
      </paragraph>

      <heading level="2" variant="block">Experts</heading>
      <experts />
    </page-section>
  </main>
</template>

<script>
import Experts from '~/components/Experts.vue'
import Heading from '~/components/Heading.vue'
import PageSection from '~/components/PageSection.vue'
import Paragraph from '~/components/Paragraph.vue'

export default {
  head: {
    title: 'Vue.js London 2019 | Advice Lounge',
  },

  components: {
    Experts,
    Heading,
    PageSection,
    Paragraph,
  },
}
</script>

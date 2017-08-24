<template>
  <main>
    <page-section>
      <heading variant="block">Advice Lounge - 2018</heading>

      <paragraph>
        Meet our advice lounge experts from 2018. The adive lounge was a relaxed and friendly area
        to ask questions and initiate discussions with other attendees, experts and speakers.
      </paragraph>

      <heading level="2" variant="block">Experts</heading>
      <speaker-list columns="2">
        <speaker
          :social="{
            github: 'https://github.com/chrisvfritz',
            twitter: 'https://twitter.com/chrisvfritz',
          }"
          image="/img/speakers/chris.jpg"
          name="Chris Fritz"
          title="Consultant and Vue Core Team"
        />

        <speaker
          :social="{
            github: 'https://github.com/LinusBorg',
            twitter: 'https://twitter.com/Linus_Borg',
          }"
          image="/img/speakers/thorsten.jpg"
          name="Thorsten Lünborg"
          title="Vue.js core team member"
        />

        <speaker
          :social="{
            github: 'https://github.com/remy',
            twitter: 'https://twitter.com/rem',
          }"
          image="/img/speakers/remy.jpg"
          name="Remy Sharp"
          title="PWAs, performance and more"
        />

        <speaker
          :social="{
            github: 'https://github.com/shentao',
            twitter: 'https://twitter.com/DamianDulisz',
          }"
          image="/img/speakers/damian.jpg"
          name="Damian Dulisz"
          title="Consultant and Vue Core Team"
        />

        <speaker
          :social="{
            github: 'https://github.com/gaearon',
            twitter: 'https://twitter.com/dan_abramov',
          }"
          image="/img/speakers/dan.jpg"
          name="Dan Abramov"
          title="Working on React"
        />
      </speaker-list>
    </page-section>
  </main>
</template>

<script>
import Heading from '~/components/Heading.vue'
import PageSection from '~/components/PageSection.vue'
import Paragraph from '~/components/Paragraph.vue'
import Speaker from '~/components/Speaker'
import SpeakerList from '~/components/SpeakerList'

export default {
  layout: 'previous/2018',

  head: {
    title: 'Vue.js London 2018 | Advice Lounge',
  },

  components: {
    Heading,
    PageSection,
    Paragraph,
    Speaker,
    SpeakerList,
  },
}
</script>

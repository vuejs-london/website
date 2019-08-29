<template>
  <speaker-list columns="2">
    <speaker
      :social="{
        github: 'https://github.com/chrisvfritz',
        twitter: 'https://twitter.com/chrisvfritz',
      }"
      image="/img/speakers/chris.jpg"
      name="Chris Fritz"
      title="Consultant and Vue Core Team"
      topic="Everything Vue"
    />

    <speaker
      :social="{
        github: 'https://github.com/chrisdemars',
        twitter: 'https://twitter.com/saltnburnem',
      }"
      image="/img/speakers/chris-demars.jpg"
      name="Chris DeMars"
      title="UI Developer, Microsoft MVP, Google Developer Expert"
      topic="Accessibility"
    />

    <speaker image="/img/logo-120.png" topic="Coming soon..." />

    <speaker image="/img/logo-120.png" topic="Coming soon..." />

    <speaker image="/img/logo-120.png" topic="Coming soon..." />

    <speaker image="/img/logo-120.png" topic="Coming soon..." />
  </speaker-list>
</template>

<script>
import Speaker from '~/components/Speaker'
import SpeakerList from '~/components/SpeakerList'

export default {
  components: {
    Speaker,
    SpeakerList,
  },
}
</script>

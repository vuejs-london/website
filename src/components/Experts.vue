<template>
  <speaker-list columns="2">
    <speaker
      :social="{
        github: 'https://github.com/chrisvfritz',
        twitter: 'https://twitter.com/chrisvfritz',
      }"
      image="/img/speakers/chris-fritz.jpg"
      name="Chris Fritz"
      title="Consultant and Vue Core Team"
      topic="Everything Vue"
      no-action
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
      no-action
    />
    <speaker
      :social="{
        github: 'https://github.com/tzhelyazkova',
        twitter: 'https://twitter.com/tonina_zh',
      }"
      image="/img/speakers/tonina-zhelyazkova.jpg"
      name="Tonina Zhelyazkova"
      topic="JS, Vue, Vuex, Unit Testing"
      title="Full Stack Developer"
      no-action
    />
    <speaker
      :social="{
        github: 'https://github.com/lucamezzalira',
        twitter: 'https://twitter.com/lucamezzalira',
      }"
      image="/img/speakers/luca-mezzalira.jpg"
      name="Luca Mezzalira"
      topic="Microfrontends"
      title="VP of Architecture at DAZN, a Google Developer Expert on Web Technologies and the London JavaScript Community Manager"
      no-action
    />
    <speaker
      :social="{
        github: 'https://github.com/Akryum',
        twitter: 'https://twitter.com/Akryum',
      }"
      image="/img/speakers/guillaume-chau.jpg"
      name="Guillaume Chau"
      topic="Vue, GraphQL and more"
      title="Vue.js Core Team"
      no-action
    />
    <speaker
      :social="{
        github: 'https://github.com/marialamardo',
        twitter: 'https://twitter.com/marialamardo',
      }"
      image="/img/speakers/maria-lamardo.jpg"
      name="Maria Lamardo"
      topic="Accessibility"
      title="Front End Engineer at Pendo"
      no-action
    />
    <speaker
      :social="{
        github: 'https://github.com/filipalacerda',
        gitlab: 'https://gitlab.com/filipa',
        twitter: 'https://twitter.com/FilipaLacerda',
      }"
      image="/img/speakers/filipa-lacerda.jpg"
      name="Filipa Lacerda"
      topic="Vue, Vuex and Code Refactoring"
      title="Front End Engineer at Pendo"
      no-action
    />
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

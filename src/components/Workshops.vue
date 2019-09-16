<template>
  <div>
    <speaker-list columns="2">
      <speaker
        :social="{
          github: 'https://github.com/krystalcampioni',
          twitter: 'https://twitter.com/krystalcampioni',
        }"
        image="/img/speakers/krystal-campioni.jpg"
        name="Krystal Campioni"
        title="Senior Front-end Developer at Shopify"
        topic="Motion Design with Vue"
        time="09:00 - 17:00"
        tickets="https://www.universe.com/events/vue-js-london-2019-workshops-tickets-london-ZGMY90"
      >
        <paragraph>
          In this workshop I’ll walk you through some fundamental aspects of designing motion for
          the web. How you can use transitions and animations to improve the user experience and how
          to build Vue components that encapsulate motion for reuse.
        </paragraph>
        <paragraph>
          We’ll explore how to implement advanced page transitions and how we can integrate Vue with
          Canvas, and take advantage of its highly performant API combined with the delightful and
          easy to use Vue syntax.
        </paragraph>
      </speaker>
      <speaker
        :social="{
          github: 'https://github.com/chrisdemars',
          twitter: 'https://twitter.com/saltnburnem',
        }"
        image="/img/speakers/chris-demars.jpg"
        name="Chris DeMars"
        title="UI Developer, Microsoft MVP, Google Developer Expert"
        topic="Rea11y Simple A11y: A Focused Accessibility Workshop"
        time="09:00 - 13:00"
        tickets="https://www.universe.com/events/vue-js-london-2019-workshops-tickets-london-ZGMY90"
      >
        <paragraph>
          This is a half-day workshop in the morning.
        </paragraph>
        <paragraph>
          Accessibility on the web is increasing in visibility, yet some web creators are still
          unfamiliar with how to create an amazing, accessible user experience. Spoiler alert, it
          starts with design, but what happens after that? In this workshop, I will walk the
          attendees through a site that has multiple violations, and a low score in Lighthouse. I
          will also touch on aXe Core, what it is, and how to use it. After we comb through the
          site, I will introduce easy wins like semantic markup, alt attributes, and ARIA labels to
          remove all violations. You’ll walk away with the knowledge to build your sites with
          accessibility in mind.
        </paragraph>
      </speaker>
      <speaker
        :social="{
          github: 'https://github.com/chrisvfritz',
          twitter: 'https://twitter.com/chrisvfritz',
        }"
        image="/img/speakers/chris-fritz.jpg"
        name="Chris Fritz"
        title="Consultant and Vue Core Team"
        topic="Proven patterns for building Vue apps"
        time="09:00 - 17:00"
        tickets="https://www.universe.com/events/vue-js-london-2019-workshops-tickets-london-ZGMY90"
      >
        <paragraph>
          In this workshop, we'll cover everything you need to know to get started building
          world-class Vue applications. Topics will include using Vue CLI to build apps of any
          scale, setting up the most advanced workflows currently possible, how to organize (and
          reorganize) increasingly complex applications, and more.
        </paragraph>
      </speaker>
      <speaker
        :social="{
          github: 'https://github.com/vueschool',
          twitter: 'https://twitter.com/VueSchool_io',
        }"
        :image="['/img/speakers/rolf-haug.jpg', '/img/speakers/alex-kyriakidis.jpg']"
        :name="['Rolf Haug', 'Alex Kyriakidis']"
        title="Teachers of Vue.js at Vue School"
        topic="Scaling applications with Vuex"
        time="09:00 - 17:00"
        tickets="https://www.universe.com/events/vue-js-london-2019-workshops-tickets-london-ZGMY90"
      >
        <paragraph>
          In Vue.js, it is quite simple to work with components, and share data among them using
          events and props - especially in small to medium projects. When an application starts
          growing, managing components state might become tedious and overwhelming. This is where
          Vuex comes to our rescue.
        </paragraph>
        <paragraph>
          Vuex is a state management pattern and official library for Vue.js applications. It serves
          as a centralized store for all the components in an application, with rules ensuring that
          the state can only be mutated in a predictable fashion.
        </paragraph>
        <paragraph>
          By the end of the workshop, attendees will be able to develop elegant, debuggable,
          maintainable, and organized applications using a centralized store. No prior experience
          with Vuex is needed.
        </paragraph>
        <paragraph>
          We will answer the common question, “When should I use Vuex?” and work on real-world
          features.
        </paragraph>
        <list bullet>
          <list-item>
            Understanding State Management Patterns
          </list-item>
          <list-item>
            What is Vuex and what problems does it solve
          </list-item>
          <list-item>
            Core concepts including Mutations, Actions, and Getters
          </list-item>
          <list-item>
            Modularising the store
          </list-item>
          <list-item>
            Composing Vuex assets using Higher-Order Functions
          </list-item>
          <list-item>
            Implementing Vuex pseudo-cache
          </list-item>
          <list-item>
            Best practices, common gotchas, and application architecture
          </list-item>
        </list>
        <paragraph>
          The workshop is divided into eight modules. Each module consists of one part theory and
          one part of exercises where we get our hands on Vuex and practice what we learn.
        </paragraph>
      </speaker>
      <speaker
        :social="{
          github: 'https://github.com/codebryo',
          twitter: 'https://twitter.com/codebryo',
        }"
        image="/img/speakers/roman-kuba.jpg"
        name="Roman Kuba"
        title="Engineering Manager at at Codeship"
        topic="In-depth Application Testing with Vue"
        time="09:00 - 17:00"
        tickets="https://www.universe.com/events/vue-js-london-2019-workshops-tickets-london-ZGMY90"
      >
        <paragraph>
          Working with Vue is a lot of fun and you can build amazing applications with it. When
          building a full product though, we want to make sure it's all highest quality. Besides
          good development patterns, testing is an incredibly important aspect of the delivery
          process.
        </paragraph>
        <paragraph>
          With my years of experience in building a big scale SaaS product in the CI space, and
          working with Vue in production since 0.11 days, I am happy to introduce you to practical
          in-depth application testing with Vue.
        </paragraph>
        <list bullet>
          <list-item>
            Learn the basics of Jest and what you can do with it
          </list-item>
          <list-item>
            Get started with the Vue Test Utils
          </list-item>
          <list-item>
            Learn the ins and outs of Snapshot testing
          </list-item>
          <list-item>
            Inject Dependencies into your Vue Components
          </list-item>
          <list-item>
            Mocks and Stubs within Vue Components
          </list-item>
          <list-item>
            Destructure and Test a complex Vuex Store
          </list-item>
          <list-item>
            Learn to use factories for more efficiency
          </list-item>
          <list-item>
            Behavior driven snapshot testing of use flows
          </list-item>
        </list>
        <paragraph>
          All you need to bring along is basic knowledge about Vue. No need to be an expert or even
          an a master of Vuex. Learning to write tests will make you a better developer along the
          way, as you'll end up writing simpler and more precise code.
        </paragraph>
      </speaker>
      <speaker
        :social="{
          github: 'https://github.com/amirrustam',
          twitter: 'https://twitter.com/amirrustam',
        }"
        image="/img/speakers/amir-rustamzadeh.jpg"
        name="Amir Rustamzadeh"
        title="Head of DX at Cypress.io"
        topic="E2E testing with Cypress"
        time="09:00 - 17:00"
        tickets="https://www.universe.com/events/vue-js-london-2019-workshops-tickets-london-ZGMY90"
      >
        <paragraph>
          We all want to consistently ship quality software. One of the best ways to do that is by
          end-to-end (E2E) testing our apps to simulate the real actions of our users. However, E2E
          testing in real browsers has notoriously been time-consuming, expensive, slow, and often
          flaky. Unfortunately, these issues lead to developers doing very little to no E2E testing
          and taking solace in a plethora of unit-tests that cannot fully test the intended
          experience of users.
        </paragraph>
        <paragraph>
          In this hands-on session, we’ll dive deep into using Cypress, a developer-friendly
          open-source tool that enables us to easily compose flake-free, reliable, deterministic E2E
          tests for our web applications.
        </paragraph>
        <paragraph>
          Session Outline
        </paragraph>
        <list bullet>
          <list-item>
            Introduction &amp; Overview
          </list-item>
          <list-item>
            Cypress basics
          </list-item>
          <list-item>
            Adding tests and configurations
          </list-item>
          <list-item>
            Cypress Selector Playground
          </list-item>
          <list-item>
            Resetting/cleanup between tests
          </list-item>
          <list-item>
            Spying and stubbing XHR requests
          </list-item>
          <list-item>
            Accessing application code and data
          </list-item>
          <list-item>
            Setting up E2E tests on CI
          </list-item>
          <list-item>
            Setting up Cypress Dashboard
          </list-item>
          <list-item>
            Test Reporters
          </list-item>
          <list-item>
            Retry-ability
          </list-item>
          <list-item>
            Custom commands
          </list-item>
          <list-item>
            Page Objects vs App Actions
          </list-item>
          <list-item>
            Fixtures
          </list-item>
          <list-item>
            Debugging
          </list-item>
          <list-item>
            Preprocessors
          </list-item>
          <list-item>
            Component Testing
          </list-item>
          <list-item>
            Code coverage
          </list-item>
        </list>
        <paragraph>
          The session will be accompanied by exercises, demo app, and slides.
        </paragraph>
      </speaker>

      <speaker
        image="/img/speakers/vuevixens.png"
        topic="A Vue Vixens Skulk"
        time="13:30 - 17:30"
        signup="https://vuevixens.org/events/vue-london-2019"
      >
        <paragraph>
          Join Boston Vue.js Co-Organizer Kristin Ruben and Raleigh-Durham Chapter Leader Maria
          Lamardo for a fun Vue.js workshop on code reuse, from mixins to the new Vue 3.0 functions
          API!
        </paragraph>
        <paragraph>
          This event is free and open to anyone who identify as a woman and wants to learn about
          Vue.js. No previous knowledge of Vue.js is required to attend this event and we invite
          women of all ages, skill levels and backgrounds to join us.
        </paragraph>
      </speaker>
    </speaker-list>

    <div ref="tickets" />
  </div>
</template>

<script>
import List from '~/components/List'
import ListItem from '~/components/ListItem'
import Paragraph from '~/components/Paragraph'
import Speaker from '~/components/Speaker'
import SpeakerList from '~/components/SpeakerList'

export default {
  components: {
    List,
    ListItem,
    Paragraph,
    Speaker,
    SpeakerList,
  },

  mounted() {
    const element = document.createElement('script')
    element.src = 'https://www.universe.com/embed2.js'

    this.$refs.tickets && this.$refs.tickets.append(element)
  },
}
</script>

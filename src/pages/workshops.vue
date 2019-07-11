<template>
  <main>
    <page-section>
      <form-button to="/tickets" tag="nuxt-link" class="p__tickets">Conference tickets</form-button>

      <heading variant="block">Workshops</heading>
      <heading level="4" tag="p" class="p__location">
        CCT Venues, 193 Marsh Wall, Isle of Dogs, London E14 9RS
      </heading>

      <speaker-list columns="2">
        <speaker image="/img/logo-120.png" topic="Motion Design with Vue" time="09:00 - 17:00">
          <paragraph>
            In this workshop I’ll walk you through some fundamental aspects of designing motion for
            the web. How you can use transitions and animations to improve the user experience and
            how to build Vue components that encapsulate motion for reuse.
          </paragraph>
          <paragraph>
            We’ll explore how to implement advanced page transitions and how we can integrate Vue
            with Canvas, and take advantage of its highly performant API combined with the
            delightful and easy to use Vue syntax.
          </paragraph>
        </speaker>
        <speaker
          image="/img/logo-120.png"
          topic="Rea11y Simple A11y: A Focused Accessibility Workshop"
          time="09:00 - 13:00"
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
            site, I will introduce easy wins like semantic markup, alt attributes, and ARIA labels
            to remove all violations. You’ll walk away with the knowledge to build your sites with
            accessibility in mind.
          </paragraph>
        </speaker>
        <speaker
          image="/img/logo-120.png"
          topic="Proven patterns for building Vue apps"
          time="09:00 - 17:00"
        >
          <paragraph>
            In this workshop, we'll cover everything you need to know to get started building
            world-class Vue applications. Topics will include using Vue CLI to build apps of any
            scale, setting up the most advanced workflows currently possible, how to organize (and
            reorganize) increasingly complex applications, and more.
          </paragraph>
        </speaker>
        <speaker
          image="/img/logo-120.png"
          topic="Scaling applications with Vuex"
          time="09:00 - 17:00"
        >
          <paragraph>
            In Vue.js, it is quite simple to work with components, and share data among them using
            events and props - especially in small to medium projects. When an application starts
            growing, managing components state might become tedious and overwhelming. This is where
            Vuex comes to our rescue.
          </paragraph>
          <paragraph>
            Vuex is a state management pattern and official library for Vue.js applications. It
            serves as a centralized store for all the components in an application, with rules
            ensuring that the state can only be mutated in a predictable fashion.
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
        <speaker image="/img/logo-120.png" topic="Fundamentals of Vue" time="09:00 - 17:00">
          <paragraph>
            This workshop will teach you the fundamentals of Vue.js so you can start being
            productive and building apps immediately. With visual animations and analogies that make
            abstract concepts concrete, along with coding challenges that help you learn by doing,
            you'll have a solid foundation of Vue skills by the end of the day. This class will
            cover any Vue 3 syntax that is necessary (but for the basics there may not be any).
          </paragraph>
          <paragraph>
            Prerequisites: The basics of JavaScript and HTML.
          </paragraph>
          <paragraph>
            We will alternate between lecture and doing code challenges, so you can learn by doing.
            Topics include:
          </paragraph>
          <list bullet>
            <list-item>
              The Vue instance
            </list-item>
            <list-item>
              Attribute binding
            </list-item>
            <list-item>
              Conditional rendering
            </list-item>
            <list-item>
              List rendering
            </list-item>
            <list-item>
              Event handling
            </list-item>
            <list-item>
              Class &amp; style binding
            </list-item>
            <list-item>
              Computed properties
            </list-item>
            <list-item>
              Components
            </list-item>
            <list-item>
              Communicating events
            </list-item>
            <list-item>
              Forms
            </list-item>
            <list-item>
              Tabs
            </list-item>
            <list-item>
              Vue CLI 3
            </list-item>
            <list-item>
              Vue Router basics
            </list-item>
            <list-item>
              Single file components
            </list-item>
            <list-item>
              Global components
            </list-item>
            <list-item>
              Slots
            </list-item>
            <list-item>
              APIs with Axios
            </list-item>
          </list>
        </speaker>
        <speaker
          image="/img/logo-120.png"
          topic="In-depth Application Testing with Vue"
          time="09:00 - 17:00"
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
            All you need to bring along is basic knowledge about Vue. No need to be an expert or
            even an a master of Vuex. Learning to write tests will make you a better developer along
            the way, as you'll end up writing simpler and more precise code.
          </paragraph>
        </speaker>
      </speaker-list>

      <paragraph class="p__why">
        But who is presenting? To remove bias we have decided to not name the speakers of the
        workshops at this time. This means you are purchasing based on the content you really want
        to know, and not based on the popularity of the presenters.
      </paragraph>

      <div ref="tickets" class="tickets"></div>
    </page-section>
  </main>
</template>

<script>
import FormButton from '~/components/FormButton.vue'
import Heading from '~/components/Heading'
import List from '~/components/List'
import ListItem from '~/components/ListItem'
import PageSection from '~/components/PageSection'
import Paragraph from '~/components/Paragraph'
import Speaker from '~/components/Speaker'
import SpeakerList from '~/components/SpeakerList'

export default {
  head: {
    title: 'Vue.js London 2019 | Workshops',
  },

  components: {
    FormButton,
    Heading,
    List,
    ListItem,
    PageSection,
    Paragraph,
    Speaker,
    SpeakerList,
  },

  mounted() {
    const element = document.createElement('script')
    element.src = 'https://www.universe.com/embed2.js'
    element.dataset.widgetType = 'universe-ticket'
    element.dataset.targetType = 'Listing'
    element.dataset.targetId = 'vue-js-london-2019-workshops-tickets-london-ZGMY90'
    element.dataset.state = 'buttonColor=#42b883&buttonText=Get Tickets'

    this.$refs.tickets && this.$refs.tickets.append(element)
  },
}
</script>

<style lang="postcss" scoped>
.tickets {
  margin: var(--grid-eight) 0;
}

.p__why {
  margin-top: var(--grid-six);
}

.p__location {
  margin-bottom: var(--grid-six);
  text-align: center;
}

.p__tickets {
  position: sticky;
  z-index: var(--z-index-button-sticky);
  top: calc(var(--grid-ten) - 3px);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>

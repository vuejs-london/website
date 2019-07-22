<template>
  <main>
    <hero />
    <page-section>
      <why-icons class="p__icons" />
      <heading level="2" variant="block">Announced Talks</heading>
      <speaker-list columns="2">
        <speaker image="/img/logo-120.png" topic="Scalable data visualisation with D3 and Vue">
          <paragraph>
            D3 is the best choice when you want to create complex and interactive data visualisation
            for the web. D3 works directly with the DOM. In contrast, Vue works with a virtual DOM.
          </paragraph>
          <paragraph>
            How can you make the two have a great friendship and not fight over DOM manipulation?
          </paragraph>
          <paragraph>
            I will cover this in my talk and also tips on how to build scalable data visualisation
            components, when is a good idea to use D3 and methods on how to make it less
            intimidating when combined with Vue. I will show examples from simple D3 visualisations
            to more complex ones
          </paragraph>
        </speaker>
        <speaker
          image="/img/logo-120.png"
          topic="Identifying and solving performance issues in Vue applications"
        >
          <paragraph>
            In mobile-first era performance has never been more important yet a lot of websites
            struggle with many issues in this area. During the talk, after short theoretical
            introduction I’ll dig into a live coding session on a real-world Vue application that
            suffers from performance issues.
          </paragraph>
          <paragraph>
            I will show how to solve them on stage while introducing proper usage of lazy loading
            for routes, libs and components along with proper caching strategies.
          </paragraph>
          <paragraph>
            I will also show tools that could identify performance issues and suggest proper way of
            solving them like Webpack Bundle Analyzer or Bundlephobia.
          </paragraph>
        </speaker>
        <speaker image="/img/logo-120.png" topic="Scripting in style, what's your Vue?">
          <paragraph>
            Built-in CSS Modules and Scoped CSS support eases the process of styling your Vue. But a
            separate &lt;style&gt; tag is still needed. What about styling directly and dynamically
            in JavaScript - aka CSS-in-JS and save the pain?
          </paragraph>
          <paragraph>Should we, or should we not consider this as a good approach?</paragraph>
        </speaker>
        <speaker image="/img/logo-120.png" topic="5 animations any Vue app can use">
          <paragraph>
            We've heard that animating our web interfaces can improve user experience and even boost
            conversions, but what exactly should we be animating, and how?
          </paragraph>
          <paragraph>
            This talk walks through using Vue.js to build several practical animations any web app
            can use to help increase user engagement and enjoyment.
          </paragraph>
        </speaker>
        <speaker image="/img/logo-120.png" topic="The new Function-based component API">
          <paragraph>
            Vue 3 and a Vue 2 plugin will offer new ways of encapsulating reusable chunks of code
            that offer a lot of advantages over patterns/features like mixins, Wrapper Components or
            Renderless components: composition functions using dynamic lifecycle hooks and the new
            Reactivity API.
          </paragraph>
          <paragraph>
            In this talk, we will talk about the history of these "other" features, their use cases
            and their use cases and weaknesses, and finally, show how you can solve these use cases
            that the Functional Component Composition API provides, and how that's better in a lot
            of ways: more elegant, more composable, less scattered.
          </paragraph>
        </speaker>
        <speaker
          image="/img/logo-120.png"
          topic="Live coding: The new Function-based component API"
        >
          <paragraph>
            Extending the talk `The new Function-base component API`, we will do a full live coding
            session to explain the details that the new API offers, coding and building real life
            examples to expand the horizons for your applications.
          </paragraph>
          <paragraph>
            With this live coding session we aim to discover the benefits and details of the new
            Function-based component API, and have a little laugh along the way.
          </paragraph>
        </speaker>
        <speaker image="/img/logo-120.png" topic="Decoding Vue 3">
          <paragraph>
            Some of the biggest changes in Vue 3 aren't the easiest to understand. I will explain
            some of the complex features of Vue 3 visually with animation.
          </paragraph>
          <paragraph>
            Consider this a guided tour of advanced concepts to grasp in order to start using Vue in
            new and even more powerful ways.
          </paragraph>
        </speaker>
        <speaker image="/img/logo-120.png" topic="A new Router to guide your Apps">
          <paragraph>
            Vue official router has been a pleasure to build apps with but as the community grows,
            so do the router needs. However, it hasn't kept up as good as I wish it had with all the
            good proposals out there. As a result, we have also taken more time to work on the new
            version of Vue router and shaping an API that will serve Vue 2 and Vue 3. A more
            extensible router, easier to contribute and new architecture from scratch. Let's talk
            about what has changed in the new Router and all the improvements we are bringing.
          </paragraph>
        </speaker>
        <speaker image="/img/logo-120.png" topic="Types of Vue">
          <paragraph>
            TypeScript offers a lot of benefits over JavaScript such as type safety and better
            auto-completion in editors, but these benefits do not directly trickle down to Vue. In
            this talk, I trace through improvements in the Vue Language Server that enables type
            safety of Vue Single File Components, and what that entails for writing type-safe Vue
            code.
          </paragraph>
          <paragraph>
            I will talk about innovations in Vue Language Server that could improve Vue developer's
            productivity. Finally, we will examine how we can leverage types to build a better
            ecosystem of Vue components.
          </paragraph>
        </speaker>
        <speaker image="/img/logo-120.png" topic="Keynote">
          <paragraph>
            Description to be confirmed
          </paragraph>
        </speaker>
      </speaker-list>

      <heading level="2" variant="block">Our Sponsors</heading>
      <sponsor-group columns="1" size="medium">
        <template #title>
          Silver
        </template>
        <sponsor
          href="https://www.telerik.com/kendo-ui#vue"
          rel="noopener"
          image="/img/sponsors/progress.png"
          title="Progress"
        />
      </sponsor-group>

      <sponsor-group columns="1">
        <template #title>
          Video
        </template>
        <sponsor
          href="https://www.vuemastery.com/?utm_campaign=conference&utm_source=vuelondon"
          rel="noopener"
          image="/img/sponsors/vuemastery.svg"
          title="VueMastery"
        />
      </sponsor-group>

      <form-button
        tag="a"
        href="https://drive.google.com/file/d/1YYHlMjzAkrqSJwdGN_vSg9L4Y1hi17D1/view"
        >Sponsor Brochure</form-button
      >
    </page-section>
  </main>
</template>

<script>
import FormButton from '~/components/FormButton'
import Heading from '~/components/Heading'
import Hero from '~/components/Hero'
import PageSection from '~/components/PageSection'
import Paragraph from '~/components/Paragraph'
import Speaker from '~/components/Speaker'
import SpeakerList from '~/components/SpeakerList'
import Sponsor from '~/components/Sponsor'
import SponsorGroup from '~/components/SponsorGroup'
import WhyIcons from '~/components/WhyIcons'

export default {
  components: {
    FormButton,
    Heading,
    Hero,
    PageSection,
    Paragraph,
    Speaker,
    SpeakerList,
    Sponsor,
    SponsorGroup,
    WhyIcons,
  },

  head: {
    title: 'Vue.js London 2019',
  },
}
</script>

<style lang="postcss" scoped>
.p__icons {
  margin-top: var(--grid-six);
}
</style>

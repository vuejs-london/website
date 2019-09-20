<template>
  <main>
    <hero />
    <page-section>
      <why-icons class="p__icons" />
      <heading level="2" variant="block">OS Awards</heading>
      <div class="p__osawards">
        <page-image
          src="/img/osawards-page-image.jpg"
          alt="Vue OS Awards"
          decoding="async"
          importance="low"
          class="p__osawards-image"
        />
        <div class="p__osawards-copy">
          <paragraph>
            Celebrate the Vue.js Open Source Community, as we host the Vue OS Awards Ceromony! A 30
            minute session dedicated to cheering on the community, and continue the celebrations at
            the After party!
          </paragraph>
          <paragraph>
            Nominate projects across five categories; Gamechanger, Breaker of chains, Fun side
            project of the year, Impactful contributor, Developer Experience.
          </paragraph>
        </div>
      </div>

      <form-button tag="a" href="https://osawards.com/vue/">
        Nominate a project
      </form-button>

      <heading level="2" variant="block">Our MC</heading>
      <speaker-list columns="1">
        <speaker
          :social="{
            twitter: 'https://twitter.com/debs_obrien',
            github: 'https://github.com/debs-obrien',
          }"
          image="/img/speakers/debbie-obrien.jpg"
          name="Debbie O'Brien"
          title="Frontend Tech Lead at Patterson Agency"
          topic="MC for Vue.js London 2019"
        >
          <paragraph>
            Debbie works as a Frontend Tech Lead at Patterson Agency, a digital agency in Mallorca,
            Spain. With over 10 years of experience in Frontend development, she has a special love
            for JavaScript frameworks, especially Vue.js and Nuxt.js and improving performance with
            webpack.
          </paragraph>
          <paragraph>
            Debbie holds a Frontend and FullStack Tech Degree and is Microsoft certified. She is an
            international speaker and organizer of MallorcaJS and VueSpain. She also works as a tech
            degree moderator for Treehouse and a mentor for OpenClassrooms and is a webpack and
            Nuxt.js contributor. She is a teacher at Vue School and a writer for Ultimate Courses.
          </paragraph>
          <paragraph>
            When she is not programming she loves doing sport especially taekwondo, skiing, cycling
            and running.
          </paragraph>
        </speaker>
      </speaker-list>

      <heading level="2" variant="block">Announced Talks</heading>
      <speaker-list columns="2">
        <speaker
          :social="{
            twitter: 'https://twitter.com/CodesOfRa',
            github: 'https://github.com/CodesOfRa',
          }"
          image="/img/speakers/ramona-biscoveanu.jpg"
          name="Ramona Biscoveanu"
          title="Javascript Developer + Machine Learning enthusiast"
          topic="Scalable data visualisation with D3 and Vue"
        >
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
          :social="{
            twitter: 'https://twitter.com/filrakowski',
            github: 'https://github.com/filrak',
          }"
          image="/img/speakers/filip-rakowski.jpg"
          name="Filip Rakowski"
          title="Co-founder Vue Storefront"
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
        <speaker
          :social="{
            twitter: 'https://twitter.com/MayaShavin',
            github: 'https://github.com/mayashavin',
          }"
          image="/img/speakers/maya-shavin.jpg"
          name="Maya Shavin"
          title="Senior Frontend Developer at Cloudinary"
          topic="Scripting in style, what's your Vue?"
        >
          <paragraph>
            Built-in CSS Modules and Scoped CSS support eases the process of styling your Vue. But a
            separate &lt;style&gt; tag is still needed. What about styling directly and dynamically
            in JavaScript - aka CSS-in-JS and save the pain?
          </paragraph>
          <paragraph>Should we, or should we not consider this as a good approach?</paragraph>
        </speaker>
        <speaker
          :social="{
            twitter: 'https://twitter.com/adamjahr',
            github: 'https://github.com/atomjar',
          }"
          image="/img/speakers/adam-jahr.jpg"
          name="Adam Jahr"
          title="Instructor at VueMastery"
          topic="Animations any Vue app can use"
        >
          <paragraph>
            We've heard that animating our web interfaces can improve user experience and even boost
            conversions, but what exactly should we be animating, and how?
          </paragraph>
          <paragraph>
            This talk walks through using Vue.js to build several practical animations any web app
            can use to help increase user engagement and enjoyment.
          </paragraph>
        </speaker>
        <speaker
          :social="{
            twitter: 'https://twitter.com/linus_borg',
            github: 'https://github.com/LinusBorg',
          }"
          image="/img/speakers/thorsten-luenborg.jpg"
          name="Thorsten Luenborg"
          title="Vue.js Core team member"
          topic="The new Composition API"
        >
          <paragraph>
            Vue 3 and a Vue 2 plugin will offer new ways of encapsulating reusable chunks of code
            that offer a lot of advantages over patterns/features like mixins, Wrapper Components or
            Renderless components: composition functions using dynamic lifecycle hooks and the new
            Reactivity API.
          </paragraph>
          <paragraph>
            In this talk, we will talk about the history of these "other" features, their use cases
            and their use cases and weaknesses, and finally, show how you can solve these use cases
            that the Composition API provides, and how that's better in a lot of ways: more elegant,
            more composable, less scattered.
          </paragraph>
        </speaker>
        <speaker
          :social="{
            twitter: 'https://twitter.com/ycmjason',
            github: 'https://github.com/ycmjason',
          }"
          image="/img/speakers/jason-yu.jpg"
          name="Jason Yu"
          title="Frontend Engineer at Attest"
          topic="Live coding: The new Composition API"
        >
          <paragraph>
            Extending the talk `The new Composition API`, we will do a full live coding session to
            explain the details that the new API offers, coding and building real life examples to
            expand the horizons for your applications.
          </paragraph>
          <paragraph>
            With this live coding session we aim to discover the benefits and details of the new
            Composition API, and have a little laugh along the way.
          </paragraph>
        </speaker>
        <speaker
          :social="{
            twitter: 'https://twitter.com/greggpollack',
            github: 'https://github.com/gregg',
          }"
          image="/img/speakers/gregg-pollack.jpg"
          name="Gregg Pollack"
          title="Teacher of Vue.js at Vue Mastery"
          topic="Vue 3’s Composition API Explained Visually"
        >
          <paragraph>
            The most powerful new feature of Vue 3 is the composition API, which provides an
            alternative syntax for writing components. In this talk, Gregg Pollack will introduce
            why this new API is needed, how it improves upon what is currently possible in Vue, and
            the basics of its syntax.
          </paragraph>
          <paragraph>
            Bigger Vue applications often run into two major problems.
          </paragraph>
          <list>
            <list-item>
              1. Component .vue files become too large and difficult to read.
            </list-item>
            <list-item>
              2. There are disadvantages to the patterns Vue 2 provides to reuse code across
              multiple components.
            </list-item>
          </list>
          <paragraph>
            In this talk, we will dive deeper into how these problems tend to show up, and then
            explain how the Vue 3 Composition API aims to solve them. We then begin to understand
            the new syntax and how to use it to build components that are more maintainable and
            scalable.
          </paragraph>
        </speaker>
        <speaker
          :social="{
            twitter: 'https://twitter.com/posva',
            github: 'https://github.com/posva',
          }"
          image="/img/speakers/eduardo-san-martin-morote.jpg"
          name="Eduardo San Martin Morote"
          title="Freelance and core Vue.js team member"
          topic="A new Router to guide your Apps"
        >
          <paragraph>
            Vue official router has been a pleasure to build apps with but as the community grows,
            so do the router needs. However, it hasn't kept up as good as I wish it had with all the
            good proposals out there. As a result, we have also taken more time to work on the new
            version of Vue router and shaping an API that will serve Vue 2 and Vue 3. A more
            extensible router, easier to contribute and new architecture from scratch. Let's talk
            about what has changed in the new Router and all the improvements we are bringing.
          </paragraph>
        </speaker>
        <speaker
          :social="{
            twitter: 'https://twitter.com/octref',
            github: 'https://github.com/octref',
          }"
          image="/img/speakers/pine-wu.jpg"
          name="Pine Wu"
          title="Software Engineer working on Visual Studio Code at Microsoft"
          topic="Types in Vue"
        >
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
        <speaker
          :social="{
            twitter: 'https://twitter.com/youyuxi',
            github: 'https://github.com/yyx990803',
          }"
          image="/img/speakers/evan-you.jpg"
          name="Evan You"
          title="Author of Vue"
          topic="Keynote"
          remote
        >
          <paragraph>
            Evan will be once again doing a remote talk - get the inside information on the progress
            of Vue.js 3 and more.
          </paragraph>
          <paragraph>
            Further details to be confirmed shortly.
          </paragraph>
        </speaker>
      </speaker-list>

      <heading level="2" variant="block">Workshops</heading>
      <workshops />

      <heading level="2" variant="block">Advice Lounge</heading>
      <paragraph>
        The Advice Lounge is a relaxed and friendly area to engage with experts, community leaders,
        speakers and other attendees. Join the Advice Lounge for one-on-one engagements with experts
        or initiate discussions with the experts, speakers and other attendees.
      </paragraph>
      <experts />

      <heading level="2" variant="block">Our Sponsors</heading>
      <sponsor-group columns="1" size="huge">
        <template #title>
          Platinum
        </template>
        <sponsor
          href="http://cloudinary.rocks/cecvl"
          rel="noopener"
          image="/img/sponsors/cloudinary.svg"
          title="Cloudinary"
        />
      </sponsor-group>

      <sponsor-group columns="1" size="large">
        <template #title>
          Gold
        </template>
        <sponsor
          href="https://www.telerik.com/kendo-ui#vue"
          rel="noopener"
          image="/img/sponsors/progress.png"
          title="Progress"
        />
        <sponsor
          href="https://askattest.com"
          rel="noopener"
          image="/img/sponsors/attest.svg"
          title="Progress"
        />
      </sponsor-group>

      <sponsor-group columns="1" size="medium">
        <template #title>
          Silver
        </template>
        <sponsor
          href="https://www.cypress.io/"
          rel="noopener"
          image="/img/sponsors/cypress.svg"
          title="Cypress.io"
        />
      </sponsor-group>

      <sponsor-group columns="1" size="medium">
        <template #title>
          After Party
        </template>
        <sponsor
          href="https://www.storyblok.com"
          rel="noopener"
          image="/img/sponsors/storyblok.svg"
          title="Storyblok"
        />
      </sponsor-group>

      <sponsor-group columns="1" size="small">
        <template #title>
          Diversity
        </template>
        <sponsor
          href="https://samknows.com"
          rel="noopener"
          image="/img/sponsors/samknows.svg"
          title="Sam Knows"
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

      <sponsor-group columns="1" size="small">
        <template #title>
          Snack
        </template>
        <sponsor
          href="https://www.level5.co.uk/"
          class="p-sponsor__level5"
          rel="noopener"
          image="/img/sponsors/level5.svg"
          title="Storyblok"
        />
      </sponsor-group>

      <sponsor-group columns="1" size="small">
        <template #title>
          Sticker
        </template>
        <sponsor
          href="https://mule.to/VuejsLondon"
          rel="noopener"
          image="/img/sponsors/stickermule.svg"
          title="Sticker Mule"
        />
      </sponsor-group>

      <form-button
        tag="a"
        href="https://drive.google.com/open?id=12loNOzIH56dJPUQXK4vcSzDjGUbcjMNA"
      >
        Sponsor Brochure
      </form-button>
    </page-section>
  </main>
</template>

<script>
import Experts from '~/components/Experts'
import FormButton from '~/components/FormButton'
import Heading from '~/components/Heading'
import Hero from '~/components/Hero'
import PageImage from '~/components/PageImage'
import PageSection from '~/components/PageSection'
import Paragraph from '~/components/Paragraph'
import Speaker from '~/components/Speaker'
import SpeakerList from '~/components/SpeakerList'
import Sponsor from '~/components/Sponsor'
import SponsorGroup from '~/components/SponsorGroup'
import WhyIcons from '~/components/WhyIcons'
import Workshops from '~/components/Workshops'

export default {
  components: {
    Experts,
    FormButton,
    Heading,
    Hero,
    PageImage,
    PageSection,
    Paragraph,
    Speaker,
    SpeakerList,
    Sponsor,
    SponsorGroup,
    WhyIcons,
    Workshops,
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

.p-sponsor__level5 {
  max-width: 80%;

  @media (--tablet-small) {
    max-width: 70%;
  }
}

.p__osawards {
  display: grid;
  grid-gap: var(--grid-two) var(--grid-four);

  @media (--tablet-small) {
    align-items: center;
    grid-template-columns: 40% 1fr;
  }

  @media (--tablet-large) {
    align-items: center;
    grid-template-columns: 45% 1fr;
  }
}

.p__osawards-image {
  margin: 0;
}
</style>

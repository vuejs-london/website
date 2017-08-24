<template>
  <main>
    <page-section>
      <heading variant="block">Speakers - 2018</heading>

      <heading level="2" variant="block">MC</heading>
      <speaker-list>
        <speaker
          :social="{
            github: 'https://github.com/philhawksworth',
            twitter: 'https://twitter.com/philhawksworth',
          }"
          image="/img/speakers/phil.jpg"
          topic="The MC of all MC's"
          name="Phil Hawksworth"
          title="Head of Developer Relations at Netlify"
        >
          Phil is Head of Developer Relations at Netlify, the fastest growing automation and hosting
          platform for modern websites.\n\nWith a passion for browser technologies, and the
          empowering properties of the Web, he loves seeking out ingenuity and simplicity,
          especially in places where over-engineering is common.\n\nPhil’s career in web development
          spans almost 20 years and includes time as a Software Engineer at Verisign, an Open Source
          Evangelist at British Telecom, and Technology Director at R/GA where he worked with
          clients around the world such as Nike, Google, Hyundai and Samsung to bring engaging and
          effective experiences to the widest audience possible.
        </speaker>
      </speaker-list>

      <heading level="2" variant="block">Speakers</heading>
      <speaker-list columns="2">
        <speaker
          :social="{
            github: 'https://github.com/Gregg',
            twitter: 'https://twitter.com/greggpollack',
          }"
          image="/img/speakers/gregg.jpg"
          topic="Reactivity &amp; Rendering Revealed"
          name="Gregg Pollack"
          title="Teacher of Vue.js at Vue Mastery"
        >
          It’s one thing to understand how to use a framework, and quite another to understand how
          it works beneath the surface. In this talk we’ll take a deep dive into the code to begin
          to understand reactivity, the virtual DOM, and the rendering engine. With this knowledge
          we can boost your ability to scale and debug Vue.js. Gregg’s Bio: Gregg Pollack is the
          founder of VueMastery.com, the Ultimate Resource for Vue.js developers. Previously he
          founded Code School, an online software programming school which was acquired by
          Pluralsight, Envy, a web application development firm, and Starter Studio, Orlando’s first
          technical accelerator now in it’s ninth class. He’s passionate about being a father,
          teaching tech, travel, psychology, and theatre.
        </speaker>
        <speaker
          :social="{
            github: 'https://github.com/codebryo',
            twitter: 'https://twitter.com/codebryo',
          }"
          image="/img/speakers/roman.jpg"
          topic="Advanced Vue Testing Strategies"
          name="Roman Kuba"
          title="Senior Software Engineer at Codeship"
        >
          By now we have Vue-test-utils and jest, and they are quite established to test vue
          components. Yet in real life apps we often struggle with testing components in a
          meaningful way beyond simple unit tests. In this talk you are learning how to Mock third
          party libraries or async Vuex actions. We will look at mocking out a Vuex store when
          mounting a component in the simplest yet most powerful way possible. Eventually we are
          going to look at how to build meaningful and assuring integrations tests for a full vue
          page combining diffing snapshots and everything we learned so far.
        </speaker>
        <speaker
          :social="{
            github: 'https://github.com/SaraVieira',
            twitter: 'https://twitter.com/nikkitaftw',
          }"
          image="/img/speakers/sara.jpg"
          topic="GraphQL + Apollo + Vue = Magic"
          name="Sara Vieira"
          title="Developer Advocate at @YLDio"
        >
          We all love Vue here and we all know that GraphQL is amazing and I want to get everyone in
          this room excited about this combination! Let’s see how to use Apollo and GraphQL to make
          our projects more maintanble and way more fun to make. Vue is already pretty amazing,
          right ? How about we make it even more amazing with GraphQL ?"
        </speaker>
        <speaker
          :social="{
            github: 'https://github.com/atinux',
            twitter: 'https://twitter.com/atinux',
          }"
          image="/img/speakers/sebastien.jpg"
          topic="The New Nuxt.js 2"
          name="Sebastien Chopin"
          title="Nuxt.js Co-name and Founder of CMTY"
        >
          Nuxt.js has come along way, and it is undoubtedly one of the most well-loved Vue.js tools
          out there. We will look at the updates to the internals of Nuxt.js alongside Webpack 4,
          hooks, modules, ESM. Let's see how Nuxt.js has improved and see how fast we can create
          Vue.js application (Universal, SPA, PWA...). We will also look at server-side rendering
          caveats and the best practice to keep in mind.,
        </speaker>
        <speaker
          :social="{
            gitlab: 'https://gitlab.com/jschatz1',
            twitter: 'https://twitter.com/jakecodes',
          }"
          image="/img/speakers/jacob.jpg"
          topic="Vuex in action"
          name="Jacob Schatz"
          title="Staff Engineer of Data Science at GitLab"
        >
          Vuex is an amazing framework for large applications, well discover why and how we use it
          at GitLab in completely new and novel ways."
        </speaker>
        <speaker
          :social="{
            github: 'https://github.com/chrisdemars',
            twitter: 'https://twitter.com/saltnburnem',
          }"
          image="/img/speakers/chris-demars.jpg"
          topic="I Can't SeeLow Vision A11y &amp; Users"
          name="Chris DeMars"
          title="UI Developer - Google Developer Expert"
        >
          When you think of low vision, what comes to mind? A user that is near sighted? How about
          far sighted? Maybe partially blind? These are all qualifying cases of poor vision, but low
          vision is more complicated than the prescription of glasses or contacts. According to the
          World Health Organization, they categorize low vision based on specific levels of visual
          acuity and field of vision (W3.org, 2016). With that in mind, we as developers can look at
          different categories of low vision including color vision, visual acuity, contrast
          sensitivity, etc and make an effort to bake in things like zoom, non-conflicting colors,
          and re-wrapping of columns in to our code. Chris DeMars will cover what vision
          accessibility is, different categories of low vision, what the needs of the users are,
          what tools are available and what we as developers can do to achieve a great user
          experience for low vision users."
        </speaker>
        <speaker
          :social="{
            github: 'https://github.com/jlooper',
            twitter: 'https://twitter.com/jenlooper',
          }"
          image="/img/speakers/jen.jpg"
          topic="Human vs. AIBuild a Mobile App with Vue.js, ML Kit, and NativeScript"
          name="Jen Looper"
          title="Sr. Dev Advocate. Founded Vue Vixens. GDE"
        >
          If you’ve been amazed by the game shows and intelligence challenges that pit humans
          against AIs, such as the Alpha Go tournament and TV’s “Beat Shazam”, get ready for the
          ultimate challenge - differentiating between dogs and mops, kittens and caramel ice cream.
          Sound bizarre? Come with me on an app-building journey as we walk through the creation of
          a cross-platform mobile app that pits humans against machines to see who is faster at
          image recognition - you, or on-device machine learning. Using Vue.js and NativeScript to
          create a performant cross-platform native app, we’ll harness the power of the new machine
          learning SDK from Google, ML Kit, to enable image recognition algorithms to run on device
          as we feed it images it has never seen. Ready to test your skills and be wowed by the
          speed of ML on mobile? Join me as, together, we try to beat the machine!"
        </speaker>
        <speaker
          :social="{
            github: 'https://github.com/NataliaTepluhina',
            twitter: 'https://twitter.com/N_Tepluhina',
          }"
          image="/img/speakers/natalia.jpg"
          topic="Vue Vixens: Badassery in 2018"
          name="Natalia Tepluhina"
          title="Frontend developer and CTO of VueVixens"
        >
          VueVixens are half year old now! It was a very intensive time for us and we want to tell
          community about our progress and achievements so far - and also share some plans. Get
          ready to find out why VueVixens is such an amazing initiative, and how it is going to
          improve the Vue.js Community!"
        </speaker>
        <speaker
          :social="{
            github: 'https://github.com/callumacrae',
            twitter: 'https://twitter.com/callumacrae',
          }"
          image="/img/speakers/callum.jpg"
          topic="Data Visualisation with Vue"
          title="Developer at SamKnows"
          name="Callum Macrae"
        >
          -"
        </speaker>
        <speaker
          :social="{
            github: 'https://github.com/shortdiv',
            twitter: 'https://twitter.com/shortdiv',
          }"
          image="/img/speakers/divya.jpg"
          topic="Custom plugins for Vue CLI 3"
          name="Divya Sasidharan"
          title="Advocating for Netlify"
        >
          Vue CLI 3 offers a turbo charged command line based workflow that far surpasses that of
          prior versions. With as few as one command, you can be up and running with a Vue project
          without having to touch a single config file. For added customization, Vue CLI can be
          extended via plugins. The process of creating a plugin is deceptively easy once you
          understand the base architecture of a plugin. In this talk, we will demystify the
          internals of Vue CLI, as well as cli and plugin development so you can rely more on Vue
          CLI to do the heavy lifting and spend more time building projects and being creative in
          Vue."
        </speaker>
        <speaker
          :social="{
            github: 'https://github.com/ycmjason',
            twitter: 'https://twitter.com/ycmjason',
          }"
          image="/img/speakers/jason.jpg"
          topic="What's new in VuePress"
          name="Jason Yu"
          title="Software Engineer at The Hut Group"
        >
          Discover the newly released static site generator - VuePress. Jason will take you through
          the details of VuePress, he will show you new and upcoming features and changes.
        </speaker>
        <speaker
          :social="{
            github: 'https://github.com/shentao',
            twitter: 'https://twitter.com/DamianDulisz',
          }"
          image="/img/speakers/damian.jpg"
          topic="Adapting Vue internals for Event Handling"
          name="Damian Dulisz"
          title="Damian"
        >
          -
        </speaker>
        <speaker
          :social="{
            github: 'https://github.com/CompuIves',
            twitter: 'https://twitter.com/CompuIves',
          }"
          image="/img/speakers/ives.jpg"
          topic="CodeSandbox.io: New Feature Announcements"
          name="Ives van Hoorne"
          title="Creator of codesandbox.io"
        >
          CodeSandbox the new and upcoming IDE is becoming hugely popular. Ives will be announcing
          new Vue Features and implementations during Vue.js London - he will show us the amazing
          new Vue features and implementations that will be added straight after Vue.js London.
        </speaker>
        <speaker
          :social="{
            github: 'https://github.com/akryum',
            twitter: 'https://twitter.com/akryum',
          }"
          image="/img/speakers/guillaume.jpg"
          topic="Looking at the UI for vue-cli"
          name="Guillaume Chau"
          title="Core Team Member of Vue.js"
        >
          vue-cli 3 was just released! The changes for the new CLI make way for critical changes in
          how we can scaffold, build and maintain Vue.js Projects. Guillaume will guide us through
          some of the powerful new tools. He also reveals why a UI was born to make everyone's lives
          easier!
        </speaker>
        <speaker
          :social="{
            github: 'https://github.com/DanielRosenwasser',
            twitter: 'https://twitter.com/drosenwasser',
          }"
          image="/img/speakers/daniel.jpg"
          topic="TypeScript and Vue: Bridging the Gaps"
          name="Daniel Rosenwasser"
          title="TypeScript Program Manager"
        >
          One of TypeScript's biggest challenges is to model common patterns in the JavaScript
          community. Lots of work has been done to make sure that the language is powerful enough to
          model Vue itself, and thanks to that you can get the productivity benefits of TypeScript.
          Finding errors in your code before you even save a file, and editor functionality like
          accurate auto-completion and go-to-definition are just a few things that TypeScript can
          power up. So what's missing from that experience? What's left to refine this and make
          TypeScript and Vue work better? We'll dive in on what the base experience is and explore
          some ideas on what we can do better.
        </speaker>
        <speaker
          :social="{
            github: 'https://github.com/yyx990803',
            twitter: 'https://twitter.com/youyuxi',
          }"
          image="/img/speakers/evan.jpg"
          topic="Keynote - Roadmap for the next steps of Vue"
          name="Evan You"
          title="Creator of Vue.js"
        >
          Evan you gave us the break down of Vue 3, it's expected performance impacts and more!
        </speaker>
      </speaker-list>
    </page-section>
  </main>
</template>

<script>
import Heading from '~/components/Heading'
import PageSection from '~/components/PageSection'
import Speaker from '~/components/Speaker'
import SpeakerList from '~/components/SpeakerList'

export default {
  layout: 'previous/2018',

  head: {
    title: 'Vue.js London 2018 | Speakers',
  },

  components: {
    Heading,
    PageSection,
    Speaker,
    SpeakerList,
  },
}
</script>

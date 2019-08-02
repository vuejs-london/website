<template>
  <main>
    <page-section>
      <heading variant="block">
        Schedule
      </heading>
      <paragraph>
        * schedule is subject to change
      </paragraph>
      <schedule
        :days="[
          { title: 'Conference', date: '4th October 2019', slot: 'conference' },
          { title: 'Workshops', date: '5th October 2019', slot: 'workshops' },
        ]"
      >
        <template slot="conference">
          <schedule-event
            :icon="require('assets/img/icons/breakfast.svg')"
            title="Breakfast &amp; Registration"
            subtitle="Conference registration and breakfast"
            time="07:45 - 08:45"
            duration="60mins"
          />
          <schedule-event
            :icon="require('assets/img/icons/open.svg')"
            title="Welcome"
            subtitle="Welcome introduction from our MC"
            time="08:45 - 09:00"
            duration="15mins"
          />
          <schedule-event
            image="/img/logo-120.png"
            title="5 animations any Vue app can use"
            subtitle="Speaker TBA"
            time="09:00 - 09:30"
            duration="30mins"
          >
            <paragraph>
              We've heard that animating our web interfaces can improve user experience and even
              boost conversions, but what exactly should we be animating, and how?
            </paragraph>
            <paragraph>
              This talk walks through using Vue.js to build several practical animations any web app
              can use to help increase user engagement and enjoyment.
            </paragraph>
          </schedule-event>
          <schedule-event
            image="/img/logo-120.png"
            title="Scripting in style, what's your Vue?"
            subtitle="Speaker TBA"
            time="09:30 - 10:00"
            duration="30mins"
          >
            <paragraph>
              Built-in CSS Modules and Scoped CSS support eases the process of styling your Vue. But
              a separate &lt;style&gt; tag is still needed. What about styling directly and
              dynamically in JavaScript - aka CSS-in-JS and save the pain?
            </paragraph>
            <paragraph>Should we, or should we not consider this as a good approach?</paragraph>
          </schedule-event>
          <schedule-event
            image="/img/logo-120.png"
            title="Identifying and solving performance issues in Vue applications"
            subtitle="Speaker TBA"
            time="10:00 - 10:30"
            duration="30mins"
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
              I will also show tools that could identify performance issues and suggest proper way
              of solving them like Webpack Bundle Analyzer or Bundlephobia.
            </paragraph>
          </schedule-event>
          <schedule-event
            :icon="require('assets/img/icons/coffee.svg')"
            title="Break"
            subtitle="Morning refreshment break"
            time="10:30 - 11:00"
            duration="30mins"
          />
          <schedule-event
            image="/img/logo-120.png"
            title="Scalable data visualisation with D3 and Vue"
            subtitle="Speaker TBA"
            time="11:00 - 11:30"
            duration="30mins"
          >
            <paragraph>
              D3 is the best choice when you want to create complex and interactive data
              visualisation for the web. D3 works directly with the DOM. In contrast, Vue works with
              a virtual DOM.
            </paragraph>
            <paragraph>
              How can you make the two have a great friendship and not fight over DOM manipulation?
            </paragraph>
            <paragraph>
              I will cover this in my talk and also tips on how to build scalable data visualisation
              components, when is a good idea to use D3 and methods on how to make it less
              intimidating when combined with Vue. I will show examples from simple D3
              visualisations to more complex ones
            </paragraph>
          </schedule-event>
          <schedule-event
            image="/img/logo-120.png"
            title="Types in Vue"
            subtitle="Speaker TBA"
            time="11:30 - 12:00"
            duration="30mins"
          >
            <paragraph>
              TypeScript offers a lot of benefits over JavaScript such as type safety and better
              auto-completion in editors, but these benefits do not directly trickle down to Vue. In
              this talk, I trace through improvements in the Vue Language Server that enables type
              safety of Vue Single File Components, and what that entails for writing type-safe Vue
              code.
            </paragraph>
            <paragraph>
              I will talk about innovations in Vue Language Server that could improve Vue
              developer's productivity. Finally, we will examine how we can leverage types to build
              a better ecosystem of Vue components.
            </paragraph>
          </schedule-event>
          <schedule-event
            image="/img/logo-120.png"
            title="A new Router to guide your Apps"
            subtitle="Speaker TBA"
            time="12:00 - 12:30"
            duration="30mins"
          >
            <paragraph>
              Vue official router has been a pleasure to build apps with but as the community grows,
              so do the router needs. However, it hasn't kept up as good as I wish it had with all
              the good proposals out there. As a result, we have also taken more time to work on the
              new version of Vue router and shaping an API that will serve Vue 2 and Vue 3. A more
              extensible router, easier to contribute and new architecture from scratch. Let's talk
              about what has changed in the new Router and all the improvements we are bringing.
            </paragraph>
          </schedule-event>
          <schedule-event
            :icon="require('assets/img/icons/lunch.svg')"
            title="Lunch"
            subtitle="Lunch and refreshments"
            time="12:30 - 13:45"
            duration="75mins"
          />
          <schedule-event
            :icon="require('assets/img/icons/bolt.svg')"
            title="Lightning talks"
            subtitle="8 Lightning talks"
            time="13:45 - 14:45"
            duration="60mins"
          />
          <schedule-event
            :icon="require('assets/img/icons/trophy.svg')"
            title="OS Awards"
            subtitle="OSAwards Ceremony"
            time="14:45 - 15:15"
            duration="30mins"
          />
          <schedule-event
            :social="{
              twitter: 'https://twitter.com/greggpollack',
              github: 'https://github.com/gregg',
            }"
            image="/img/speakers/gregg.jpg"
            title="Decoding Vue 3"
            subtitle="Gregg Pollack"
            time="15:15 - 15:45"
            duration="30mins"
          >
            <paragraph>
              Some of the biggest changes in Vue 3 aren't the easiest to understand. I will explain
              some of the complex features of Vue 3 visually with animation.
            </paragraph>
            <paragraph>
              Consider this a guided tour of advanced concepts to grasp in order to start using Vue
              in new and even more powerful ways.
            </paragraph>
          </schedule-event>
          <schedule-event
            :icon="require('assets/img/icons/coffee.svg')"
            title="Break"
            subtitle="Afternoon break"
            time="15:45 - 16:30"
            duration="45mins"
          />
          <schedule-event
            image="/img/logo-120.png"
            title="The new Function-based component API"
            subtitle="Speaker TBA"
            time="16:30 - 17:00"
            duration="30mins"
          >
            <paragraph>
              Vue 3 and a Vue 2 plugin will offer new ways of encapsulating reusable chunks of code
              that offer a lot of advantages over patterns/features like mixins, Wrapper Components
              or Renderless components: composition functions using dynamic lifecycle hooks and the
              new Reactivity API.
            </paragraph>
            <paragraph>
              In this talk, we will talk about the history of these "other" features, their use
              cases and their use cases and weaknesses, and finally, show how you can solve these
              use cases that the Functional Component Composition API provides, and how that's
              better in a lot of ways: more elegant, more composable, less scattered.
            </paragraph>
          </schedule-event>
          <schedule-event
            image="/img/logo-120.png"
            title="Live coding: The new Function-based component API"
            subtitle="Speaker TBA"
            time="17:00 - 17:30"
            duration="30mins"
          >
            <paragraph>
              Extending the talk `The new Function-base component API`, we will do a full live
              coding session to explain the details that the new API offers, coding and building
              real life examples to expand the horizons for your applications.
            </paragraph>
            <paragraph>
              With this live coding session we aim to discover the benefits and details of the new
              Function-based component API, and have a little laugh along the way.
            </paragraph>
          </schedule-event>
          <schedule-event
            image="/img/logo-120.png"
            title="Keynote"
            subtitle="Speaker TBA"
            time="17:30 - 18:10"
            duration="40mins"
          >
            <paragraph>
              Description to be confirmed
            </paragraph>
          </schedule-event>
          <schedule-event
            :icon="require('assets/img/icons/close.svg')"
            title="Closing"
            subtitle="Closing remarks from the Organizers"
            time="18:10 - 18:20"
            duration="10mins"
          />
          <schedule-event
            :icon="require('assets/img/icons/party.svg')"
            title="After Party"
            subtitle="Hollywood Bowl at the O2"
            time="19:30 - 01:00"
          >
            <paragraph>
              Join us at Hollywood Bowl at the O2 for a relaxed, fun and social night with Unlimited
              Bowling, Drinks, Arcade Games, VR Games and networking.
            </paragraph>
            <paragraph>
              The after party starts after a small break to refresh your energy. Get delicious food
              from a multitude of resturants avaialable at the O2.
            </paragraph>
          </schedule-event>
        </template>

        <template slot="workshops">
          <schedule-event
            :icon="require('assets/img/icons/breakfast.svg')"
            title="Breakfast &amp; Registration"
            subtitle="Conference registration and breakfast"
            time="08:00 - 09:00"
            duration="60mins"
          />
          <schedule-event
            :icon="require('assets/img/icons/laptop.svg')"
            title="Workshops"
            subtitle="Workshop sessions"
            time="09:00 - 10:30"
            duration="90mins"
          />
          <schedule-event
            :icon="require('assets/img/icons/coffee.svg')"
            title="Break"
            subtitle="Morning break &amp; refreshments"
            time="10:30 - 10:45"
            duration="15mins"
          />
          <schedule-event
            :icon="require('assets/img/icons/laptop.svg')"
            title="Workshops"
            subtitle="Workshop sessions "
            time="10:45 - 12:45"
            duration="120mins"
          />
          <schedule-event
            :icon="require('assets/img/icons/lunch.svg')"
            title="Lunch"
            subtitle="Lunch &amp; refreshments"
            time="12:45 - 13:30"
            duration="45mins"
          />
          <schedule-event
            :icon="require('assets/img/icons/laptop.svg')"
            title="Workshops"
            subtitle="Workshops sessions"
            time="13:30 - 15:30"
            duration="120mins"
          />
          <schedule-event
            :icon="require('assets/img/icons/coffee.svg')"
            title="Break"
            subtitle="Afternoon break"
            time="15:30 - 15:45"
            duration="15mins"
          />
          <schedule-event
            :icon="require('assets/img/icons/laptop.svg')"
            title="Workshops"
            subtitle="Workshops sessions"
            time="15:45 - 17:45"
            duration="120mins"
          />
          <schedule-event
            :icon="require('assets/img/icons/drinks.svg')"
            title="Social drinks"
            subtitle="Join us for social drinks"
            time="18:00 - 20:00"
            duration="120mins"
          />
        </template>
      </schedule>
    </page-section>
  </main>
</template>

<script>
import Heading from '~/components/Heading.vue'
import PageSection from '~/components/PageSection.vue'
import Paragraph from '~/components/Paragraph'
import Schedule from '~/components/Schedule.vue'
import ScheduleEvent from '~/components/ScheduleEvent.vue'

export default {
  head: {
    title: 'Vue.js London 2019 | Schedule',
  },

  components: {
    Heading,
    PageSection,
    Paragraph,
    Schedule,
    ScheduleEvent,
  },
}
</script>

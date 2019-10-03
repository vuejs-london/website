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
            :social="{
              twitter: 'https://twitter.com/adamjahr',
              github: 'https://github.com/atomjar',
            }"
            image="/img/speakers/adam-jahr.jpg"
            title="Animations any Vue app can use"
            subtitle="Adam Jahr"
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
            :social="{
              twitter: 'https://twitter.com/MayaShavin',
              github: 'https://github.com/mayashavin',
            }"
            image="/img/speakers/maya-shavin.jpg"
            title="Scripting in style, what's your Vue?"
            subtitle="Maya Shavin"
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
            :social="{
              twitter: 'https://twitter.com/filrakowski',
              github: 'https://github.com/filrak',
            }"
            image="/img/speakers/filip-rakowski.jpg"
            title="Identifying and solving performance issues in Vue applications"
            subtitle="Filip Rakowski"
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
            :social="{
              twitter: 'https://twitter.com/CodesOfRa',
              github: 'https://github.com/CodesOfRa',
            }"
            image="/img/speakers/ramona-biscoveanu.jpg"
            title="Scalable data visualisation with D3 and Vue"
            subtitle="Ramona Biscoveanu"
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
            :social="{
              twitter: 'https://twitter.com/posva',
              github: 'https://github.com/posva',
            }"
            image="/img/speakers/eduardo-san-martin-morote.jpg"
            title="A new Router to guide your Apps"
            subtitle="Eduardo San Martin Morote"
            time="11:30 - 12:00"
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
            :icon="require('assets/img/icons/trophy.svg')"
            title="OS Awards"
            subtitle="OSAwards Ceremony"
            time="12:00 - 12:30"
            duration="30mins"
          />
          <schedule-event
            :icon="require('assets/img/icons/lunch.svg')"
            title="Lunch"
            subtitle="Lunch and refreshments"
            time="12:30 - 14:00"
            duration="90mins"
          />
          <schedule-event
            :icon="require('assets/img/icons/bolt.svg')"
            title="Lightning talks"
            subtitle="4 Lightning talks"
            time="14:00 - 14:30"
            duration="30mins"
          />

          <schedule-event
            :social="{
              twitter: 'https://twitter.com/greggpollack',
              github: 'https://github.com/gregg',
            }"
            image="/img/speakers/gregg.jpg"
            title="Vue 3’s Composition API Explained Visually"
            subtitle="Gregg Pollack"
            time="14:30 - 15:00"
            duration="30mins"
          >
            <paragraph>
              The most powerful new feature of Vue 3 is the composition API, which provides an
              alternative syntax for writing components. In this talk, Gregg Pollack will introduce
              why this new API is needed, how it improves upon what is currently possible in Vue,
              and the basics of its syntax.
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
          </schedule-event>
          <schedule-event
            :social="{
              twitter: 'https://twitter.com/linus_borg',
              github: 'https://github.com/LinusBorg',
            }"
            image="/img/speakers/thorsten-luenborg.jpg"
            title="The new Composition API"
            subtitle="Thorsten Luenborg"
            time="15:00 - 15:30"
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
              use cases that the Composition API provides, and how that's better in a lot of ways:
              more elegant, more composable, less scattered.
            </paragraph>
          </schedule-event>
          <schedule-event
            :icon="require('assets/img/icons/coffee.svg')"
            title="Break"
            subtitle="Afternoon break"
            time="15:30 - 16:15"
            duration="45mins"
          />
          <schedule-event
            :social="{
              twitter: 'https://twitter.com/ycmjason',
              github: 'https://github.com/ycmjason',
            }"
            image="/img/speakers/jason-yu.jpg"
            title="Live coding: The new Composition API"
            subtitle="Jason Yu"
            time="16:15 - 17:00"
            duration="45mins"
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
          </schedule-event>
          <schedule-event
            :social="{
              twitter: 'https://twitter.com/youyuxi',
              github: 'https://github.com/yyx990803',
            }"
            image="/img/speakers/evan-you.jpg"
            title="Keynote"
            subtitle="Evan You"
            time="17:00 - 17:45"
            duration="45mins"
          >
            <paragraph>
              Evan will be once again doing a remote talk - get the inside information on the
              progress of Vue.js 3 and more.
            </paragraph>
            <paragraph>
              Further details to be confirmed shortly.
            </paragraph>
          </schedule-event>
          <schedule-event
            :icon="require('assets/img/icons/close.svg')"
            title="Closing"
            subtitle="Closing remarks from the Organizers"
            time="17:45 - 18:00"
            duration="15mins"
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
            subtitle="Workshop sessions"
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

<template>
  <Topbar :title="'Integrations'"></Topbar>
  <main class="p-6">
    <div class="grid grid-cols-4 gap-4 sm:grid-cols-2 xs:grid-cols-1">
      <div
        v-for="(app, key) in apps"
        :key="key"
        class="border border-border-100 rounded-xl bg-white-100 p-4"
      >
        <div class="flex flex-col justify-center text-center items-center gap-4">
          <div class="w-[75px] h-[75px] flex bg-opacity-50 items-center justify-center">
            <img :src="getImagePath(app.src)" :alt="app.name" loading="lazy" />
          </div>
          <div class="flex-1">
            <h4 class="text-lg font-semibold text-heading-100 leading-none">{{ app.name }}</h4>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
export default {
  components: {
    Topbar,
  },
  data() {
    return {
      apps: [
        {
          name: 'Slack',
          src: 'slack.svg',
        },
        {
          name: 'Hubspot',
          src: 'hubspot.svg',
        },
        {
          name: 'Google Calendar',
          src: 'calendar.svg',
        },
        {
          name: 'Salesforce',
          src: 'salesforce.svg',
        },
      ],
    }
  },
  methods: {
    getImagePath(filename) {
      return `/img/${filename}`
    },
  },
}
</script>

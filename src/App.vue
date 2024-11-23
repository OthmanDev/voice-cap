<template>
  <main class="min-h-screen bg-[#F8F7FA] bg-opacity-80">
    <aside
      v-if="!$route.meta.isHideSidebar"
      class="fixed top-0 left-0 z-[999] h-full w-[260px] bg-white-100 border-r border-border-100"
    >
      <div class="h-[60px] flex items-center px-6">
        <RouterLink to="dashboard">Voiceship Calls</RouterLink>
      </div>
      <div class="without-scrollbar overflow-y-auto">
        <div class="px-3">
          <div class="grid gap-1.5">
            <RouterLink
              :to="{ name: 'dashboard' }"
              class="text-heading-100 px-3 py-2 flex items-center gap-2 transition-all hover:text-primary-100 rounded-md"
            >
              <dashboard-icon class="w-[23px] h-[23px]" />
              <span class="flex-1 pt-[3px] font-medium">Dashboard</span>
            </RouterLink>
            <RouterLink
              :to="{ name: 'call-logs' }"
              class="text-heading-100 px-3 py-2 flex items-center gap-2 transition-all hover:text-primary-100 rounded-md"
            >
              <calls-icon class="w-[23px] h-[23px]" />
              <span class="flex-1 pt-[3px] font-medium">Call Logs</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </aside>
    <div :class="!$route.meta.isHideSidebar ? 'ml-[260px]' : ''">
      <RouterView />
    </div>
  </main>
</template>

<script>
import DashboardIcon from './components/icons/DashboardIcon.vue'
import CallsIcon from './components/icons/CallsIcon.vue'
export default {
  components: {
    DashboardIcon,
    CallsIcon,
  },
  data() {
    return {}
  },
}
</script>

<template>
  <main class="min-h-screen bg-[#F8F7FA] bg-opacity-80">
    <aside
      v-if="!$route.meta.isHideSidebar"
      class="fixed top-0 left-0 z-[999] h-full w-[260px] bg-white-100 border-r border-border-100"
    >
      <div class="h-[60px] flex items-center px-6">
        <RouterLink to="dashboard">VoiceCab</RouterLink>
      </div>
      <div class="without-scrollbar overflow-y-auto">
        <div class="px-3">
          <div class="grid gap-1.5">
            <RouterLink
              :to="{ name: 'dashboard' }"
              class="text-heading-100 px-3 py-2 flex items-center gap-2 transition-all hover:text-primary-100 rounded-md"
            >
              <dashboard-icon class="w-[22px] h-[22px]" />
              <span class="flex-1 pt-[3px] font-medium">Dashboard</span>
            </RouterLink>
            <RouterLink
              :to="{ name: 'agents' }"
              class="text-heading-100 px-3 py-2 flex items-center gap-2 transition-all hover:text-primary-100 rounded-md"
            >
              <users-icon class="w-[22px] h-[22px]" />
              <span class="flex-1 pt-[3px] font-medium">Agents</span>
            </RouterLink>
            <RouterLink
              :to="{ name: 'phone-numbers' }"
              class="text-heading-100 px-3 py-2 flex items-center gap-2 transition-all hover:text-primary-100 rounded-md"
            >
              <calls-icon class="w-[22px] h-[22px]" />
              <span class="flex-1 pt-[3px] font-medium">Phone Numbers</span>
            </RouterLink>
            <RouterLink
              :to="{ name: 'skills' }"
              class="text-heading-100 px-3 py-2 flex items-center gap-2 transition-all hover:text-primary-100 rounded-md"
            >
              <skill-icon class="w-[22px] h-[22px]" />
              <span class="flex-1 pt-[3px] font-medium">Skills</span>
            </RouterLink>
            <RouterLink
              :to="{ name: 'knowledgebase' }"
              class="text-heading-100 px-3 py-2 flex items-center gap-2 transition-all hover:text-primary-100 rounded-md"
            >
              <knowledgebase-icon class="w-[22px] h-[22px]" />
              <span class="flex-1 pt-[3px] font-medium">Knowledge Base</span>
            </RouterLink>
            <div>
              <div
                @click="isCollapse = !isCollapse"
                class="text-heading-100 px-3 py-2 flex items-center gap-2 transition-all hover:text-primary-100 rounded-md cursor-pointer"
              >
                <calls-comming-icon class="w-[22px] h-[22px]" />
                <span class="flex-1 pt-[3px] font-medium">Call</span>
                <span
                  class="transition-all duration-100 transform"
                  :class="isCollapse ? 'rotate-90' : ''"
                >
                  <right-icon class="w-3.5 h-3.5" />
                </span>
              </div>
              <div v-if="isCollapse">
                <RouterLink
                  :to="{ name: 'call-logs' }"
                  class="text-heading-100 px-3 py-2 flex items-center gap-2 transition-all hover:text-primary-100 rounded-md"
                >
                  <span
                    class="ml-2 mr-2 inline-flex h-1 w-1 rounded-full bg-current transition-all duration-200 opacity-40"
                  ></span>
                  <span class="flex-1 font-medium">Logs</span>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'analysis' }"
                  class="text-heading-100 px-3 py-2 flex items-center gap-2 transition-all hover:text-primary-100 rounded-md"
                >
                  <span
                    class="ml-2 mr-2 inline-flex h-1 w-1 rounded-full bg-current transition-all duration-200 opacity-40"
                  ></span>
                  <span class="flex-1 font-medium">Analysis</span>
                </RouterLink>
              </div>
            </div>
            <RouterLink
              :to="{ name: 'voices' }"
              class="text-heading-100 px-3 py-2 flex items-center gap-2 transition-all hover:text-primary-100 rounded-md"
            >
              <voice-icon class="w-[22px] h-[22px]" />
              <span class="flex-1 pt-[3px] font-medium">Voices</span>
            </RouterLink>
            <RouterLink
              :to="{ name: 'integrations' }"
              class="text-heading-100 px-3 py-2 flex items-center gap-2 transition-all hover:text-primary-100 rounded-md"
            >
              <apps-icon class="w-[22px] h-[22px]" />
              <span class="flex-1 pt-[3px] font-medium">Integrations</span>
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
import UsersIcon from './components/icons/UsersIcon.vue'
import CallsCommingIcon from '@/components/icons/CallsCommingIcon.vue'
import SkillIcon from '@/components/icons/SkillIcon.vue'
import KnowledgebaseIcon from '@/components/icons/KnowledgebaseIcon.vue'
import VoiceIcon from '@/components/icons/VoiceIcon.vue'
import RightIcon from '@/components/icons/RightIcon.vue'
import AppsIcon from '@/components/icons/AppsIcon.vue'
export default {
  components: {
    DashboardIcon,
    CallsIcon,
    UsersIcon,
    CallsCommingIcon,
    SkillIcon,
    KnowledgebaseIcon,
    VoiceIcon,
    RightIcon,
    AppsIcon,
  },
  data() {
    return {
      isCollapse: false,
    }
  },
}
</script>

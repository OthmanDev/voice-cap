<template>
  <Topbar :title="'Agents'"></Topbar>
  <main class="p-6">
    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="(agent, key) in agents"
        :key="key"
        class="border border-border-100 rounded-xl bg-white-100 p-4"
      >
        <div class="flex justify-between">
          <div class="flex flex-1 items-center gap-4">
            <div
              class="w-[75px] h-[75px] rounded-full overflow-hidden flex bg-opacity-50 items-center justify-center"
              :class="agent.avatar.color"
            >
              <img
                src="@/assets/images/danny.png"
                :alt="agent.name"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-heading-100 leading-none">{{ agent.name }}</h4>
              <span class="text-[15px] font-medium mt-2 mb-1 block">{{ agent.role }}</span>
              <span class="text-[15px] font-medium">{{ agent.phone }}</span>
            </div>
          </div>
          <div class="flex gap-1">
            <button
              class="w-[34px] h-[34px] border border-border-100 rounded-md flex items-center justify-center transition-all hover:bg-success-100 hover:bg-opacity-10 hover:border-success-100 hover:border-opacity-10 hover:text-success-100"
              title="Edit Agent"
            >
              <edit-icon class="w-5 h-5" />
            </button>
            <button
              class="w-[34px] h-[34px] border border-border-100 rounded-md flex items-center justify-center transition-all hover:bg-danger-100 hover:bg-opacity-10 hover:border-danger-100 hover:border-opacity-10 hover:text-danger-100"
              title="Deactivate Agent"
            >
              <delete-icon class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
import EditIcon from '@/components/icons/EditIcon.vue'
import DeleteIcon from '@/components/icons/DeleteIcon.vue'
export default {
  components: {
    Topbar,
    EditIcon,
    DeleteIcon,
  },
  data() {
    return {
      agents: [
        {
          id: 1,
          name: 'Miles',
          role: 'Rapid Rides Dispatch',
          phone: '+18142835142',
          avatar: {
            src: 'danny.png',
            color: 'bg-success-100',
          },
        },
        {
          id: 2,
          name: 'Skye',
          role: 'Rapid Rides Dispatch',
          phone: '+12142825542',
          avatar: {
            src: 'danny.png',
            color: 'bg-primary-100',
          },
        },
        {
          id: 3,
          name: 'Chase',
          role: 'Rapid Rides Dispatch',
          phone: '+12142820921',
          avatar: {
            src: 'danny.png',
            color: 'bg-info-100',
          },
        },
      ],
    }
  },
}
</script>

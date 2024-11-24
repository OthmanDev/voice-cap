<template>
  <Topbar :title="'Phone Numbers'"></Topbar>
  <main class="p-6">
    <div class="rounded-xl bg-white-100 border border-border-100">
      <nav class="border-b flex space-x-4 px-1">
        <div
          class="inline-flex items-center p-4"
          :class="[
            activeTab === 0 ? 'font-semibold text-primary-100' : 'font-medium cursor-pointer',
          ]"
          @click="activeTab = 0"
        >
          Numbers
        </div>
        <div
          class="inline-flex items-center p-4"
          :class="[
            activeTab === 1 ? 'font-semibold text-primary-100' : 'font-medium cursor-pointer',
          ]"
          @click="activeTab = 1"
        >
          Purchase
        </div>
      </nav>
      <div v-if="activeTab === 0">
        <div class="border-b border-border-100 px-4 py-3">
          <div class="flex items-center justify-between">
            <span class="text-xl font-bold text-heading-100">{{ numbers.length }} Numbers</span>
            <div class="w-[500px] relative flex items-center xs:w-[200px]">
              <search-icon class="w-5 h-5 absolute left-4" />
              <input type="search" class="form-field pl-11" placeholder="Enter number to search" />
            </div>
          </div>
        </div>
        <div class="max-w-full overflow-x-auto without-scrollbar">
          <table class="w-full">
            <thead>
              <tr class="bg-[#F8F7FA] border-b border-border-100">
                <th class="p-4 text-left text-heading-100 text-[15px] tracking-wider uppercase">
                  Number
                </th>
                <th class="p-4 text-left text-heading-100 text-[15px] tracking-wider uppercase">
                  Purchased Date
                </th>
                <th class="p-4 text-left text-heading-100 text-[15px] tracking-wider uppercase">
                  Agent
                </th>
                <th class="p-4 text-left text-heading-100 text-[15px] tracking-wider uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border-100">
              <tr v-for="(number, key) in numbers" :key="key">
                <td class="p-4 text-left font-medium">{{ number.phoneNumber }}</td>
                <td class="p-4 text-left font-medium">{{ number.date }}</td>
                <td class="p-4 text-left font-medium">
                  <a href="#">{{ number.agent }}</a>
                </td>
                <td class="p-4 text-left font-medium">
                  <button
                    class="w-[34px] h-[34px] border border-border-100 rounded-md flex items-center justify-center transition-all hover:bg-danger-100 hover:bg-opacity-10 hover:border-danger-100 hover:border-opacity-10 hover:text-danger-100"
                    title="Deactivate Agent"
                  >
                    <delete-icon class="w-5 h-5" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="false" class="border-t border-border-100 p-4">
          <div class="flex items-center justify-between">
            <span class="font-medium">Page 1 of 2</span>
            <div class="grid gap-2 grid-cols-4">
              <button
                class="inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 p-0.5 w-7 h-7 rounded-md border border-border-100 hover:text-primary-100 cursor-not-allowed text-heading-100 disabled:text-gray-400"
                type="button"
                aria-label="Go to first page"
                disabled
              >
                <double-left-icon /></button
              ><button
                class="inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 p-0.5 w-7 h-7 rounded-md border border-border-100 hover:text-primary-100 cursor-not-allowed text-heading-100 disabled:text-gray-400"
                type="button"
                aria-label="Go to previous page"
                disabled
              >
                <left-icon /></button
              ><button
                class="inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 p-0.5 w-7 h-7 rounded-md bg-transparent border border-border-100 focus-visible:ring-muted hover:text-primary-100 text-heading-100 disabled:text-gray-400"
                type="button"
                aria-label="Go to next page"
              >
                <right-icon /></button
              ><button
                class="inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 p-0.5 w-7 h-7 rounded-md bg-transparent border border-border-100 focus-visible:ring-muted hover:text-primary-100 text-heading-100 disabled:text-gray-400"
                type="button"
                aria-label="Go to last page"
              >
                <double-right-icon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
import DeleteIcon from '@/components/icons/DeleteIcon.vue'
import DoubleLeftIcon from '@/components/icons/DoubleLeftIcon.vue'
import DoubleRightIcon from '@/components/icons/DoubleRightIcon.vue'
import LeftIcon from '@/components/icons/LeftIcon.vue'
import RightIcon from '@/components/icons/RightIcon.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
export default {
  components: {
    Topbar,
    DeleteIcon,
    DoubleLeftIcon,
    DoubleRightIcon,
    LeftIcon,
    RightIcon,
    SearchIcon,
  },
  data() {
    return {
      activeTab: 0,
      numbers: [
        {
          phoneNumber: '+1 (814) 283-5142',
          date: '12/11/2024',
          agent: 'Gymmy',
        },
        {
          phoneNumber: '+1 (814) 283-4501',
          date: '22/11/2024',
          agent: 'David',
        },
        {
          phoneNumber: '+1 (814) 283-4501',
          date: '22/11/2024',
          agent: 'Dana',
        },
      ],
    }
  },
}
</script>

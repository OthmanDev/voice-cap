<template>
  <Topbar :title="'Call Logs'"></Topbar>
  <main class="p-6">
    <div>
      <div class="rounded-xl bg-white-100 border border-border-100">
        <div class="border-b border-border-100 p-4">
          <div class="flex items-center justify-between">
            <span class="text-xl font-bold text-heading-100">Call Logs</span>
            <div class="w-[500px]">
              <input type="search" class="form-field" placeholder="Enter Search Query" />
            </div>
          </div>
        </div>
        <div class="max-w-full overflow-x-auto without-scrollbar">
          <table class="w-full">
            <thead>
              <tr class="bg-[#F8F7FA] border-b border-border-100">
                <th class="p-4 text-left text-heading-100 text-[15px] tracking-wider uppercase">
                  Contact
                </th>
                <th class="p-4 text-left text-heading-100 text-[15px] tracking-wider uppercase">
                  Status
                </th>
                <th class="p-4 text-left text-heading-100 text-[15px] tracking-wider uppercase">
                  Created at
                </th>
                <th class="p-4 text-left text-heading-100 text-[15px] tracking-wider uppercase">
                  Duration
                </th>
                <th class="p-4 text-left text-heading-100 text-[15px] tracking-wider uppercase">
                  Campaign
                </th>
                <th class="p-4 text-left text-heading-100 text-[15px] tracking-wider uppercase">
                  Labels
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border-100">
              <tr>
                <td class="p-4 text-left font-medium">John Doe</td>
                <td class="p-4 text-left font-medium">
                  <span
                    class="px-3 py-1.5 text-[14px] rounded-full bg-warning-100 bg-opacity-10 text-warning-100"
                    >Ongoing</span
                  >
                </td>
                <td class="p-4 text-left font-medium">2024-11-17 15:30</td>
                <td class="p-4 text-left font-medium">4:23</td>
                <td class="p-4 text-left font-medium">Sales Q4</td>
                <td class="p-4 text-left font-medium">
                  <div class="flex gap-2">
                    <span
                      class="px-3 py-1.5 text-[14px] rounded-full bg-primary-100 bg-opacity-10 text-primary-100 font-medium"
                      >Priority</span
                    ><span
                      class="px-3 py-1.5 text-[14px] rounded-full bg-primary-100 bg-opacity-10 text-primary-100 font-medium"
                      >Follow</span
                    >
                  </div>
                </td>
              </tr>
              <tr>
                <td class="p-4 text-left font-medium">John Doe</td>
                <td class="p-4 text-left font-medium">
                  <span
                    class="px-3 py-1.5 text-[14px] rounded-full bg-danger-100 bg-opacity-10 text-danger-100"
                    >Ongoing</span
                  >
                </td>
                <td class="p-4 text-left font-medium">2024-11-17 15:30</td>
                <td class="p-4 text-left font-medium">4:23</td>
                <td class="p-4 text-left font-medium">Sales Q4</td>
                <td class="p-4 text-left font-medium">
                  <div class="flex gap-2">
                    <span
                      class="px-3 py-1.5 text-[14px] rounded-full bg-primary-100 bg-opacity-10 text-primary-100 font-medium"
                      >Priority</span
                    ><span
                      class="px-3 py-1.5 text-[14px] rounded-full bg-primary-100 bg-opacity-10 text-primary-100 font-medium"
                      >Follow</span
                    >
                  </div>
                </td>
              </tr>
              <tr>
                <td class="p-4 text-left font-medium">John Doe</td>
                <td class="p-4 text-left font-medium">
                  <span
                    class="px-3 py-1.5 text-[14px] rounded-full bg-info-100 bg-opacity-10 text-info-100"
                    >In Progress</span
                  >
                </td>
                <td class="p-4 text-left font-medium">2024-11-17 15:30</td>
                <td class="p-4 text-left font-medium">4:23</td>
                <td class="p-4 text-left font-medium">Sales Q4</td>
                <td class="p-4 text-left font-medium">
                  <div class="flex gap-2">
                    <span
                      class="px-3 py-1.5 text-[14px] rounded-full bg-primary-100 bg-opacity-10 text-primary-100 font-medium"
                      >Priority</span
                    ><span
                      class="px-3 py-1.5 text-[14px] rounded-full bg-primary-100 bg-opacity-10 text-primary-100 font-medium"
                      >Follow</span
                    >
                  </div>
                </td>
              </tr>
              <tr>
                <td class="p-4 text-left font-medium">John Doe</td>
                <td class="p-4 text-left font-medium">
                  <span
                    class="px-3 py-1.5 text-[14px] rounded-full bg-success-100 bg-opacity-10 text-success-100"
                    >Completed</span
                  >
                </td>
                <td class="p-4 text-left font-medium">2024-11-17 15:30</td>
                <td class="p-4 text-left font-medium">4:23</td>
                <td class="p-4 text-left font-medium">Sales Q4</td>
                <td class="p-4 text-left font-medium">
                  <div class="flex gap-2">
                    <span
                      class="px-3 py-1.5 text-[14px] rounded-full bg-primary-100 bg-opacity-10 text-primary-100 font-medium"
                      >Priority</span
                    ><span
                      class="px-3 py-1.5 text-[14px] rounded-full bg-primary-100 bg-opacity-10 text-primary-100 font-medium"
                      >Follow</span
                    >
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="border-t border-border-100 p-4">
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
import DoubleLeftIcon from '@/components/icons/DoubleLeftIcon.vue'
import DoubleRightIcon from '@/components/icons/DoubleRightIcon.vue'
import LeftIcon from '@/components/icons/LeftIcon.vue'
import RightIcon from '@/components/icons/RightIcon.vue'
export default {
  components: {
    Topbar,
    DoubleLeftIcon,
    DoubleRightIcon,
    LeftIcon,
    RightIcon,
  },
}
</script>

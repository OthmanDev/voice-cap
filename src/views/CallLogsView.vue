<template>
  <Topbar :title="'Call Logs'"></Topbar>
  <main class="p-6">
    <div class="flex flex-col gap-6">
      <div class="grid grid-cols-4 gap-4 sm:grid-cols-2 xs:grid-cols-1">
        <div class="border border-border-100 rounded-xl bg-white-100 p-4">
          <div class="flex items-center gap-4">
            <div
              class="flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-success-100 bg-opacity-10 text-success-100"
            >
              <chart-icon class="w-[30px] h-[30px]" />
            </div>
            <div>
              <h4 class="text-xl font-bold text-heading-100 mb-1 uppercase">89.9K</h4>
              <span class="text-[17px] capitalize font-medium">Total Bookings</span>
            </div>
          </div>
        </div>
        <div class="border border-border-100 rounded-xl bg-white-100 p-4">
          <div class="flex items-center gap-4">
            <div
              class="flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-primary-100 bg-opacity-10 text-primary-100"
            >
              <chart-icon class="w-[30px] h-[30px]" />
            </div>
            <div>
              <h4 class="text-xl font-bold text-heading-100 mb-1 uppercase">78.5K</h4>
              <span class="text-[17px] capitalize font-medium">Cancelled Bookings</span>
            </div>
          </div>
        </div>
        <div class="border border-border-100 rounded-xl bg-white-100 p-4">
          <div class="flex items-center gap-4">
            <div
              class="flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-info-100 bg-opacity-10 text-info-100"
            >
              <chart-icon class="w-[30px] h-[30px]" />
            </div>
            <div>
              <h4 class="text-xl font-bold text-heading-100 mb-1 uppercase">20.3K</h4>
              <span class="text-[17px] capitalize font-medium">Inquiries</span>
            </div>
          </div>
        </div>
        <div class="border border-border-100 rounded-xl bg-white-100 p-4">
          <div class="flex items-center gap-4">
            <div
              class="flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-danger-100 bg-opacity-10 text-danger-100"
            >
              <chart-icon class="w-[30px] h-[30px]" />
            </div>
            <div>
              <h4 class="text-xl font-bold text-heading-100 mb-1 uppercase">10.3K</h4>
              <span class="text-[17px] capitalize font-medium">Complaints</span>
            </div>
          </div>
        </div>
      </div>
      <div class="rounded-xl bg-white-100 border border-border-100">
        <div class="border-b border-border-100 p-4">
          <div class="flex items-center justify-between">
            <span class="text-xl font-bold text-heading-100">Call Logs</span>
            <div class="w-[500px] relative flex items-center xs:w-[200px]">
              <search-icon class="w-5 h-5 absolute left-4" />
              <input type="search" class="form-field pl-11" placeholder="Enter search query" />
            </div>
          </div>
        </div>
        <div class="max-w-full overflow-x-auto without-scrollbar">
          <table class="w-full">
            <thead>
              <tr class="bg-[#F8F7FA] border-b border-border-100">
                <th class="p-4 text-left text-heading-100 text-[15px] tracking-wider uppercase">
                  Disposition
                </th>
                <th class="p-4 text-left text-heading-100 text-[15px] tracking-wider uppercase">
                  Customer Name
                </th>
                <th class="p-4 text-left text-heading-100 text-[15px] tracking-wider uppercase">
                  Customer Info
                </th>
                <th class="p-4 text-left text-heading-100 text-[15px] tracking-wider uppercase">
                  Created at
                </th>
                <th class="p-4 text-left text-heading-100 text-[15px] tracking-wider uppercase">
                  Booking Details
                </th>
                <th class="p-4 text-left text-heading-100 text-[15px] tracking-wider uppercase">
                  Payment
                </th>
                <th class="p-4 text-left text-heading-100 text-[15px] tracking-wider uppercase">
                  Recording
                </th>
                <th class="p-4 text-left text-heading-100 text-[15px] tracking-wider uppercase">
                  Summary
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border-100">
              <tr v-for="(call, key) in calls" :key="key">
                <td class="p-4 text-left font-medium">{{ call.inquiryType }}</td>
                <td class="p-4 text-left font-medium">{{ call.customerName }}</td>
                <td class="p-4 text-left font-medium">
                  <button
                    class="h-[38px] min-w-[140px] inline-flex items-center justify-center px-4 bg-white-100 text-heading-100 font-medium leading-none pt-[2px] rounded-md border border-border-100 transition-all duration-100 hover:bg-border-100 hover:bg-opacity-10"
                  >
                    Customer Info
                  </button>
                </td>
                <td class="p-4 text-left font-medium">{{ call.dueDate }}</td>
                <td class="p-4 text-left font-medium">
                  <button
                    class="h-[38px] min-w-[140px] inline-flex items-center justify-center px-4 bg-white-100 text-heading-100 font-medium leading-none pt-[2px] rounded-md border border-border-100 transition-all duration-100 hover:bg-border-100 hover:bg-opacity-10"
                  >
                    Booking Info
                  </button>
                </td>
                <td class="p-4 text-left font-medium">{{ call.paymentMethod }}</td>
                <td class="p-4 text-left font-medium">
                  <button
                    class="h-[38px] min-w-[145px] inline-flex items-center justify-center px-4 bg-white-100 text-heading-100 font-medium leading-none pt-[2px] rounded-md border border-border-100 transition-all duration-100 hover:bg-border-100 hover:bg-opacity-10"
                  >
                    Play Recording
                  </button>
                </td>
                <td class="p-4 text-left font-medium">
                  <button
                    class="h-[38px] min-w-[145px] inline-flex items-center justify-center px-4 bg-white-100 text-heading-100 font-medium leading-none pt-[2px] rounded-md border border-border-100 transition-all duration-100 hover:bg-border-100 hover:bg-opacity-10"
                  >
                    View Summary
                  </button>
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
import ChartIcon from '@/components/icons/ChartIcon.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
export default {
  components: {
    Topbar,
    DoubleLeftIcon,
    DoubleRightIcon,
    LeftIcon,
    RightIcon,
    ChartIcon,
    SearchIcon,
  },
  data() {
    return {
      calls: [
        {
          inquiryType: 'Payment Inquiry',
          customerName: 'John Smith',
          dueDate: 'in 5 days - 5:40',
          paymentMethod: 'PayPal',
        },
        {
          inquiryType: 'Refund Request',
          customerName: 'Emma Johnson',
          dueDate: 'in 2 days - 2:15',
          paymentMethod: 'Credit Card',
        },
        {
          inquiryType: 'Booking Change',
          customerName: 'Michael Brown',
          dueDate: 'in 1 day - 10:30',
          paymentMethod: 'Bank Transfer',
        },
        {
          inquiryType: 'Payment Verification',
          customerName: 'Sarah Davis',
          dueDate: 'in 3 days - 3:20',
          paymentMethod: 'PayPal',
        },
        {
          inquiryType: 'Payment Dispute',
          customerName: 'Robert Wilson',
          dueDate: 'in 4 days - 1:45',
          paymentMethod: 'Credit Card',
        },
        {
          inquiryType: 'Booking Inquiry',
          customerName: 'Lisa Anderson',
          dueDate: 'in 2 days - 11:10',
          paymentMethod: 'PayPal',
        },
        {
          inquiryType: 'Payment Status',
          customerName: 'David Taylor',
          dueDate: 'in 6 days - 4:30',
          paymentMethod: 'Bank Transfer',
        },
        {
          inquiryType: 'Refund Status',
          customerName: 'Jennifer Martin',
          dueDate: 'in 3 days - 9:15',
          paymentMethod: 'Credit Card',
        },
        {
          inquiryType: 'Payment Method Update',
          customerName: 'William Thompson',
          dueDate: 'in 4 days - 2:50',
          paymentMethod: 'PayPal',
        },
        {
          inquiryType: 'Booking Confirmation',
          customerName: 'Jessica White',
          dueDate: 'in 1 day - 12:25',
          paymentMethod: 'Credit Card',
        },
      ],
    }
  },
}
</script>

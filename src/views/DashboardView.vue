<template>
  <Topbar :title="'Dashboard'"></Topbar>
  <main class="p-6">
    <div class="border border-border-100 rounded-xl bg-white-100 p-6">
      <h2 class="capitalize text-heading-100 font-bold text-3xl">
        Welcome back Greg
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" class="inline-flex h-8 w-8">
          <path
            fill="#fac036"
            d="M39.11 79.56c-1.1 1.03-2.21-.2-2.21-.2S18.42 59.78 17.22 58.9c-1.69-1.23-5.31-3.16-8.93.57-1.51 1.55-3.97 5 .6 10.56.99 1.2 29.78 31.54 31.46 33.18 0 0 13.3 12.94 21.35 17.81 2.23 1.35 4.74 2.78 7.67 3.78 2.92 1 6.22 1.69 9.7 1.69 3.48.04 7.09-.63 10.5-1.88 3.41-1.26 6.59-3.09 9.48-5.2.71-.54 1.43-1.08 2.1-1.66l1.94-1.6a58.67 58.67 0 0 0 3.82-3.53c2.43-2.42 4.62-5.01 6.55-7.66 1.92-2.66 3.55-5.41 4.85-8.15 1.3-2.74 2.21-5.49 2.76-8.09.58-2.59.74-5.04.65-7.18-.02-2.14-.45-3.97-.8-5.43-.4-1.46-.83-2.55-1.17-3.27-.33-.72-.51-1.1-.51-1.1-.46-1.29-.9-2.52-1.29-3.63a889.622 889.622 0 0 0-4.51-12.47l.01.03c-4.85-13.17-10.06-26.74-10.06-26.74-.79-2.39-3.7-3.22-5.84-1.68-6.18 4.44-8.07 10.92-5.89 17.83l5.59 15.32c.79 1.71-1.39 3.69-2.85 2.5-4.59-3.74-14.3-14.05-14.3-14.05-4.34-4.16-28.83-29.27-30.47-30.8-3.3-3.07-7.46-4.65-10.63-2.32-3.24 2.38-4.14 6.06-1.01 10.08.85 1.09 25.6 27.24 25.6 27.24 1.44 1.51-.26 3.65-1.85 2.18 0 0-30.79-32.12-32.18-33.62-3.15-3.42-8.21-4.17-11.21-1.35-2.93 2.75-2.86 7.26.34 10.8 1.02 1.12 22.71 24.02 31.39 33.4.58.63 1.03 1.47.17 2.26-.01.01-.88.95-2-.25-2.36-2.52-25.93-27.08-27.24-28.41-3.01-3.06-7.05-4.51-10.3-1.53-2.96 2.71-3.44 7.44-.04 10.78l28.55 30.18s.93 1.1-.11 2.07z"
          ></path>
          <path
            fill="#e48c15"
            d="m85.46 54.4 2.41 2.58s-13.79 13.31-4.39 33.75c0 0 1.22 2.59-.38 3.02 0 0-1.4.78-3-3.2 0-.01-9.49-19.42 5.36-36.15z"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="4"
            opacity="0.5"
            d="M63.28 10.2s5.81.88 11.19 6.64c5.38 5.77 7.87 13.18 7.87 13.18M77.44 3.5s4.87 2.45 8.63 8.5c3.76 6.05 4.67 13.05 4.67 13.05m-55.03 85.68s-5.86.39-12.35-4.09-10.52-11.18-10.52-11.18m18.69 25.1s-5.44.23-11.68-3.22-10.44-9.12-10.44-9.12"
          ></path>
        </svg>
      </h2>
      <p class="text-[17px] mt-4">
        Here’s What happening on your dashboard today. See the insights at once.
      </p>
    </div>
    <div class="flex items-center justify-between mt-4">
      <h2 class="text-xl font-bold text-heading-100">Overview</h2>
      <div class="relative w-[190px] z-[1001]">
        <div
          @click="isActivePeriod = !isActivePeriod"
          class="border border-border-100 rounded-md flex items-center bg-white-100 px-3 h-10 gap-2 cursor-pointer"
        >
          <span>
            <simple-calendar-icon class="w-[22px] h-[22px]" />
          </span>
          <span class="flex-1 pt-[3px] font-medium text-[15px] first-letter:capitalize">{{
            currentPediod.label
          }}</span>
          <span class="text-heading-100 mt-0.5">
            <down-icon
              class="w-[18px] h-[18px] transform transition-transform"
              :class="[isActivePeriod ? 'rotate-180' : '']"
            />
          </span>
        </div>
        <div
          v-if="isActivePeriod"
          class="absolute left-0 right-0 border border-border-100 rounded-md bg-white-100 z-10 top-full mt-0.5"
        >
          <div class="p-3 grid gap-2">
            <span
              @click="getInsightsByPeriod('today')"
              class="cursor-pointer text-[15px]"
              :class="[
                currentPediod.value === 'today' ? 'text-primary-100 font-semibold' : 'font-medium',
              ]"
              >Today</span
            >
            <span
              @click="getInsightsByPeriod('yesterday')"
              class="cursor-pointer text-[15px]"
              :class="[
                currentPediod.value === 'yesterday'
                  ? 'text-primary-100 font-semibold'
                  : 'font-medium',
              ]"
              >Yesterday</span
            >
            <span
              @click="getInsightsByPeriod('last_7_days')"
              class="cursor-pointer text-[15px]"
              :class="[
                currentPediod.value === 'last_7_days'
                  ? 'text-primary-100 font-semibold'
                  : 'font-medium',
              ]"
              >Last 7 days</span
            >
            <span
              @click="getInsightsByPeriod('last_14_days')"
              class="cursor-pointer text-[15px]"
              :class="[
                currentPediod.value === 'last_14_days'
                  ? 'text-primary-100 font-semibold'
                  : 'font-medium',
              ]"
              >Last 14 days</span
            >
            <span
              @click="getInsightsByPeriod('last_30_days')"
              class="cursor-pointer text-[15px]"
              :class="[
                currentPediod.value === 'last_30_days'
                  ? 'text-primary-100 font-semibold'
                  : 'font-medium',
              ]"
              >Last 30 days</span
            >
            <span
              @click="getInsightsByPeriod('all_time')"
              class="cursor-pointer text-[15px]"
              :class="[
                currentPediod.value === 'all_time'
                  ? 'text-primary-100 font-semibold'
                  : 'font-medium',
              ]"
              >All time</span
            >
          </div>
        </div>
      </div>
      <div
        v-if="isActivePeriod"
        class="fixed inset-0 z-[1000]"
        @click="isActivePeriod = false"
      ></div>
    </div>
    <div class="flex flex-col gap-6 mt-4">
      <div class="rounded-xl bg-white-100 border border-border-100">
        <div class="border-b border-border-100 p-4">
          <h3 class="text-xl text-heading-100 font-bold">Calls</h3>
        </div>
        <div class="p-4">
          <div class="grid grid-cols-3 gap-4 xs:grid-cols-1">
            <div class="border border-border-100 rounded-xl bg-white-100 p-4">
              <div class="flex items-center gap-4">
                <div
                  class="flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-success-100 bg-opacity-10 text-success-100"
                >
                  <calls-icon class="w-[30px] h-[30px]" />
                </div>
                <div>
                  <h4 class="text-xl font-bold text-heading-100 mb-1 uppercase">89.9K</h4>
                  <span class="text-[17px] capitalize font-medium">Total Calls</span>
                </div>
              </div>
            </div>
            <div class="border border-border-100 rounded-xl bg-white-100 p-4">
              <div class="flex items-center gap-4">
                <div
                  class="flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-primary-100 bg-opacity-10 text-primary-100"
                >
                  <calls-plus-icon class="w-[30px] h-[30px]" />
                </div>
                <div>
                  <h4 class="text-xl font-bold text-heading-100 mb-1 uppercase">78.5K</h4>
                  <span class="text-[17px] capitalize font-medium">Minutes used</span>
                </div>
              </div>
            </div>
            <div class="border border-border-100 rounded-xl bg-white-100 p-4">
              <div class="flex items-center gap-4">
                <div
                  class="flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-info-100 bg-opacity-10 text-info-100"
                >
                  <calls-comming-icon class="w-[30px] h-[30px]" />
                </div>
                <div>
                  <h4 class="text-xl font-bold text-heading-100 mb-1 uppercase">20.3K</h4>
                  <span class="text-[17px] capitalize font-medium">Avg call duration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rounded-xl bg-white-100 border border-border-100">
        <div class="border-b border-border-100 p-4">
          <h3 class="text-xl text-heading-100 font-bold">Actions</h3>
        </div>
        <div class="p-4">
          <div class="grid grid-cols-5 gap-4 sm:grid-cols-3 xs:grid-cols-1">
            <div class="border border-border-100 rounded-xl bg-white-100 p-4">
              <div class="flex items-center gap-4">
                <div
                  class="flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-success-100 bg-opacity-10 text-success-100"
                >
                  <settings-icon class="w-[30px] h-[30px]" />
                </div>
                <div>
                  <h4 class="text-xl font-bold text-heading-100 mb-1 uppercase">89.9K</h4>
                  <span class="text-[17px] capitalize font-medium">Total Actions</span>
                </div>
              </div>
            </div>
            <div class="border border-border-100 rounded-xl bg-white-100 p-4">
              <div class="flex items-center gap-4">
                <div
                  class="flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-primary-100 bg-opacity-10 text-primary-100"
                >
                  <calendar-icon class="w-[30px] h-[30px]" />
                </div>
                <div>
                  <h4 class="text-xl font-bold text-heading-100 mb-1 uppercase">78.5K</h4>
                  <span class="text-[17px] capitalize font-medium">Jobs Booked</span>
                </div>
              </div>
            </div>
            <div class="border border-border-100 rounded-xl bg-white-100 p-4">
              <div class="flex items-center gap-4">
                <div
                  class="flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-info-100 bg-opacity-10 text-info-100"
                >
                  <live-icon class="w-[30px] h-[30px]" />
                </div>
                <div>
                  <h4 class="text-xl font-bold text-heading-100 mb-1 uppercase">20.3K</h4>
                  <span class="text-[17px] capitalize font-medium">Live transfers</span>
                </div>
              </div>
            </div>
            <div class="border border-border-100 rounded-xl bg-white-100 p-4">
              <div class="flex items-center gap-4">
                <div
                  class="flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-warning-100 bg-opacity-10 text-warning-100"
                >
                  <sms-icon class="w-[30px] h-[30px]" />
                </div>
                <div>
                  <h4 class="text-xl font-bold text-heading-100 mb-1 uppercase">89.9K</h4>
                  <span class="text-[17px] capitalize font-medium">SMS sent</span>
                </div>
              </div>
            </div>
            <div class="border border-border-100 rounded-xl bg-white-100 p-4">
              <div class="flex items-center gap-4">
                <div
                  class="flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-danger-100 bg-opacity-10 text-danger-100"
                >
                  <custom-settings-icon class="w-[30px] h-[30px]" />
                </div>
                <div>
                  <h4 class="text-xl font-bold text-heading-100 mb-1 uppercase">78.5K</h4>
                  <span class="text-[17px] capitalize font-medium">Custom actions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rounded-xl bg-white-100 border border-border-100">
        <div class="border-b border-border-100 p-4">
          <h3 class="text-xl text-heading-100 font-bold">Analysis</h3>
        </div>
        <div class="p-4">
          <div class="grid grid-cols-5 gap-4 sm:grid-cols-3 xs:grid-cols-1">
            <div class="border border-border-100 rounded-xl bg-white-100 p-4">
              <div class="flex items-center gap-4">
                <div
                  class="flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-success-100 bg-opacity-10 text-success-100"
                >
                  <rocket-icon class="w-[32px] h-[32px]" />
                </div>
                <div>
                  <h4 class="text-xl font-bold text-heading-100 mb-1 uppercase">89.9K</h4>
                  <span class="text-[17px] capitalize font-medium">Goal acheivement</span>
                </div>
              </div>
            </div>
            <div class="border border-border-100 rounded-xl bg-white-100 p-4">
              <div class="flex items-center gap-4">
                <div
                  class="flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-primary-100 bg-opacity-10 text-primary-100"
                >
                  <calls-drop-icon class="w-[28px] h-[28px]" />
                </div>
                <div>
                  <h4 class="text-xl font-bold text-heading-100 mb-1 uppercase">78.5K</h4>
                  <span class="text-[17px] capitalize font-medium">Call Drop-off rate</span>
                </div>
              </div>
            </div>
            <div class="border border-border-100 rounded-xl bg-white-100 p-4">
              <div class="flex items-center gap-4">
                <div
                  class="flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-info-100 bg-opacity-10 text-info-100"
                >
                  <script-icon class="w-[30px] h-[30px]" />
                </div>
                <div>
                  <h4 class="text-xl font-bold text-heading-100 mb-1 uppercase">20.3K</h4>
                  <span class="text-[17px] capitalize font-medium">Script adherence</span>
                </div>
              </div>
            </div>
            <div class="border border-border-100 rounded-xl bg-white-100 p-4">
              <div class="flex items-center gap-4">
                <div
                  class="flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-warning-100 bg-opacity-10 text-warning-100"
                >
                  <smile-icon class="w-[30px] h-[30px]" />
                </div>
                <div>
                  <h4 class="text-xl font-bold text-heading-100 mb-1 uppercase">89.9K</h4>
                  <span class="text-[17px] capitalize font-medium">Positive Sentiment</span>
                </div>
              </div>
            </div>
            <div class="border border-border-100 rounded-xl bg-white-100 p-4">
              <div class="flex items-center gap-4">
                <div
                  class="flex items-center justify-center w-[50px] h-[50px] rounded-lg bg-danger-100 bg-opacity-10 text-danger-100"
                >
                  <bug-icon class="w-[30px] h-[30px]" />
                </div>
                <div>
                  <h4 class="text-xl font-bold text-heading-100 mb-1 uppercase">78.5K</h4>
                  <span class="text-[17px] capitalize font-medium">Errors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="rounded-xl bg-white-100 border border-border-100">
          <div class="border-b border-border-100 p-4">
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold text-heading-100">Calls</span>
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
    </div>
  </main>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
import CallsIcon from '@/components/icons/CallsIcon.vue'
import CallsPlusIcon from '@/components/icons/CallsPlusIcon.vue'
import CallsCommingIcon from '@/components/icons/CallsCommingIcon.vue'
import RocketIcon from '@/components/icons/RocketIcon.vue'
import CallsDropIcon from '@/components/icons/CallsDropIcon.vue'
import ScriptIcon from '@/components/icons/ScriptIcon.vue'
import SmileIcon from '@/components/icons/SmileIcon.vue'
import BugIcon from '@/components/icons/BugIcon.vue'
import SettingsIcon from '@/components/icons/SettingsIcon.vue'
import CalendarIcon from '@/components/icons/CalendarIcon.vue'
import LiveIcon from '@/components/icons/LiveIcon.vue'
import SmsIcon from '@/components/icons/SmsIcon.vue'
import CustomSettingsIcon from '@/components/icons/CustomSettingsIcon.vue'
import SimpleCalendarIcon from '@/components/icons/SimpleCalendarIcon.vue'
import DownIcon from '@/components/icons/DownIcon.vue'
import DoubleLeftIcon from '@/components/icons/DoubleLeftIcon.vue'
import DoubleRightIcon from '@/components/icons/DoubleRightIcon.vue'
import LeftIcon from '@/components/icons/LeftIcon.vue'
import RightIcon from '@/components/icons/RightIcon.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
export default {
  components: {
    Topbar,
    DoubleLeftIcon,
    DoubleRightIcon,
    LeftIcon,
    RightIcon,
    CallsIcon,
    CallsPlusIcon,
    CallsCommingIcon,
    RocketIcon,
    CallsDropIcon,
    ScriptIcon,
    SmileIcon,
    BugIcon,
    SettingsIcon,
    CalendarIcon,
    LiveIcon,
    SmsIcon,
    CustomSettingsIcon,
    SimpleCalendarIcon,
    DownIcon,
    SearchIcon,
  },
  data() {
    return {
      currentPediod: {
        label: 'Today',
        value: 'today',
      },
      isActivePeriod: false,
      periods: [
        {
          label: 'Today',
          value: 'today',
        },
        {
          label: 'Yesterday',
          value: 'yesterday',
        },
        {
          label: 'Last 7 days',
          value: 'last_7_days',
        },
        {
          label: 'Last 14 days',
          value: 'last_14_days',
        },
        {
          label: 'Last 30 days',
          value: 'last_30_days',
        },
        {
          label: 'All time',
          value: 'all_time',
        },
      ],
    }
  },
  methods: {
    getInsightsByPeriod(period) {
      this.isActivePeriod = false
      this.currentPediod = this.periods.find((p) => p.value === period)
    },
  },
}
</script>

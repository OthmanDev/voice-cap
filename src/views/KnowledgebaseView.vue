<template>
  <Topbar :title="'Knowledge Base'"></Topbar>
  <main class="p-6">
    <div class="border border-border-100 rounded-xl bg-white-100">
      <div class="border-b border-border-100 p-4">
        <div class="flex items-center justify-between">
          <span class="text-xl font-bold text-heading-100"
            >{{ knowledgebases.length }} Knowledge Bases
          </span>
          <button class="button primary-button">
            <plus-icon class="w-4 h-4 mr-1.5" />
            Create Knowledge base
          </button>
        </div>
      </div>
      <div class="p-4">
        <div class="grid grid-cols-3 gap-4">
          <div
            v-for="(base, key) in knowledgebases"
            :key="key"
            class="border border-border-100 rounded-xl bg-white-100 p-4"
          >
            <div class="flex justify-between">
              <div class="flex flex-1 items-start gap-4">
                <div
                  class="w-[50px] h-[50px] rounded-full bg-primary-100 bg-opacity-10 text-primary-100 overflow-hidden flex items-center justify-center"
                >
                  <knowledgebase-icon class="w-6 h-6" />
                </div>
                <div class="flex-1 mt-1">
                  <h4 class="text-lg font-semibold text-heading-100 leading-none">
                    {{ base.name }}
                  </h4>
                  <span class="text-[15px] font-medium mt-2 mb-1 block"
                    >Status: {{ base.status }}</span
                  >
                  <span class="text-[15px] font-medium">Created: {{ base.date }}</span>
                </div>
              </div>
              <div class="flex">
                <button
                  class="w-[34px] h-[34px] border border-border-100 rounded-md flex items-center justify-center transition-all hover:bg-success-100 hover:bg-opacity-10 hover:border-success-100 hover:border-opacity-10 hover:text-success-100"
                  title="Edit Knowledgebase"
                >
                  <edit-icon class="w-5 h-5" />
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
import EditIcon from '@/components/icons/EditIcon.vue'
import KnowledgebaseIcon from '@/components/icons/KnowledgebaseIcon.vue'
import PlusIcon from '@/components/icons/PlusIcon.vue'
export default {
  components: {
    Topbar,
    EditIcon,
    KnowledgebaseIcon,
    PlusIcon,
  },
  data() {
    return {
      knowledgebases: [
        {
          id: 1,
          name: 'Knowledge base 1',
          status: 'Ready',
          date: '11/23/2024',
        },
        {
          id: 2,
          name: 'Knowledge base 2',
          status: 'Ready',
          date: '11/22/2024',
        },
        {
          id: 3,
          name: 'Knowledge base 3',
          status: 'Ready',
          date: '11/21/2024',
        },
      ],
    }
  },
}
</script>

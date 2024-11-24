<template>
  <Topbar :title="'Skills'"></Topbar>
  <main class="p-6">
    <div class="grid gap-6">
      <div class="border border-border-100 rounded-xl bg-white-100">
        <div class="border-b border-border-100 p-4">
          <div class="flex items-center justify-between">
            <span class="text-xl font-bold text-heading-100"
              >Custom Skills - For advanced users</span
            >
            <button class="button primary-button">
              <plus-icon class="w-4 h-4 mr-1.5" />
              Create skill
            </button>
          </div>
        </div>
        <div class="p-4">
          <div class="grid grid-cols-3 gap-4">
            <div
              v-for="(skill, key) in customSkills"
              :key="key"
              class="border border-border-100 rounded-xl bg-white-100 p-4"
            >
              <div class="flex justify-between">
                <div class="flex flex-1 items-start gap-4">
                  <div
                    class="w-[50px] h-[50px] rounded-full bg-primary-100 bg-opacity-10 text-primary-100 overflow-hidden flex items-center justify-center"
                  >
                    <skill-icon class="w-6 h-6" />
                  </div>
                  <div class="flex-1 mt-1">
                    <h4 class="text-lg font-semibold text-heading-100 leading-none">
                      {{ skill.name }}
                    </h4>
                    <span class="text-[15px] font-medium mt-2 block">{{ skill.description }}</span>
                  </div>
                </div>
                <div class="flex">
                  <button
                    class="w-[34px] h-[34px] border border-border-100 rounded-md flex items-center justify-center transition-all hover:bg-success-100 hover:bg-opacity-10 hover:border-success-100 hover:border-opacity-10 hover:text-success-100"
                    title="Edit Skill"
                  >
                    <edit-icon class="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border border-border-100 rounded-xl bg-white-100">
        <div class="border-b border-border-100 p-4">
          <span class="text-xl font-bold text-heading-100 block mb-1">Curated Skills</span>
          <span
            >These skills are curated by the VoiceCab team. You can use them by adding them to your
            agent.
          </span>
        </div>
        <div class="p-4">
          <div class="grid grid-cols-3 gap-4">
            <div
              v-for="(skill, key) in skills"
              :key="key"
              class="border border-border-100 rounded-xl bg-white-100 p-4"
            >
              <div class="flex flex-1 items-start gap-4">
                <div
                  class="w-[50px] h-[50px] rounded-full bg-primary-100 bg-opacity-10 text-primary-100 overflow-hidden flex items-center justify-center"
                >
                  <skill-icon class="w-6 h-6" />
                </div>
                <div class="flex-1 mt-1">
                  <h4 class="text-lg font-semibold text-heading-100 leading-none">
                    {{ skill.name }}
                  </h4>
                  <span class="text-[15px] font-medium mt-2 block">{{ skill.description }}</span>
                </div>
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
import SkillIcon from '@/components/icons/SkillIcon.vue'
import PlusIcon from '@/components/icons/PlusIcon.vue'
export default {
  components: {
    Topbar,
    EditIcon,
    SkillIcon,
    PlusIcon,
  },
  data() {
    return {
      customSkills: [
        {
          id: 1,
          name: 'Skill 1',
          description: 'Just a test skill',
        },
        {
          id: 2,
          name: 'Skill 2',
          description: 'Just a test skill',
        },
        {
          id: 3,
          name: 'Skill 3',
          description: 'Just a test skill',
        },
      ],
      skills: [
        {
          id: 1,
          name: 'Edit order using order number',
          description: 'Update details for Shopify orders based on user request',
        },
        {
          id: 2,
          name: 'Cancel Order',
          description: 'Process requests to cancel customer orders',
        },
        {
          id: 3,
          name: 'Order tracking using order number',
          description: 'Track order details for Shopify orders based on user request',
        },
        {
          id: 4,
          name: 'Refund Processing',
          description: 'Initiate and manage refund requests for returned items',
        },
        {
          id: 5,
          name: 'Product Inquiry',
          description:
            'Answer customer questions about product specifications, availability, and pricing',
        },
        {
          id: 6,
          name: 'Inventory Check',
          description: 'Check stock availability for specific products',
        },
      ],
    }
  },
}
</script>

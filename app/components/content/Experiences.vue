<script setup lang="ts">
const { isPrinting } = usePrinting();

const { data: experiences } = await useAsyncData("experiences", async () => {
  const data = await queryCollection("experiences").all();
  return useDateSort(data);
});

const expanded = ref<Record<string, boolean>>({});
const toggle = (name: string) => {
  expanded.value[name] = !expanded.value[name];
};
const isExpanded = (name: string) => isPrinting.value || expanded.value[name];
</script>

<template>
  <div v-if="experiences?.length">
    <h3 class="text-xl font-semibold mb-2">Work Experience</h3>
    <div class="flex flex-col gap-4">
      <div
        v-for="(exp, index) in experiences"
        :key="exp.meta.name"
        class="flex flex-col group experience-item"
        data-animate
        :style="{ '--stagger': index }"
        :class="{ 'cursor-pointer': exp.meta.description?.length }"
        @click="exp.meta.description?.length && toggle(exp.meta.name)"
      >
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-1">
            <h3 class="text-md text-neutral-800 font-semibold">
              {{ exp.meta.name }}
            </h3>
            <svg
              v-if="exp.meta.description?.length"
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 text-neutral-400 transition-all duration-300 opacity-0 group-hover:opacity-100 print:hidden"
              :class="{ 'rotate-180': expanded[exp.meta.name] }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <p v-if="exp.meta.date" class="text-neutral-500 text-sm">
            {{ exp.meta.date }}
          </p>
        </div>
        <div class="flex justify-between items-center">
          <p v-if="exp.meta.position" class="text-neutral-500 text-sm mt-1">
            {{ exp.meta.position }}
          </p>
          <p v-if="exp.meta.location" class="text-neutral-500 text-sm">
            {{ exp.meta.location }}
          </p>
        </div>
        <div
          v-if="exp.meta.description?.length"
          class="grid transition-all duration-300 ease-in-out description-block"
          :class="
            isExpanded(exp.meta.name)
              ? 'grid-rows-[1fr] opacity-100 mt-2'
              : 'grid-rows-[0fr] opacity-0'
          "
        >
          <div class="overflow-hidden">
            <p class="text-neutral-600 text-sm">{{ exp.meta.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media print {
  .experience-item {
    page-break-inside: avoid;
    break-inside: avoid;
  }
  .description-block {
    display: block !important;
    grid-template-rows: 1fr !important;
    opacity: 1 !important;
    margin-top: 0.5rem;
    max-height: none !important;
    overflow: visible !important;
  }
  .description-block > div {
    overflow: visible !important;
  }
}
</style>

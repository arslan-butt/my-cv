<script lang="ts" setup>
type Experience = {
  name: string;
  position: string;
  location: string;
  date: string;
  description?: string;
  link?: string;
};

const { data: experiences } = await useAsyncData<Experience[]>(
  'experiences',
  async () => {
    try {
      const experiencesData = await queryCollection('experiences').all();

      // Sort experiences by date (newest first)
      return experiencesData.sort((a, b) => {
        const parseDate = (dateString: string) => {
          const startDate = dateString.split(' - ')[0];
          const [month, year] = startDate.split(' ');
          return new Date(`${month} 1, ${year}`).getTime();
        };

        return parseDate(b.date) - parseDate(a.date);
      });
    } catch (error) {
      console.error('Error fetching experiences:', error);
      return [];
    }
  }
);

const openIndexes = ref<number[]>([]);

const toggleAccordion = (index: number) => {
  if (openIndexes.value.includes(index)) {
    openIndexes.value = openIndexes.value.filter((i) => i !== index);
  } else {
    openIndexes.value.push(index);
  }
};

// Function to expand all accordions for printing
const expandAllForPrint = () => {
  if (experiences.value) {
    openIndexes.value = experiences.value.map((_, index) => index);
  }
};

// Listen for the print event
onMounted(() => {
  window.addEventListener('beforeprint', expandAllForPrint);
  window.addEventListener('afterprint', () => {
    openIndexes.value = [];
  });
});
</script>

<template>
  <div v-if="experiences && experiences.length > 0">
    <h3 class="uppercase text-xl font-semibold mb-2">Work Experience</h3>
    <div class="flex flex-col gap-4">
      <div
        v-for="(exp, index) in experiences"
        :key="exp.name"
        class="flex flex-col"
        data-animate
        :aria-label="`Open ${exp.name}`"
        :style="{ '--stagger': index }"
      >
        <div
          class="flex justify-between items-center cursor-pointer"
          @click="toggleAccordion(index)"
        >
          <div class="flex items-center gap-2 group">
            <h3 class="text-md text-neutral-800 font-semibold">
              {{ exp.name }}
            </h3>

            <UIcon
              name="i-heroicons-chevron-right"
              class="w-4 h-4 text-neutral-500 transition-all duration-700 opacity-0 group-hover:opacity-100"
              :class="{ 'rotate-90': openIndexes.includes(index) }"
            />
          </div>
          <p v-if="exp.date" class="text-neutral-500 text-sm">
            {{ exp.date }}
          </p>
        </div>

        <div class="flex justify-between items-center">
          <p v-if="exp.position" class="text-neutral-500 text-sm mt-1">
            {{ exp.position }}
          </p>
          <p v-if="exp.location" class="text-neutral-500 text-sm">
            {{ exp.location }}
          </p>
        </div>

        <!-- experince description -->
        <div
          class="exp-description overflow-hidden transition-all duration-1000 ease-in-out"
          :class="{
            'max-h-0': !openIndexes.includes(index),
            'max-h-[500px]': openIndexes.includes(index),
          }"
        >
          <p class="text-neutral-600 text-sm mt-">
            {{ exp.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p class="text-neutral-500">No experience found.</p>
  </div>
</template>

<style scoped>
.exp-description {
  transition: height 0.5s ease-in-out;
}

/* Print styles */
@media print {
  .exp-description {
    height: auto !important;
    max-height: none !important;
    overflow: visible !important;
    opacity: 1 !important;
  }
}
</style>

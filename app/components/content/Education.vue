<script setup lang="ts">
type Education = {
  name: string;
  date: string;
  description: string;
};

const { data: education } = await useAsyncData<Education[]>(
  'education',
  async () => {
    try {
      const educationData = await queryCollection('education').all();
      return educationData;
    } catch (error) {
      console.error('Error fetching education:', error);
      return [];
    }
  }
);
</script>

<template>
  <div v-if="education && education.length > 0">
    <h3 class="text-xl font-semibold mb-2">Education</h3>
    <div class="flex flex-col gap-4">
      <div
        v-for="(edu, index) in education"
        :key="edu.name"
        class="flex flex-col"
        data-animate
        :aria-label="`Open ${edu.name}`"
        :style="{ '--stagger': index }"
      >
        <div class="flex justify-between items-center">
          <h3 class="text-md text-neutral-800 font-semibold">
            {{ edu.name }}
          </h3>
          <p v-if="edu.date" class="text-neutral-500 text-sm">
            {{ edu.date }}
          </p>
        </div>
        <p v-if="edu.description" class="text-neutral-500 text-sm mt-1">
          {{ edu.description }}
        </p>
      </div>
    </div>
  </div>
  <div v-else>
    <p class="text-neutral-500">No education found.</p>
  </div>
</template>

<style scoped></style>

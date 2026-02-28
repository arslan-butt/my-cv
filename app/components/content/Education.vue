<script setup lang="ts">
const { data: education } = await useAsyncData("education", async () => {
  const data = await queryCollection("education").all();
  return useDateSort(data);
});
</script>

<template>
  <div v-if="education?.length">
    <h3 class="text-xl font-semibold mb-2">Education</h3>
    <div class="flex flex-col gap-4">
      <div
        v-for="(edu, index) in education"
        :key="edu.meta.name"
        class="flex flex-col"
        data-animate
        :style="{ '--stagger': index }"
      >
        <div class="flex justify-between items-center">
          <h3 class="text-md text-neutral-800 font-semibold">
            {{ edu.meta.name }}
          </h3>
          <p v-if="edu.meta.date" class="text-neutral-500 text-sm">
            {{ edu.meta.date }}
          </p>
        </div>
        <p v-if="edu.meta.description" class="text-neutral-500 text-sm mt-1">
          {{ edu.meta.description }}
        </p>
      </div>
    </div>
  </div>
</template>

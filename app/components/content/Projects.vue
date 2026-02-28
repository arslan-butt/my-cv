<script setup lang="ts">
const { data: projects } = await useAsyncData("projects", async () => {
  const data = await queryCollection("projects").all();
  return useDateSort(data);
});
</script>

<template>
  <div v-if="projects?.length">
    <h3 class="text-xl font-semibold mb-2">Projects</h3>
    <div class="flex flex-col gap-4">
      <NuxtLink
        v-for="(project, index) in projects"
        :key="project.meta.name"
        :to="project.meta.link"
        external
        target="_blank"
        class="group flex flex-col"
        data-animate
        :aria-label="`Open ${project.meta.name}`"
        :style="{ '--stagger': index }"
      >
        <div class="flex justify-between items-center">
          <h3
            class="text-md group-hover:underline text-neutral-800 font-semibold"
          >
            {{ project.meta.name }}
          </h3>
          <p v-if="project.meta.date" class="text-neutral-500 text-sm">
            {{ project.meta.date }}
          </p>
        </div>
        <p v-if="project.meta.position" class="text-neutral-500 text-sm mt-1">
          {{ project.meta.position }}
        </p>
        <p
          v-if="project.meta.description"
          class="text-neutral-600 text-sm mt-1"
        >
          {{ project.meta.description }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
type Experience = {
  name: string;
  date: string;
  description: string;
};

const { data: experiences } = (await useAsyncData("experiences", async () => {
  const experiencesData = (await queryContent("experiences")
    .where({ _type: "json" })
    .find()) as Experience[];

  return experiencesData.sort((a, b) => {
    const parseDate = (dateString: string) => {
      const startDate = dateString.split(" - ")[0];
      const [month, year] = startDate.split(" ");
      return new Date(`${month} 1, ${year}`).getTime();
    };

    return parseDate(b.date) - parseDate(a.date);
  });
})) as { data: Experience[] };
</script>

<template>
  <div v-if="experiences.length > 0">
    <h3 class="text-xl font-semibold mb-2">Work Experience</h3>
    <div class="flex flex-col gap-4">
      <div
        v-for="(exp, index) in experiences"
        :key="exp.name"
        class="flex flex-col"
        data-animate
        :aria-label="`Open ${exp.name}`"
        :style="{ '--stagger': index }"
      >
        <div class="flex justify-between items-center">
          <h3 class="text-md text-neutral-800 font-semibold">
            {{ exp.name }}
          </h3>
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
      </div>
    </div>
  </div>
</template>

<style scoped></style>

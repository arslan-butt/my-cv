<script setup lang="ts">
const { profile } = useAppConfig();
const { gtag } = useGtag();

function print() {
  window.print();
}

function trackButtonClick() {
  gtag("event", "button_click", {
    event_category: "engagement",
    event_label: "Print Button",
  });
}

function handlePrintAndTrack() {
  print();
  trackButtonClick();
}
</script>

<template>
  <div>
    <div class="flex flex-col-reverse sm:flex-row justify-between gap-4">
      <div class="flex flex-col">
        <h1 class="uppercase text-2xl font-bold mb-2">
          {{ profile.name }}
        </h1>
        <p v-if="profile.description" class="max-w-sm text-neutral-500 mb-1">
          {{ profile.description }}
        </p>
        <p
          v-if="profile.location"
          class="text-neutral-500 flex items-center gap-1 text-sm mb-2"
        >
          <UIcon name="lucide:globe" class="size-4 print:size-4" />
          {{ profile.location }}
        </p>
        <Socials />
      </div>

      <NuxtImg
        v-if="profile.picture"
        :src="profile.picture"
        :alt="profile.name"
        class="rounded-md w-40 object-cover sm:size-40"
      />
    </div>
    <div class="mt-2 print:hidden">
      <button
        class="bg-neutral-900 cursor-pointer text-white rounded-md px-4 py-1 text-sm hover:bg-neutral-700 flex items-center gap-1"
        @click="handlePrintAndTrack"
      >
        Print
        <UIcon name="lucide:printer" class="size-5" />
      </button>
    </div>
  </div>
</template>

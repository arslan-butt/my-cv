<script setup lang="ts">
const { profile, socials } = useAppConfig();
</script>

<template>
  <div class="flex flex-row gap-3 mt-2 print:flex print:flex-row print:gap-4">
    <NuxtLink
      v-if="profile.email"
      :to="`mailto:${profile.email}`"
      class="link link_space"
    >
      <Icon name="lucide:mail" class="size-5 print:size-4" />
      <span class="link-text">{{ profile.email }}</span>
    </NuxtLink>
    <NuxtLink
      v-if="profile.phone"
      :to="`tel:${profile.phone}`"
      class="link link_space"
    >
      <Icon name="lucide:phone" class="size-5 print:size-4" />
      <span class="link-text">{{ profile.phone }}</span>
    </NuxtLink>
    <span v-if="profile.location" class="link link_space print-only">
      <Icon name="lucide:map-pin" class="size-5 print:size-4" />
      <span class="link-text">{{ profile.location }}</span>
    </span>

    <!-- web only links -->
    <NuxtLink
      v-if="profile.website"
      :to="profile.website"
      class="link link_space web-only"
    >
      <Icon name="lucide:link" class="size-5" />
    </NuxtLink>
    <NuxtLink
      v-if="socials.github"
      :to="socials.github"
      class="link link_space web-only"
    >
      <Icon name="lucide:github" class="size-5" />
    </NuxtLink>
    <NuxtLink
      v-if="socials.twitter"
      :to="socials.twitter"
      class="link link_space web-only"
    >
      <Icon name="lucide:twitter" class="size-5" />
    </NuxtLink>
    <NuxtLink
      v-if="socials.linkedin"
      :to="socials.linkedin"
      class="link link_space web-only"
    >
      <Icon name="lucide:linkedin" class="size-5" />
    </NuxtLink>
    <NuxtLink
      v-if="socials.instagram"
      :to="socials.instagram"
      class="link link_space web-only"
    >
      <Icon name="lucide:instagram" class="size-5" />
    </NuxtLink>
  </div>
</template>

<style scoped>
.link {
  @apply text-neutral-500 hover:text-neutral-700;
}

.link_space {
  @apply flex items-center gap-1;
}

.link-text {
  display: none;
}

.print-only {
  display: none;
}

@media print {
  .link-text {
    display: inline;
    @apply text-sm;
  }

  .print-only {
    display: flex;
  }

  .web-only {
    display: none;
  }
}
</style>

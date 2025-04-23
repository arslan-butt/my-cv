<script setup lang="ts">
const { profile, seo } = useAppConfig();

useSeoMeta({
  title: seo.title,
  description: seo.description,
  ogTitle: seo.title,
  ogDescription: seo.description,
  ogUrl: seo.url || profile.website,
  ogImage: seo.image,
  ogType: "website",
  ogSiteName: profile.name,
  twitterCard: "summary_large_image",
  twitterTitle: seo.title,
  twitterDescription: seo.description,
  twitterImage: seo.image,
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1.0",
  author: profile.name,
  robots: "index, follow",
});

useHead({
  htmlAttrs: {
    lang: seo.lang,
  },
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
});

const { data: home } = await useAsyncData(() =>
  queryCollection("content").path("/").first()
);
</script>

<template>
  <div
    class="px-4 sm:px-0 py-10 sm:py-16 max-w-2xl mx-auto flex flex-col gap-10"
  >
    <Hero />
    <!-- <ClientOnly fallback-tag="div" class="loading-placeholder"> -->
    <ContentRenderer v-if="home" :value="home" />
    <!-- </ClientOnly> -->
    <Experiences />
    <Education />
    <Projects />
  </div>
</template>

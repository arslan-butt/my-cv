<script setup lang="ts">
const { seo } = useAppConfig();

useSeoMeta({
  title: seo.title,
  description: seo.description,
  url: seo.url,
  image: seo.image,
  twitterTitle: seo.title,
  twitterDescription: seo.description,
  twitterUrl: seo.url,
  twitterImage: seo.image,
  twitterCard: 'summary_large_image',
  ogType: 'website',
  ogSiteName: seo.title,
  ogTitle: seo.title,
  ogDescription: seo.description,
  ogUrl: seo.url,
  ogImage: seo.image,
});

useHead({
  title: seo.title,
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
});

const { data: home } = await useAsyncData(() =>
  queryCollection('content').path('/').first()
);
</script>

<template>
  <div
    class="px-4 sm:px-0 py-10 sm:py-16 max-w-2xl mx-auto flex flex-col gap-10"
  >
    <Hero />
    <ContentRenderer v-if="home" :value="home" />
    <Experiences />
    <Education />
    <Projects />
  </div>
</template>

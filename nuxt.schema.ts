import { field, group } from "@nuxthq/studio/theme";

export default defineNuxtSchema({
  appConfig: {
    profile: group({
      title: "Personal information",
      description: "Personal information configuration",
      icon: "i-lucide-user",
      fields: {
        name: field({
          type: "string",
          title: "Name",
          description: "Your name.",
          icon: "i-lucide-user",
          default: "Arslan Butt",
        }),
        job: field({
          type: "string",
          title: "Job",
          description: "Your job.",
          icon: "i-lucide-briefcase",
          default: "Fullstack developer",
        }),
        location: field({
          type: "string",
          title: "Location",
          description: "Your location.",
          icon: "i-lucide-location",
          default: "Paris",
        }),
        description: field({
          type: "string",
          title: "Description",
          description: "Your description.",
          icon: "i-lucide-description",
          default: "I am a fullstack developer based in Paris.",
        }),
        email: field({
          type: "string",
          title: "Email",
          description: "Your email.",
          icon: "i-lucide-mail",
          default: "engr.arslanbutt@gmail.com",
        }),
        phone: field({
          type: "string",
          title: "Phone",
          description: "Your phone.",
          icon: "i-lucide-phone",
          default: "(+33) 7 53 09 48 62",
        }),
        website: field({
          type: "string",
          title: "Website",
          description: "Your website.",
          icon: "i-lucide-link",
          default: "https://arslanbutt.com",
        }),
        picture: field({
          type: "string",
          title: "Picture",
          description: "Your picture.",
          icon: "i-lucide-image",
          default: "/arslan.png",
        }),
      },
    }),
    seo: group({
      title: "SEO",
      description: "SEO configuration",
      icon: "i-lucide-search",
      fields: {
        title: field({
          type: "string",
          title: "Title",
          description:
            "Title of your website (used in the preview of your website).",
          icon: "i-lucide-title",
          default: "My website",
        }),
        description: field({
          type: "string",
          title: "Description",
          description:
            "Description of your website (used in the preview of your website).",
          icon: "i-lucide-description",
          default: "My website description",
        }),
        url: field({
          type: "string",
          title: "URL",
          description: "Public URL of your website.",
          icon: "i-lucide-link",
          default: "https://mywebsite.com",
        }),
        image: field({
          type: "string",
          title: "Image",
          description:
            "The image that will be displayed in the preview of your website (when you share it on social networks).",
          icon: "i-lucide-image",
          default: "https://mywebsite.com/image.jpg",
        }),
        lang: field({
          type: "string",
          title: "Language",
          description: "The language that you want to use for your website.",
          icon: "i-lucide-language",
          default: "en",
          required: ["en", "fr"],
        }),
      },
    }),
    socials: group({
      title: "Socials",
      description: "Socials configuration",
      icon: "i-lucide-link",
      fields: {
        github: field({
          type: "string",
          title: "Github",
          description: "Your Github account.",
          icon: "i-lucide-github",
          default: "https://github.com/arslan-butt",
        }),
        twitter: field({
          type: "string",
          title: "Twitter",
          description: "Your Twitter account.",
          icon: "i-lucide-twitter",
          default: "https://twitter.com/i_ArslanButt",
        }),
        linkedin: field({
          type: "string",
          title: "Linkedin",
          description: "Your Linkedin account.",
          icon: "i-lucide-linkedin",
          default: "https://www.linkedin.com/in/engrarslanbutt",
        }),
        instagram: field({
          type: "string",
          title: "Instagram",
          description: "Your Instagram account.",
          icon: "i-lucide-instagram",
          default: "https://www.instagram.com/i_arslanbutt",
        }),
      },
    }),
  },
});

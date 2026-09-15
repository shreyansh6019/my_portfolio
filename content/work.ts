import {
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiAntdesign,
  SiReduxsaga,
} from "react-icons/si";

import type { Work } from "@/types/work";

export const work: Work[] = [
  {
    id: "andesml",

    featured: true,

    title: "AndesML Advertising Platform",

    subtitle: "Multi-Role Retail Advertising & Campaign Management Platform",

    description:
      "Built a production-grade advertising platform from scratch using React, Next.js, and TypeScript, enabling advertisers, publishers, and sellers to manage campaigns, payments, billing, and role-specific workflows through a scalable and responsive web application.",

    media: {
      type: "video",
      src: "/projects/andesml.mp4",
    },

    technologies: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Redux",
        icon: SiRedux,
      },
      {
        name: "Ant Design",
        icon: SiAntdesign,
      },
      {
        name: "Redux Saga",
        icon: SiReduxsaga,
      },
    ],

    highlights: [
      {
        title: "Authentication & Authorization",
        description:
          "Implemented secure email/password authentication with backend validation, JWT-based sessions, and role-based access control for Advertisers, Publishers, and Sellers.",
      },

      {
        title: "Campaign Management",
        description:
          "Developed end-to-end campaign workflows for Sponsored Products, Sponsored Brands, and Display Ads with validated multi-step forms and reliable submission handling.",
      },

      {
        title: "Payments & Billing",
        description:
          "Integrated payment workflows and developed billing experiences for managing pending payments, viewing bills, and generating PDF invoices.",
      },

      {
        title: "Multi-Role Platform",
        description:
          "Designed and implemented dedicated dashboards and workflows tailored to the requirements of Advertisers, Publishers, and Sellers, with multi-language support across the platform.",
      },

      {
        title: "Performance & Frontend Architecture",
        description:
          "Applied SSR, SSG, ISR, debouncing, throttling, and frontend performance optimization techniques while building reusable components and scalable application architecture.",
      },

      {
        title: "GitLab & Production Deployment",
        description:
          "Deployed the application through GitLab and managed the project repository, supporting version control, code collaboration, and production release workflows.",
      },
    ],

    links: {
      live: "https://andesml.com",
      // github: "https://github.com/shreyansh6019",
    },
  },
  {
    id: "lyca-esims",

    featured: true,

    title: "Lyca eSIM & Mobile Platform",

    subtitle: "International Prepaid & Postpaid Telecom Experience",

    description:
      "Supported and enhanced Lyca's production-grade prepaid and postpaid web platforms, resolving post-production issues, delivering new customer-facing features, and deploying applications across 25+ international markets.",

    media: {
      type: "video",
      src: "/lyca-esims.mp4",
    },

    technologies: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Redux Toolkit",
        icon: SiRedux,
      },
      //   {
      //     name: "Material UI",
      //     icon: SiMui,
      //   },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],

    highlights: [
      {
        title: "Production Support",
        description:
          "Supported Lyca's live prepaid platform by investigating and resolving post-production issues, maintaining application stability across international markets.",
      },

      {
        title: "International Deployment",
        description:
          "Supported application deployments across 25+ countries, handling environment and zone-specific requirements for Lyca's international customer-facing platforms.",
      },

      {
        title: "Postpaid Feature Development",
        description:
          "Developed and integrated customer-facing features for Lyca's postpaid platform using React, Next.js, TypeScript, and reusable frontend components.",
      },

      {
        title: "Prepaid Customer Experience",
        description:
          "Worked on the prepaid customer experience covering plan discovery, plan selection, existing-customer flows, international plans, FAQs, and support journeys.",
      },

      {
        title: "Plan & Product Experiences",
        description:
          "Implemented and maintained responsive interfaces for mobile plans, data allowances, international offerings, and related customer journeys.",
      },

      {
        title: "State Management",
        description:
          "Implemented predictable application state management using Redux Toolkit for scalable and maintainable frontend workflows.",
      },

      {
        title: "Responsive UI Development",
        description:
          "Built responsive and reusable interfaces using Material UI and Tailwind CSS, maintaining consistent experiences across devices and screen sizes.",
      },

      {
        title: "Production-Grade Frontend",
        description:
          "Contributed to a large-scale customer-facing telecom platform with a focus on maintainability, reliability, responsive design, and production stability.",
      },
    ],

    links: {
      live: "https://www.lycamobile.us/en/",
    },
  },
  {
    id: "fynd",
    featured: true,

    title: "Fynd Commerce Platform",

    subtitle: "SaaS-Based Enterprise E-Commerce Platform",

    description:
      "Worked on Fynd's SaaS-based commerce platform, supporting production storefronts for multiple enterprise brands and leading the development of Ritu Kumar's complete e-commerce experience across multiple storefronts.",

    media: {
      type: "video",
      src: "/ritukumar.mp4",
    },

    technologies: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],

    highlights: [
      {
        title: "Enterprise E-Commerce Development",
        description:
          "Developed Ritu Kumar's complete e-commerce experience, including Homepage, PLP, PDP, Wishlist, Cart, Checkout, Orders, Policies, and Marketing pages using the Fynd commerce platform.",
      },

      {
        title: "Multi-Storefront Delivery",
        description:
          "Delivered and maintained four Ritu Kumar storefronts covering the main brand website, RI, Label, and Aarke experiences within the Fynd ecosystem.",
      },

      {
        title: "Multi-Brand Production Support",
        description:
          "Supported production storefronts for brands including Gas Jeans, Mothercare, Tiffany, and Pottery Barn, resolving issues and maintaining reliable customer-facing experiences.",
      },

      {
        title: "Frontend Architecture",
        description:
          "Built responsive and reusable frontend experiences using React, Next.js, TypeScript, and Tailwind CSS while leveraging Fynd's platform capabilities for commerce functionality and application state.",
      },

      {
        title: "Team Leadership & Delivery",
        description:
          "Led a 5-member development team, distributed project responsibilities, coordinated day-to-day execution, tracked progress, and successfully delivered the project.",
      },
    ],

    links: {
      live: "https://ritukumar.com/",
    },
  },
];

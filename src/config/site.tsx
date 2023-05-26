import { getCurrentMonth } from "@/utils/getCurrentMonth";

export type SiteConfig = typeof siteConfig;

const currentMonth = getCurrentMonth();

export const categories = [
  {
    title: "Eletrônicos",
    url: "/",
    image: "/images/categories/eletronicos.png",
  },
  {
    title: "Pets",
    url: "/",
    image: "/images/categories/eletronicos.png",
  },
  {
    title: "Beleza",
    url: "/",
    image: "/images/categories/eletronicos.png",
  },
];

export const siteConfig = {
  name: "Wizen Shop",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: `Promoções de ${currentMonth}`,
      href: "/promo-do-mes",
    },
    {
      title: "Pegue seu Cupom🎁",
      href: "/cupom",
    },
  ],
  productCategories: categories,
  bottomNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Produtos",
      href: "/carrinho",
    },
    {
      title: "Carrinho",
      href: "/carrinho",
    },
    {
      title: "Perfil",
      href: "/perfil",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
  banners: [
    {
      name: "wizen-prime.png",
      href: "#",
    },
    {
      name: "wizen-prime.png",
      href: "#",
    },
  ],
};

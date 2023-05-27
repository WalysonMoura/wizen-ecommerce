import Link from "next/link";

import { Categories } from "@/components/Home/Categories";
import { FeaturesBenefits } from "@/components/Home/FeaturesBenefits";
import { BestSellers } from "@/components/Home/Sections/BestSellers";
import { PersonalizedOffers } from "@/components/Home/Sections/PersonalizedOffers";
import { Promotions } from "@/components/Home/Sections/Promotions";
import { StoreNews } from "@/components/Home/Sections/StoreNews";
import { Video } from "@/components/Home/Video";
import SliderBanners from "@/components/Home/sliderBanners";
import * as Styles from "@/styles/pages/home";

import { buttonVariants } from "../components/ui/button";
import { siteConfig } from "../config/site";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <SliderBanners />
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <FeaturesBenefits />
      <Categories />
      <div>
        <BestSellers />
        <Promotions />
      {/*  <StoreNews />
        <PersonalizedOffers /> */}
      </div>
      <div>
        <Video />
      </div>

      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          Documentation
        </Link>

        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  );
}

"use client";

import * as React from "react";
import Link from "next/link";
import * as Style from "./styles";
//import { getPublishedBlogPosts } from "@/services/notion"
//import { useQuery } from "react-query"

//import { BlogPost } from "@/types/blogPost"
import { cn } from "@/lib/utils";

import { Icons } from "../../icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../ui/navigation-menu";

import { BlogPost } from "@/types/blogPost";
import { getSingleBlogPost } from "@/services/notion";

import { siteConfig } from "@/config/site";
import { MainNav } from "../main-nav";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function DesktopMenuNav() {
  // @ts-ignore
  //const posts = await getSingleBlogPost(context.params?.slug)

  //if (!posts) {
  //  throw ''
  //}

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Icons.fullLogo className="h-10 " />
          </Link>
          {siteConfig.mainNav?.length ? (
            <>
              {siteConfig.mainNav?.map(
                (item, index) =>
                  item.href && (
                    <NavigationMenuItem key={index}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  )
              )}
            </>
          ) : null}

          <NavigationMenuItem>
            <NavigationMenuTrigger>Blog Wizen</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Style.WizenPrimeLink href="/blog/wizen-prime">
                      <Icons.logo className="h-8 w-8" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Wizen Prime
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        A experiência VIP que você merece!
                      </p>
                    </Style.WizenPrimeLink>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
                {/** 
                {posts &&
                  posts.map((post: BlogPost) => (
                    <ListItem
                      key={post.id}
                      href="/docs/primitives/typography"
                      title={post.title}
                    >
                      {post.description.length > 50
                        ? `${post.description.substring(0, 50)}...`
                        : post.description}
                    </ListItem>
                  ))}

*/}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

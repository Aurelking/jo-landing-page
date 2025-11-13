"use client";
import { ChevronsDown, Github, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";
import LogoJo from "@/public/logo-jo";

interface RouteProps {
  href: string;
  label: string;
}


const routeList: RouteProps[] = [
    {
        href: "#programmes",
        label: "Programmes",
    },
  {
    href: "#about",
    label: "A propos",
  },

  {
    href: "#contact",
    label: "Contact",
  },

];


export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
      <div className="pl-6 z-50 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-lg mx-auto
                   flex justify-between items-center border
                   rounded-full shadow-inner overflow-hidden pr-6
                   bg-card/50 backdrop-blur-md">
          <Link href="/" className="flex items-center">
              <LogoJo className="h-36 w-40" />
          </Link>

          {/* Mobile menu */}
          <div className="flex items-center lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                      <Menu
                          onClick={() => setIsOpen(!isOpen)}
                          className="cursor-pointer lg:hidden"
                      />
                  </SheetTrigger>

                  <SheetContent
                      side="left"
                      className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
                  >
                      <div>
                          <SheetHeader className="mb-4 ml-4">
                              <SheetTitle className="flex items-center">
                                  <Link href="/" className="flex items-center">
                                      <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
                                      Shadcn
                                  </Link>
                              </SheetTitle>
                          </SheetHeader>

                          <div className="flex flex-col gap-2">
                              {routeList.map(({ href, label }) => (
                                  <Button
                                      key={href}
                                      onClick={() => setIsOpen(false)}
                                      asChild
                                      variant="ghost"
                                      className="justify-start text-base"
                                  >
                                      <Link href={href}>{label}</Link>
                                  </Button>
                              ))}
                          </div>
                      </div>

                      <SheetFooter className="flex-col sm:flex-col justify-start items-start">
                          <Separator className="mb-2" />
                          <ToggleTheme />
                      </SheetFooter>
                  </SheetContent>
              </Sheet>
          </div>

          {/* Desktop navigation */}
          <NavigationMenu className="hidden lg:block">
              <NavigationMenuList>
                  <NavigationMenuItem>
                      {routeList.map(({ href, label }) => (
                          <NavigationMenuLink key={href} asChild>
                              <Link href={href} className="text-base px-2">
                                  {label}
                              </Link>
                          </NavigationMenuLink>
                      ))}
                  </NavigationMenuItem>
              </NavigationMenuList>
          </NavigationMenu>
      </div>

  );
};

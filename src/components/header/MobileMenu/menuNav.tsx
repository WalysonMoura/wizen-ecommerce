"use client";

import { Settings2 } from "lucide-react";
import { BiMenuAltLeft } from "react-icons/bi";

import * as Style from "./styles";

import { siteConfig } from "@/config/site";
import useIsMobile from "@/hooks/useIsMobile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";


export function MobileMenuNav() {

  const isMobile = useIsMobile();
  
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Style.HamburgerButton type="checkbox" id="checkbox" />
          <Style.Toggle htmlFor="checkbox" className="toggle">
            <Style.Bars id="bar1" />
            <Style.Bars id="bar2" />
            <Style.Bars id="bar3" />
          </Style.Toggle>
          <Button variant="outline" className="w-10 rounded-full p-0">
            <Settings2 className="h-4 w-4" />
            <span className="sr-only">Open Menu Mobiler</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
             
            </div>

            <div className="space-y-2">
              <h4 className="font-medium leading-none">
                Onde está meu produto?
              </h4>
              <p className="text-sm text-muted-foreground">Rastrear pedido</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Precisa de ajuda?</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>

            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Width</Label>
                <Input
                  id="width"
                  defaultValue="100%"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Max. width</Label>
                <Input
                  id="maxWidth"
                  defaultValue="300px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  defaultValue="25px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxHeight">Max. height</Label>
                <Input
                  id="maxHeight"
                  defaultValue="none"
                  className="col-span-2 h-8"
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}

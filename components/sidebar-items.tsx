"use client"

import { Button } from "./ui/button";

type Props = {
  label: string;
  iconSrc: string;
  href: string;
}

export const SidebarItem = ({ label, iconSrc, href }: Props) => {
  return (
    <Button>
      {label}
    </Button>
  )
}
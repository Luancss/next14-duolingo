import { Button } from "@/components/ui/button";

export default function Buttons () {
  return (
    <div className="flex  p-4 space-y-3 flex-col max-w-[200px]">
      <Button size="lg">Olá</Button>
      <Button size="lg" variant="primary">Olá</Button>
      <Button size="lg" variant="primaryOutline">Olá</Button>
      <Button size="lg" variant="secondary">Olá</Button>
      <Button size="lg" variant="secondaryOutline">Olá</Button>
      <Button size="lg" variant="danger">Olá</Button>
      <Button size="lg" variant="dangerOutline">Olá</Button>
      <Button size="lg" variant="super">Olá</Button>
      <Button size="lg" variant="superOutline">Olá</Button>
      <Button size="lg" variant="ghost">Olá</Button>
      <Button size="lg" variant="sidebar">Olá</Button>
      <Button size="lg" variant="sidebarOutline">Olá</Button>
    </div>
  )
}
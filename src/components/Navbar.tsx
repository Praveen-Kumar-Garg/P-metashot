import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6 ">
        <div className="flex items-center gap-2">
          <img src="/image.avif" alt="MetaShot Logo" className="h-6 w-6" />
          <span className="text-lg font-semibold text-[#307a30]">MetaShot</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost">Features</Button>
          <Button variant="outline">Book a Call</Button>
          <a href="https://interview.metashot.org/Demo" target="_blank">
            <Button className="bg-violet-600 hover:bg-violet-700">
              See Us in Action
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}

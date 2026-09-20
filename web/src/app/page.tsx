import Hero from "@/sections/Hero";
import Breadth from "@/sections/Breadth";
import ModuleGrid from "@/sections/ModuleGrid";
import Stack from "@/sections/Stack";
import Checklist from "@/sections/Checklist";
import DownloadCTA from "@/sections/DownloadCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Breadth />
      <ModuleGrid />
      <Stack />
      <Checklist />
      <DownloadCTA />
    </main>
  );
}

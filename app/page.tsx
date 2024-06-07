import Enterprises from "./components/sections/products/Enterprises";
import Hero from "./components/sections/products/Hero";
import Platforms from "./components/sections/products/Platforms";
import WhatIs from "./components/sections/products/What";

export default function Home() {
  return (
    <main className="bg-teal-900">
      <Hero />
      <WhatIs />
      <Platforms />
      <Enterprises />
    </main>
  );
}

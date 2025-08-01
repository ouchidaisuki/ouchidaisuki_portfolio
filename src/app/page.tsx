import Hero from "./components/Hero/Hero";
import Works from "./components/Works/Works";
import About from "./components/About/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Works />
      <About />
      {/* 後続のセクション（Contactなど） */}
    </>
  );
}

import Image from "next/image";
import Footer from "@/componenet/footer/footer";
import Header from "@/componenet/header/header";
import Hero from "@/componenet/hero/hero";
export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Footer/>
      <Header></Header>
      <Hero/>
    </div>
  );
}

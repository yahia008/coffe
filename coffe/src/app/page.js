import Image from "next/image";
import NavBar from "./components/NavBar";
import Banner from "./components/Section";
import About from "./components/about";
import Band from "./components/brand";
import Mypage from "./components/Mypage";
import Footer from "./components/fotter";
export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
     
        <NavBar/>
        <section className="w-full">
        <Banner/>
        </section>
        <section className="w-full bg-[#FDFFF5]">
          <About/>
          
        </section>
        <section className="w-full bg-[#FDFFF5]">
          <Band/>
          
        </section>
        <section className=" bg-gray-100 w-full m-3">
          <Mypage/>
        </section>
       
      </div>
     <section className=" hidden sm:block w-full mt-4 bottom-0 relative ">
     <Footer/>
     </section>
    </>
  );
}

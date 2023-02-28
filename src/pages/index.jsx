import Slider from "@/components/Slider";
import HeaderNav from "@/components/HeaderNav";
import Card from "@/components/Card";
import ddesign from "../../public/images/3d.json";
import uiux from "../../public/images/ui.json";
import product from "../../public/images/product.json";
import logod from "../../public/images/logo.json";
import creatived from "../../public/images/creative.json";

import Link from "next/link";

export default function Home() {
  const ddsign = ddesign;
  const ui = uiux;
  const productdesign = product;
  const logo = logod;
  const creative = creatived;

  return (
    <>
      <HeaderNav />
      <main className="relative">
        <div className="sm:hidden">
          <video autoPlay muted loop>
            <source src="./sochiz-short.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="lg:p-2 0 sm:py-20 md:p-8 lg:absolute lg:top-60 sm:top-0 lg:left-44">
          <div className="lg:w-[60%] text-center mx-auto">
            <div className="lg:text-5xl sm:text-3xl leading-8 font-black capitalize text-white">
              Best in Design, animation and
              <span className="text-[#FEAE1B]">Creative Diary</span>
            </div>
            <div className="mt-8">
              <button className="bg-[#1C2128] p-3 rounded-md text-white w-40 sm:w-80 sm:my-2 mx-2">
                Our Services
              </button>
              <button className="bg-[#FEAE1B] p-3 rounded-md mx-2 w-40  sm:w-80 sm:my-2">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[80%] sm:w-[85%] mx-auto">
          <div className="flex justify-evenly mx-auto lg:w-96 py-8">
            <div className="my-auto">
              <div className="p-1 w-20 sm:w-10 bg-white"></div>
              <div className="p-1 w-20 sm:w-10 bg-white mt-1"></div>
            </div>
            <div className="text-white font-black text-4xl sm:text-2xl my-auto">
              Our Services
            </div>
          </div>
          <Slider />
        </div>
        <section className="mt-10 lg:w-[80%] sm:w-[85%] mx-auto">
          <div className="flex justify-evenly mx-auto lg:w-96 py-8">
            <div className="my-auto">
              <div className="p-1 w-20 sm:w-10 bg-white"></div>
              <div className="p-1 w-20 sm:w-10 bg-white mt-1"></div>
            </div>
            <div className="text-white font-black text-4xl sm:text-2xl my-auto">
              3D Design
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            {ddsign.slice(0, 6).map((single, index) => (
              <Card
                key={index}
                img={"./3D-DESIGN/" + single.img}
                title={single.title}
              />
            ))}
          </div>
          <div className="text-center text-white font-bold text-lg">
            <Link href={"3d-design"}>View More</Link>
          </div>
        </section>
        <section className="mt-10 lg:w-[80%] sm:w-[85%] mx-auto">
          <div className="flex justify-evenly mx-auto lg:w-96 py-8">
            <div className="my-auto">
              <div className="p-1 w-20 sm:w-10 bg-white"></div>
              <div className="p-1 w-20 sm:w-10 bg-white mt-1"></div>
            </div>
            <div className="text-white font-black text-4xl sm:text-2xl my-auto">
              UI Design
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            {ui.slice(0, 6).map((single, index) => (
              <Card
                key={index}
                img={"./UI-DESIGN/" + single.img}
                title={single.title}
              />
            ))}
          </div>
          <div className="text-center text-white font-bold text-lg">
            <Link href={"ui-design"}>View More</Link>
          </div>
        </section>
        <section className="mt-10 lg:w-[80%] sm:w-[85%] mx-auto">
          <div className="flex justify-evenly mx-auto lg:w-96 py-8">
            <div className="my-auto">
              <div className="p-1 w-20 sm:w-10 bg-white"></div>
              <div className="p-1 w-20 sm:w-10 bg-white mt-1"></div>
            </div>
            <div className="text-white font-black text-4xl sm:text-2xl my-auto">
              Product Design
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            {productdesign.slice(0, 6).map((single, index) => (
              <Card
                key={index}
                img={"./PRODUCT-DESIGN/" + single.img}
                title={single.title}
              />
            ))}
          </div>
          <div className="text-center text-white font-bold text-lg">
            <Link href={"product-design"}>View More</Link>
          </div>
        </section>
        <section className="mt-10 lg:w-[80%] sm:w-[85%] mx-auto">
          <div className="flex justify-evenly mx-auto lg:w-96 py-8">
            <div className="my-auto">
              <div className="p-1 w-20 sm:w-10 bg-white"></div>
              <div className="p-1 w-20 sm:w-10 bg-white mt-1"></div>
            </div>
            <div className="text-white font-black text-4xl sm:text-2xl my-auto">
              Logo Design
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            {logo.slice(0, 6).map((single, index) => (
              <Card
                key={index}
                img={"./LOGO-DESIGN/" + single.img}
                title={single.title}
              />
            ))}
          </div>
          <div className="text-center text-white font-bold text-lg">
            <Link href={"logo-design"}>View More</Link>
          </div>
        </section>
        <section className="mt-10 lg:w-[80%] sm:w-[85%] mx-auto">
          <div className="flex justify-evenly mx-auto lg:w-96 py-8">
            <div className="my-auto">
              <div className="p-1 w-20 sm:w-10 bg-white"></div>
              <div className="p-1 w-20 sm:w-10 bg-white mt-1"></div>
            </div>
            <div className="text-white font-black text-4xl sm:text-2xl my-auto">
              Creative Diary
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            {creative.slice(0, 6).map((single, index) => (
              <Card
                key={index}
                img={"./CREATIVE-DIARY/" + single.img}
                title={single.title}
              />
            ))}
          </div>
          <div className="text-center text-white font-bold text-lg">
            <Link href={"creative"}>View More</Link>
          </div>
        </section>
      </main>
    </>
  );
}

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
        <div className="lg:p-2 0 sm:py-20 md:p-8 lg:absolute lg:top-60 sm:top-0 lg:left-52">
          <div className="lg:w-[60%] text-center mx-auto">
            <div className="lg:text-5xl sm:px-10 sm:text-3xl leading-8 font-black capitalize text-white">
              Best in Design, animation and
              <span className="text-[#FEAE1B]">Creative Diary</span>
            </div>
            <div className="mt-8">
              <a href="#service">
                <button className="bg-[#1C2128] p-3 rounded-md text-white w-40 sm:w-80 sm:my-2 mx-2">
                  Our Services
                </button>
              </a>
              <a href="mailto:Sochizdesigns@gmail.com">
                <button className="bg-[#FEAE1B] p-3 rounded-md mx-2 w-40  sm:w-80 sm:my-2">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
        <div id="service" className="lg:w-[80%] sm:w-[85%] mx-auto">
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
        <div id="about">
          <div className="lg:flex lg:my-20 sm:mt-20 justify-between lg:w-[50%] mx-auto">
            <div className="w-1/2 sm:w-full lg:p-10">
              <img src="./main-image.jpg" alt="" />
            </div>
            <div className="w-1/2 sm:w-full sm:p-8 my-auto ">
              <h1 className="text-4xl sm:text-xl font-bold text-[#FAD646]">
                About <br /> Sochiz Design
              </h1>
              <p className="text-white font-sm sm:text-sm mt-6">
                Sochiz Design is a firm with 15 years of experience in providing
                bespoke design services to an impressive range of customers.
                Formerly known as Sochiz arts, we are a company that has
                transformed and expanded to provide state-of-the-art services in
                animation, advertisement design, as well as logo and brand
                design.
                <br />
                <br />
                Our subsidiaries, Pentful Clothing and Pentful Arts are
                respectively two primary channels through which we fulfill our
                mission objective of becoming your number 1 design solutions
                firm. At Sochiz Design, we’re enthusiastic about transforming
                your design initiatives into reality.
              </p>
            </div>
          </div>
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

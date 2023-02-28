import Slider from "@/components/Slider";
import HeaderNav from "@/components/HeaderNav";
import Card from "@/components/Card";
import images from "../../public/images";

export default function Home() {
  const image = images;
  return (
    <>
      <HeaderNav />
      <main className="relative">
        <div className="sm:hidden">
          <video autoPlay muted loop >
            <source src="./sochiz-short.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="lg:p-2 0 sm:py-20 md:p-8 lg:absolute lg:top-60 sm:top-0 lg:left-40">
          <div className="lg:w-[60%] text-center mx-auto">
            <div className="lg:text-5xl sm:text-3xl font-black capitalize text-white">
              Best in Design, animation and{" "}
              <span className="text-[#FEAE1B]">Creative Diary</span>{" "}
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
              Creative Diary
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            {image.map((single, index) => (
              <Card key={index} img={single.img} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

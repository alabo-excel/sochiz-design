import Slider from "@/components/Slider";
import HeaderNav from "@/components/HeaderNav";
import Card from "@/components/Card";
import images from "../../public/images";

export default function Home() {
  const image = images;
  return (
    <>
      <HeaderNav />
      <main>
        <div className="lg:p-20 sm:py-14 md:p-8">
          <div className="lg:w-[32%] text-center mx-auto">
            <div className="text-3xl font-black capitalize text-white">
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
          <div className="flex justify-evenly mx-auto w-96 py-8">
            <div className="my-auto">
              <div className="p-1 w-20 bg-white"></div>
              <div className="p-1 w-20 bg-white mt-1"></div>
            </div>
            <div className="text-white font-black text-4xl my-auto">
              Our Services
            </div>
          </div>
          <Slider />
        </div>
        <section className="mt-10 lg:w-[80%] sm:w-[85%] mx-auto">
          <div className="flex justify-evenly mx-auto w-96 py-8">
            <div className="my-auto">
              <div className="p-1 w-20 bg-white"></div>
              <div className="p-1 w-20 bg-white mt-1"></div>
            </div>
            <div className="text-white font-black text-4xl my-auto">
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

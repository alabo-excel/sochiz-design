// import Slider from "../components/Slider";
import HeaderNav from "../components/HeaderNav";
// import Card from "../components/Card";
// import ddesign from "../../public/images/CREATIVE.json";

export default function Home() {
  const ddsign = [
    {
      img: "ENVOY-FOODS.mp4",
      title: "Envoy Food",
    },
    {
      img: "FAJI-KOTURE.mp4",
      title: "Faji Koture",
    },
    {
      img: "Instant-apt.mp4",
      title: "Instant Apt",
    },
    {
      img: "PANTHERS.mp4",
      title: "Panther",
    },
    {
      img: "RL-DESSERTS.mp4",
      title: "RL Dessert",
    },
    {
      img: "SINDY-MOTORS.mp4",
      title: "Sindy Motors",
    },
    {
      img: "COCO.mp4",
      title: "Coco",
    },
    {
      img: "ELSCUMADO.mp4",
      title: "Elscumado",
    },
  ];
  return (
    <>
      <HeaderNav />
      <main className="">
        <section className="mt-10 lg:w-[80%] sm:w-[85%] mx-auto">
          <div className="flex justify-evenly mx-auto lg:w-96 py-8">
            <div className="my-auto">
              <div className="p-1 w-20 sm:w-10 bg-white"></div>
              <div className="p-1 w-20 sm:w-10 bg-white mt-1"></div>
            </div>
            <div className="text-white font-black text-4xl sm:text-2xl my-auto">
              Animation
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            {ddsign.map((single, index) => (
              <div key={index} className="rounded-md m-2 w-[32%] sm:w-full">
                <video autoPlay muted loop className="w-full h-52">
                  <source src={"./ANIMATION/" + single.img} type="video/mp4" />
                </video>
                <div className="p-3 border border-[#FFFFFF33]">
                  <h2 className="text-xl sm:text-base text-white">
                    {single.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

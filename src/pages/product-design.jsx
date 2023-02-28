import Slider from "@/components/Slider";
import HeaderNav from "@/components/HeaderNav";
import Card from "@/components/Card";
import ddesign from "../../public/images/product.json";

export default function Home() {
  const ddsign = ddesign;
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
              Product Design
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            {ddsign.map((single, index) => (
              <Card
                key={index}
                img={"./PRODUCT-DESIGN/" + single.img}
                title={single.title}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

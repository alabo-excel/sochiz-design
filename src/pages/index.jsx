import { useEffect, useState, useCallback } from "react";
import Slider from "../components/Slider";
import HeaderNav from "../components/HeaderNav";
import Card from "../components/Card";
import ddesign from "../../public/images/3d.json";
import uiux from "../../public/images/ui.json";
import product from "../../public/images/product.json";
import logod from "../../public/images/logo.json";
import creatived from "../../public/images/creative.json";
import { render } from "react-dom";
import ImageViewer from "react-simple-image-viewer";
import { Fade, Slide } from "react-awesome-reveal";

export default function Home() {
  const ddsign = ddesign;
  const ui = uiux;
  const productdesign = product;
  const logo = logod;
  const creative = creatived;
  const [all, setAll] = useState([...ddsign, ...ui, ...productdesign, ...logo]);

  const [show, setShow] = useState(true);

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const animation = [
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
  useEffect(() => {
    if (window.innerWidth > 768) {
      setTimeout(() => {
        setShow(false);
      }, 4000);
    }
  }, []);

  return (
    <>
      <HeaderNav />
      <main className="relative">
        <div className="sm:hidden">
          <video autoPlay muted loop>
            <source src="./sochiz-short.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="lg:p-2 0 sm:pt-40 sm:pb-20 md:p-8 lg:absolute lg:top-80 lg:w-[60%] text-center mx-auto sm:top-0 lg:left-[20%] lg:right-[20%]">
          <div className={show ? "block" : "hidden"}>
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
        <div id="about">
          <div className="lg:my-20 lg:w-[50%] mx-auto">
            <div className="w-full sm:p-8 my-auto text-center">
              <h1 className="text-4xl sm:text-2xl font-bold text-[#FAD646]">
                About
                {/* <br /> Sochiz Design */}
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
        <div id="service" className="lg:w-[80%] sm:w-[85%] mx-auto">
          <div className="flex justify-evenly mx-auto lg:w-96 py-8">
            <div className="my-auto">
              <div className="p-1 w-20 sm:w-10 bg-white"></div>
              <div className="p-1 w-20 sm:w-10 bg-white mt-1"></div>
            </div>
            <div className="text-white font-black text-4xl sm:text-2xl my-auto">
              What We Do
            </div>
          </div>
          <Slider />
        </div>
        <section id="portfolio" className="mt-10 lg:w-[80%] sm:w-[85%] mx-auto">
          <div className="flex justify-evenly mx-auto lg:w-96 py-8">
            <div className="my-auto">
              <div className="p-1 w-20 sm:w-10 bg-white"></div>
              <div className="p-1 w-20 sm:w-10 bg-white mt-1"></div>
            </div>
            <div className="text-white font-black text-4xl sm:text-2xl my-auto">
              Portfolio
            </div>
          </div>
          <div className="flex text-white sm:flex-wrap justify-evenly my-8">
            {/* <div
              onClick={() =>
                setAll([...ddsign, ...ui, ...productdesign, ...logo])
              }
              className={
                all !== ddsign &&
                all !== ui &&
                all !== productdesign &&
                all !== logod
                  ? "text-[#FAD646] cursor-pointer text-base font-bold"
                  : "cursor-pointer text-base font-bold"
              }
            >
              SHOW ALL
            </div>
            <div>
              <img src="./line.png" alt="" />
            </div> */}
            <div
              onClick={() => setAll(logod)}
              className={
                all === logod
                  ? "text-[#FAD646] cursor-pointer text-base font-bold"
                  : "cursor-pointer text-base font-bold"
              }
            >
              LOGO DESIGN
            </div>
            <div>
              <img src="./line.png" alt="" />
            </div>
            <div
              onClick={() => setAll(productdesign)}
              className={
                all === productdesign
                  ? "text-[#FAD646] cursor-pointer text-base font-bold"
                  : "cursor-pointer text-base font-bold"
              }
            >
              PRODUCT DESIGN
            </div>
            <div>
              <img src="./line.png" alt="" />
            </div>
            <div
              onClick={() => setAll(ui)}
              className={
                all === ui
                  ? "text-[#FAD646] cursor-pointer text-base font-bold"
                  : "cursor-pointer text-base font-bold"
              }
            >
              UI/UX DESIGN
            </div>
            <div>
              <img src="./line.png" alt="" />
            </div>
            <div
              onClick={() => setAll(ddsign)}
              className={
                all === ddsign
                  ? "text-[#FAD646] cursor-pointer text-base font-bold"
                  : "cursor-pointer text-base font-bold"
              }
            >
              3D DESIGN
            </div>
          </div>
          <div className="flex flex-wrap">
            {all.map((src, index) => (
              <div key={index} className=" rounded-md lg:w-1/3 sm:w-full">
                <Slide>
                  <img
                    className="transition duration-500 hover:scale-75  hover:z-10  w-full h-52 object-cover"
                    src={src.img}
                    alt=""
                    onClick={() => openImageViewer(index)}
                  />
                </Slide>
              </div>
            ))}

            {isViewerOpen && (
              <ImageViewer
                src={all.map((single) => single.img)}
                currentIndex={currentImage}
                disableScroll={true}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
              />
            )}
          </div>
        </section>
        <section className="mt-10 lg:w-[100%] sm:w-[85%] mx-auto">
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
            {animation.map((single, index) => (
              <div key={index} className="rounded-md w-[25%] my-3 sm:w-full">
                <video autoPlay muted loop className="w-full lg:h-52">
                  <source src={"./ANIMATION/" + single.img} type="video/mp4" />
                </video>
                {/* <div className="p-3 border border-[#FFFFFF33]">
                  <h2 className="text-xl sm:text-base text-white">
                    {single.title}
                  </h2>
                </div> */}
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="mt-10 lg:w-[80%] sm:w-[85%] mx-auto">
          <div className="flex justify-evenly mx-auto lg:w-96 py-8">
            <div className="my-auto">
              <div className="p-1 w-20 sm:w-10 bg-white"></div>
              <div className="p-1 w-20 sm:w-10 bg-white mt-1"></div>
            </div>
            <div className="text-white font-black text-4xl sm:text-2xl my-auto">
              Contact
            </div>
          </div>
          <div className="lg:flex justify-evenly">
            <div className="lg:w-[20%]">
              <label className="text-white text-sm">Your Name:*</label> <br />
              <input type="text" className="p-3 bg-[#292929] w-full" />
            </div>
            <div className="lg:w-[20%]">
              <label className="text-white text-sm">Email:*</label> <br />
              <input type="text" className="p-3 bg-[#292929] w-full" />
            </div>
            <div className="lg:w-[40%]">
              <label className="text-white text-sm">Tell Us Everything:*</label>{" "}
              <br />
              <input type="text" className="p-3 bg-[#292929] w-full" />
            </div>
            <div>
              <label className="text-white text-sm"></label> <br />
              <button className="p-3 bg-[#292929] text-[#FAD646]">
                SUBMIT
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#292929] p-4 mt-16">
        <div className="text-center text-white">Designed by Sochi</div>
      </footer>
    </>
  );
}

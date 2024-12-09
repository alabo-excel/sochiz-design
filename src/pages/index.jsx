import { useEffect, useState, useRef, useCallback } from "react";
import Slider from "../components/Slider";
import HeaderNav from "../components/HeaderNav";
import Card from "../components/Card";
import ddesign from "../../public/images/3d.json";
import uiux from "../../public/images/ui.json";
import product from "../../public/images/product.json";
import logod from "../../public/images/logo.json";
import cover from "../../public/images/cover.json";
import vector from "../../public/images/vector.json";
import pencil from "../../public/images/pencil.json";
import jean from "../../public/images/jean.json";
import shoes from "../../public/images/shoes.json";
import clothing from "../../public/images/clothing.json";

import ImageViewer from "react-simple-image-viewer";
import { Slide } from "react-awesome-reveal";
import { Modal } from "antd";

export default function Home() {
  const ddsign = ddesign;
  const ui = uiux;
  const productdesign = product;
  const logo = logod;
  const [all, setAll] = useState(logo);
  const [show, setShow] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [single, setSingle] = useState({});
  const videoRef = useRef(null);

  function openSingle(single) {
    setSingle(single);
    setOpenModal(true);
  }
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
      img: "./ANIMATION/ELSCUMADO.mp4",
      title: "ELSCUMADO",
    },
    {
      img: "./ANIMATION/ENVOY-FOODS.mp4",
      title: "ENVOY FOODS",
    },
    {
      img: "./ANIMATION/How-zebra-got-its-black-stripes-cartoon.mp4",
      title: "How zebra got its black stripes cartoon",
    },
    {
      img: "./ANIMATION/PANTHERS.mp4",
      title: "Panther",
    },
    {
      img: "./ANIMATION/SINDY-MOTORS.mp4",
      title: "SINDY MOTORS",
    },
    {
      img: "./ANIMATION/Instant-apt.mp4",
      title: "Instant apt",
    },
    {
      img: "./ANIMATION/Logo-Montage-Showreel.mp4",
      title: "Logo Montage Showreel",
    },
    {
      img: "./ANIMATION/My2024Motiongraphics.mp4",
      title: "My 2024 Motion graphics",
    },
  ];
  useEffect(() => {
    // if (window.innerWidth > 768) {
    setTimeout(() => {
      setShow(false);
    }, 4000);
    // }
  }, []);

  return (
    <>
      <HeaderNav />
      <main className="relative">
        <div className="sm:mt-20">
          <video autoPlay muted loop>
            <source src="./sochiz-short.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="lg:p-2 sm:pb-20 md:p-8 lg:absolute lg:top-80 lg:w-[60%] text-center mx-auto sm:top-0 lg:left-[20%] lg:right-[20%]">
          <div className={show ? "block" : "hidden"}>
            <div className="lg:text-5xl sm:absolute sm:top-16 sm:px-10 sm:text-3xl leading-8 font-black heading capitalize text-white">
              Welcome to <span className="text-[#FEAE1B]">Sochiz world</span>
              {/* <span className="text-[#FEAE1B]">Creative Diary</span> */}
            </div>
            <div className="mt-8 sm:hidden">
              <a href="#service">
                <button className="bg-[#1C2128] p-3 rounded-md text-white w-40 sm:w-80 sm:my-2 mx-2">
                  Our Services
                </button>
              </a>
              <a href="#contact">
                <button className="bg-[#FEAE1B] p-3 rounded-md mx-2 w-40  sm:w-80 sm:my-2">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
        <div id="about" className="lg:flex my-10 justify-between">
          <div className="lg:py-24 lg:w-[50%] lg:p-10">
            <div className="w-full sm:p-8 my-auto">
              <h1 className="text-4xl sm:text-2xl heading font-bold text-[#FAD646]">
                About
                {/* <br /> Sochiz Design */}
              </h1>
              <p className="text-white font-sm sm:text-sm mt-6">
                Sochi, fondly known as Chuks, is a Senior Creative Director with over 10 years of experience in digital arts and design. He has been the driving force behind many startups and established brands in the arts, media, and entertainment industries. Known for his ability to turn ideas into reality, Sochi is a natural team player and leader who ensures every project he handles is delivered with excellence.
                <br />
                <br />
                Despite his young age, he has worked with top brands in roles ranging from freelance designer to project manager and creative head. He’s also deeply passionate about mentoring young designers, helping them grow their skills and confidence. Beyond design, Sochi wears many hats as a brand manager, musician, and entrepreneur, with creativity that flows seamlessly across all branches of the arts.

              </p>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-3 gap-4">
            <img src="/startups/16B97EC0-7FF1-4307-B5FD-F23CCED742E1.jpg" alt="" />
            <img src="/startups/IMG_7858.jpg" alt="" />
            <img src="/startups/IMG_7864.png" alt="" />
            <img src="/startups/IMG_7865.jpg" alt="" />
            <img src="/startups/IMG_8502.jpg" alt="" />
            <img src="/startups/IMG_8503.png" className="lg:h-52" alt="" />
          </div>
        </div>
        <div id="service" className="lg:w-[80%] sm:w-[85%] mx-auto">
          <div className="flex justify-evenly mx-auto lg:w-96 py-8">
            <div className="my-auto">
              <div className="p-1 w-20 sm:w-10 bg-white"></div>
              <div className="p-1 w-20 sm:w-10 bg-white mt-1"></div>
            </div>
            <div className="text-white font-black text-4xl heading sm:text-2xl my-auto">
              What We Do
            </div>
          </div>
          <Slider />
        </div>
        <section id="portfolio" className="pt-16 lg:w-[80%] sm:w-[85%] mx-auto">
          <div className="flex justify-evenly mx-auto lg:w-96 py-8">
            <div className="my-auto">
              <div className="p-1 w-20 sm:w-10 bg-white"></div>
              <div className="p-1 w-20 sm:w-10 bg-white mt-1"></div>
            </div>
            <div className="text-white font-black text-4xl heading sm:text-2xl my-auto">
              Portfolio
            </div>
          </div>
          <div className="flex text-white sm:flex-wrap justify-evenly my-8">
            <div
              onClick={() => setAll(logo)}
              className={
                all === logo
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
              onClick={() => setAll(cover)}
              className={
                all === cover
                  ? "text-[#FAD646] uppercase cursor-pointer text-base font-bold"
                  : "cursor-pointer uppercase text-base font-bold"
              }
            >
              ⁠Email campaign & cover arts
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
          <div className="flex text-white uppercase sm:flex-wrap justify-evenly my-8">

            <div
              onClick={() => setAll(vector)}
              className={
                all === vector
                  ? "text-[#FAD646] cursor-pointer text-base font-bold"
                  : "cursor-pointer text-base font-bold"
              }
            >
              Vector design
            </div>
            <div>
              <img src="./line.png" alt="" />
            </div>
            <div
              onClick={() => setAll(pencil)}
              className={
                all === pencil
                  ? "text-[#FAD646] cursor-pointer text-base font-bold"
                  : "cursor-pointer text-base font-bold"
              }
            >
              ⁠pencil works
            </div>
            <div>
              <img src="./line.png" alt="" />
            </div>
            <div
              onClick={() => setAll(clothing)}
              className={
                all === clothing
                  ? "text-[#FAD646] cursor-pointer text-base font-bold"
                  : "cursor-pointer text-base font-bold"
              }
            >
              ⁠pentul cloths
            </div>
            <div>
              <img src="./line.png" alt="" />
            </div>
            <div
              onClick={() => setAll(jean)}
              className={
                all === jean
                  ? "text-[#FAD646] cursor-pointer text-base font-bold"
                  : "cursor-pointer text-base font-bold"
              }
            >
              ⁠Jean jacket
            </div>
            <div>
              <img src="./line.png" alt="" />
            </div>
            <div
              onClick={() => setAll(shoes)}
              className={
                all === shoes
                  ? "text-[#FAD646] cursor-pointer text-base font-bold"
                  : "cursor-pointer text-base font-bold"
              }
            >
              ⁠shoe design
            </div>
          </div>
          <div className="flex flex-wrap">
            {all.map((src, index) => (
              <div key={index} className=" rounded-md lg:w-1/3 sm:w-full">
                <Slide>
                  <img
                    className="transition duration-500 hover:scale-75  hover:z-10 w-full h-60 object-cover"
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
            <div className="text-white font-black heading text-4xl sm:text-2xl my-auto">
              Animation
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            {animation.map((single, index) => (
              <div
                onClick={() => openSingle(single)}
                key={index}
                className="rounded-md w-[25%] my-3 sm:w-full cursor-pointer"
              >
                <video autoPlay muted loop className="w-full lg:h-52">
                  <source src={single.img} type="video/mp4" />
                </video>
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
            <div className="text-white font-black text-4xl heading sm:text-2xl my-auto">
              Contact
            </div>
          </div>
          <form
            action="https://formsubmit.co/sochizdesigns@gmail.com"
            method="POST"
          >
            <div className="lg:flex justify-evenly">
              <div className="lg:w-[20%]">
                <label className="text-white text-sm">Your Name:*</label> <br />
                <input
                  type="text"
                  name="name"
                  className="p-3 bg-[#292929] text-white w-full"
                />
              </div>
              <div className="lg:w-[20%]">
                <label className="text-white text-sm">Email:*</label> <br />
                <input
                  type="text"
                  name="email"
                  className="p-3 bg-[#292929] text-white w-full"
                />
              </div>
              <div className="lg:w-[40%]">
                <label className="text-white text-sm">
                  Tell Us Everything:*
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="message"
                  className="p-3 bg-[#292929] text-white w-full"
                />
              </div>
              <input
                type="hidden"
                name="_next"
                value="https://sochizdesigns.com/"
              />

              <div>
                <label className="text-white text-sm"></label> <br />
                <button
                  type="submit"
                  className="p-3 bg-[#292929] text-[#FAD646]"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
      {openModal ? (
        <Modal
          title={single.title}
          open={openModal}
          footer={null}
          onCancel={() => setOpenModal(!openModal)}
          bodyStyle={{ padding: 0 }}
          width={700}
        >
          <video autoPlay controls className="w-full">
            <source src={single.img} type="video/mp4" />
          </video>
        </Modal>
      ) : null}
      <footer className="bg-[#292929] p-4 mt-16">
        <div className="text-center text-white">Designed by Sochi</div>
      </footer>
    </>
  );
}

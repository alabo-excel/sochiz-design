import HeaderNav from "../components/HeaderNav";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeaderNav />
      <main>
        <div className="p-20">
          <div className=" w-[32%] text-center mx-auto">
            <div className="text-3xl font-black capitalize text-white">
              Best in Design, animation and{" "}
              <span className="text-[#FEAE1B]">Creative Diary</span>{" "}
            </div>
            <div className="mt-8">
              <button className="bg-[#1C2128] p-3 rounded-md text-white w-40 mx-2">
                Our Services
              </button>
              <button className="bg-[#FEAE1B] p-3 rounded-md mx-2 w-40">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

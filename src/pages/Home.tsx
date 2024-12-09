import { Button } from "@/components/ui/button";
import eka from "../assets/eka.png";

import wave1 from "../assets/waves-one.png";
import wave2 from "../assets/waves-one.png";

export default function Home() {
  return (
    <>
      {/* hero */}
      <section className="relative bg-gradient-to-r from-cyan-800 to-cyan-700 pt-5 pb-[4rem]">
        <div className="flex flex-col-reverse md:flex-row container mx-auto  h-[70vh] items-center justify-center grid-cols-1">
          <div className="flex flex-col gap-3 text-white p-8 mb-8 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4 hover:animate-pulse hover:cursor-default">
              Skills for Life, Knowledge for Success.
            </h1>
            <p className="text-xl">
              Kami menggabungkan program e-learning berkualitas dan fitur galeri
              kenangan perkuliahan.
            </p>
            <div>
              <Button>Mulai</Button>
            </div>
          </div>
          <div className="pt-5 mt-5 md:mt-0 md:pt-0">
            <img
              className="w-2/4 md:w-3/5 mx-auto md:order-2 select-none"
              draggable="false"
              src={eka}
              alt="eka foto"
            />
          </div>
        </div>
        <img
          src={wave1}
          alt="waves one"
          draggable="false"
          className="absolute bottom-0 -mb-8"
        />
        <img
          src={wave2}
          alt="waves one"
          draggable="false"
          className="absolute bottom-0 -mb-4"
        />
      </section>
      
      {/* materi */}
      <section className="relative py-12">
        <div className="container mx-auto">
          <h1 className="text-center text-2xl font-bold mb-5">Kursus Kelas</h1>
          <div className="grid grid-cols-8 gap-3 container mx-auto">
            <div className="col-span-8 md:text-right md:col-span-5 flex flex-col gap-3 justify-center order-2 md:order-1 p-4">
              <h1 className="text-3xl font-bold">Web Desain & Desain Grafis</h1>
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                porro veniam laborum recusandae incidunt.
              </p>
              
            </div>
            <div className="col-span-8 md:col-span-3 order-1 md:order-2">
              <div className="flex flex-wrap gap-3 p-4 items-center justify-center">
                <img
                  src="https://placehold.co/600x600"
                  alt="gallery item"
                  className="w-3/4 rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-8 gap-3 container mx-auto">
            <div className="col-span-8 text-center md:text-left md:col-span-5 flex flex-col gap-3 justify-center order-2 md:order-3 p-4">
              <h1 className="text-3xl font-bold">Web Desain & Desain Grafis</h1>
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                porro veniam laborum recusandae incidunt.
              </p>
            </div>
            <div className="col-span-8 md:col-span-3 order-1 md:order-2">
              <div className="flex flex-wrap gap-3 p-4 items-center justify-center">
                <img
                  src="https://placehold.co/600x600"
                  alt="gallery item"
                  className="w-3/4 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* galeri */}
      <section className="relative py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold mb-5">Galeri Kelas</h1>

          {/* galeri items */}
          <div className="flex flex-wrap gap-3 container mx-auto p-4">
            <img
              src="https://placehold.co/600x600"
              alt="gallery item"
              className="w-6 flex-1 basis-1/4 rounded-lg"
            />
            <img
              src="https://placehold.co/600x600"
              alt="gallery item"
              className="w-6 flex-1 basis-1/4 rounded-lg"
            />
            <img
              src="https://placehold.co/600x600"
              alt="gallery item"
              className="w-6 flex-1 basis-1/4 rounded-lg"
            />
            <img
              src="https://placehold.co/600x600"
              alt="gallery item"
              className="w-6 flex-1 basis-1/4 rounded-lg"
            />
            <img
              src="https://placehold.co/600x600"
              alt="gallery item"
              className="w-6 flex-1 basis-1/4 rounded-lg"
            />
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className="relative py-6 bg-theme">
        <div className="container mx-auto text-center">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} HES Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

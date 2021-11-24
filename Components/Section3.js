import { Button } from "./Button.js";

const Section3 = () => {
  return (
    <section className="w-full h-screen bg-pallet1-blueGrotto md:scroll-snap-align-start flex items-center justify-center mt-12 relative">
      <img
        src="/assets/mat1.svg"
        alt="mat"
        className="w-40 h-40 absolute left-20 top-5"
      />
      <div className="w-4/5 h-4/5 bg-white shadow-2xl flex flex-col z-30 relative lg:flex-row">
        <div className="w-full h-1/2 lg:w-1/2 lg:h-full lg:py-16 border-0 border-b-2 lg:border-r-2 border-pallet1-babyBlue">
          <div className="mx-auto w-3/4 h-full py-4 lg:py-0 lg:h-3/4 flex flex-col justify-between items-center md:items-start">
            <h1 className="font-black text-2xl md:text-4xl text-pallet1-navyBlue">
              Stuffs I have built
            </h1>
            <p className="text-lg md:text-xl text-pallet1-blueGrotto">
              Have a look at <br />
              my open sourced Web apps{" "}
            </p>
            <Button>SEE MY WORK</Button>
          </div>
        </div>
        <div className="w-full h-1/2 lg:w-1/2 lg:h-full lg:py-16 border-0 border-t-2 lg:border-l-2 border-pallet1-babyBlue">
          <div className="mx-auto w-3/4 h-full py-4 lg:py-0 lg:h-3/4 flex flex-col justify-between items-center md:items-start">
            <h1 className="font-black text-2xl md:text-4xl text-pallet1-navyBlue">
              My Technical Blogs
            </h1>
            <p className="text-lg md:text-xl text-pallet1-blueGrotto">
              I write about <br />
              Frontend, new libraries etc
            </p>
            <Button>READ MY BLOGS</Button>
          </div>
        </div>
      </div>
      <img
        src="/assets/mat1.svg"
        alt="mat"
        className="w-40 h-40 absolute right-20 bottom-5"
      />
    </section>
  );
};

export default Section3;

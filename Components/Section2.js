const Section2 = () => {
  return (
    <section className="w-full min-h-screen md:h-screen realtive flex flex-col lg:pt-16 md:scroll-snap-align-start md:flex-row">
      <div className="w-full lg:w-9/10 py-5 px-10 md:px-24 relative">
        <img
          src="/assets/mat2.svg"
          alt="blob"
          className="hidden lg:block w-32 h-28 absolute lg:left-56 lg:-top-12"
        />
        <h1 className="font-black relative z-30 text-3xl md:text-5xl text-pallet1-navyBlue">
          About Me
        </h1>
        <article className="mt-5">
          <p className="text-lg lg:text-xl text-pallet1-blueGrotto mb-3">
            Hello There 👋 I am{" "}
            <span className="text-pallet1-navyBlue font-medium">
              Arpan Mondal
            </span>
          </p>
          <p className="text-lg lg:text-xl text-pallet1-blueGrotto mb-3">
            Welcome to my little digital garden in this vast world, where I
            share my learnings.
          </p>
          <p className="text-lg lg:text-xl text-pallet1-blueGrotto mb-3">
            I am currently a 4th year undergrad student of Computer Science and
            Engineering. I am a developer and a technical writer. I love to code
            and also mutually solve problems within peers. I also like teaching
            code to my juniors in Hackiton(The official coding club of my
            college 😅).
          </p>
          <p className="text-lg lg:text-xl text-pallet1-blueGrotto mb-3">
            Though I have worked with various technologies, my inclination and
            strengths lies towards frontend side of things. I have worked with <span className="font-semibold">Javascript, Typescript, React, Redux, Nextjs, Jest</span>. I have also
            worked with various backend technologies like <span className="font-semibold">Nodejs, Expressjs,
            MongoDB</span>.
          </p>
          <p className="text-lg lg:text-xl text-pallet1-blueGrotto mb-3">
            I started Web development in the covid lockdown, back in
            April 2020 and most of it at <span className="text-pallet1-navyBlue font-medium underline">
              <a href="https://neog.camp/" target="_blank">neoG Camp</a>
            </span>, a Cohort Based Course taught by <span className="text-pallet1-navyBlue font-medium underline">
                <a href="https://tanaypratap.com/" target="_blank">Tanay Pratap</a>.
            </span> The team based learning and getting inspiration from peer groups really boosted my confidence and skillset in web development.
          </p>
          <p className="text-lg lg:text-xl text-pallet1-blueGrotto mb-3">
                Apart From web development I also like solving DSA problems, Before web development I used to do Competitive Programming, but couldn't get much success 😥 there, So shifted towards development.
          </p>
        </article>
            <img
                src="/assets/mat.svg"
                alt="blob"
                className="hidden lg:block w-32 h-28 absolute lg:right-0 lg:bottom-0"
            />
            <img
                src="/assets/rings.svg"
                alt="blob"
                className="w-56 h-40 absolute md:right-2 md:top-1"
            />
      </div>
    </section>
  );
};

export default Section2;

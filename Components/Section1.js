import Image from 'next/image'
import profilePic from "../public/assets/profile-pic.jpg"

const Section1 = () => {
    return(
        <section
            className="w-full h-screen md:flex"
        >
            <div
                className="w-full h-3/5 flex items-center justify-center md:pl-16 md:justify-start lg:pl-28 lg:h-lg md:w-7/10 bg-pallet1-navyBlue"
            >
                <article
                    className="w-100 lg:w-125 h-64 leading-5 p-2"
                >
                    <div>
                        <h1
                            className="font-black text-7xl md:text-6xl lg:text-7xl mb-5 text-pallet1-blueGrotto"
                        >Frontend <br/> Developer<span className="text-pallet1-babyBlue">.</span></h1>
                        <p
                            className="text-2xl md:text-xl lg:text-2xl text-pallet1-babyBlue"
                        >
                            I like to craft great web apps with great user experiences.
                        </p>
                    </div>
                </article>
            </div>
            <div
                className="w-full h-2/5 md:h-3/5 flex items-center justify-center lg:h-lg md:w-3/10 relative bg-pallet1-blueGrotto"
            >
                <div className="md:absolute md:top-20 md:-left-20  lg:top-36 lg:-left-28">
                    <img 
                        src="/assets/mat.svg" 
                        alt="mat" 
                        className="
                            hidden md:block md:w-32 md:h-32 lg:w-48 lg:h-48 absolute md:-top-12 md:-left-16 lg:-left-24 lg:-top-20
                        "
                    />
                    <img 
                        src="/assets/mat1.svg" 
                        alt="mat1" 
                        className="
                            hidden md:block absolute md:w-32 md:h-32 lg:w-48 lg:h-48 md:-bottom-16 md:-right-12 lg:-bottom-24 lg:-right-20
                        "
                    />
                    <span className="hidden md:block w-60 h-60 md:w-60 md:h-60 lg:w-80 lg:h-80 border-2 border-solid border-white absolute md:-bottom-12 md:left-8 lg:-bottom-16 lg:left-10"></span>
                    <span className="z-10 block w-60 h-60 md:w-60 md:h-60 lg:w-80 lg:h-80">
                        <Image
                            src={profilePic}
                            alt="picture of developer"
                            placeholder="blur"
                            layout="responsive"
                            priority
                        />
                    </span>

                </div>
            </div>
        </section>
    )
}

export default Section1
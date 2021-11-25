import Section1 from "../Components/Section1"
import Section2 from "../Components/Section2"
import Section3 from "../Components/Section3"
import Section4 from "../Components/Section4"

export default function Home() {
  return (
        <main
          className="w-full h-screen m-0 p-0 box-border scroll-snap-type-y-mandatory overflow-y-scroll"
        >
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </main>
  )
}

import { Card } from "../../Components/Card";

export default function Projects() {
  return (
    <section className="w-full min-h-screen flex flex-col p-10 items-center justify-start bg-pallet1-blueGrotto">
        <h1 className="text-4xl md:text-5xl font-black text-white text-center">
          Projects
        </h1>
      <section className="w-full h-max mt-5 flex flex-col items-center drop-shadow-lg">
        <Card
          imgSrc="/assets/projects/plovex-ui.png"
          title="Plovex UI"
          description="A Lightweight Front-end library for easier and faster development of Web Interfaces"
          liveLink="https://plovex-ui.netlify.app/"
          sourceLink="https://github.com/arp99/Plovex-UI/tree/development"
        />
        <Card
          imgSrc="/assets/projects/plovex-player.png"
          title="Plovex Player"
          description="A video library app for all travel enthusiasts, explore the world with these videos."
          liveLink="https://plovex-player.netlify.app/"
          sourceLink="https://github.com/arp99/plovex-player"
        />
        <Card
          imgSrc="/assets/projects/plovex-store.png"
          title="Plovex Store"
          description="An E commerce app for all fashion Enthusiasts."
          liveLink="https://plovex-store.netlify.app/"
          sourceLink="https://github.com/arp99/plovex-store"
        />
        <Card
          imgSrc="/assets/projects/quiz-mania.png"
          title="Quiz Mania"
          description="A Quiz application to test you on frontend"
          liveLink="https://plovex-quiz-mania.netlify.app/"
          sourceLink="https://github.com/arp99/quiz-mania/tree/dev"
        />
      </section>
    </section>
  );
}

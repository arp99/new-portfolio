import { Card } from "../../Components/Card";

export default function Test() {
  return (
    <section className="w-full min-h-screen flex flex-col p-10 items-center justify-start bg-pallet1-blueGrotto">
      <h1 className="text-4xl md:text-5xl font-black text-white text-center">
        Blogs
      </h1>
      <section className="w-full h-max mt-5 flex flex-col items-center drop-shadow-lg">
      <Card
          imgSrc="https://cdn.hashnode.com/res/hashnode/image/upload/v1628442954056/OHNFYAzz4.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
          title="Getting started with Formik-Part1"
          description="Forms are very important to any business application. They are a powerful tool to directly interact with the user —> used commonly to gather data about the user..."
          blogLink="https://arpanmondal.hashnode.dev/getting-started-with-formik-part1"
        />
        <Card 
            imgSrc="https://cdn.hashnode.com/res/hashnode/image/upload/v1629213727901/sPzrh9F3Z.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
            title="Getting started with Formik-Part2"
            description="Hello everyone! 👋 and welcome to part 2 of the Formik series, Before jumping to this part I hope everyone has gone through the previous part..."
            blogLink="https://arpanmondal.hashnode.dev/getting-started-with-formik-part2"
        />
        <Card 
            imgSrc="https://cdn.hashnode.com/res/hashnode/image/upload/v1637480827598/qvUr4ngLK.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
            title="What is Babel?"
            description='Hello guys, today I will talk about "Babel" which is one of the most important topics in Frontend development. Babel is a free and open-source Javascript transpiler, that converts modern...'
            blogLink="https://arpanmondal.hashnode.dev/what-is-babel"
        />
        <Card 
            imgSrc="https://cdn.hashnode.com/res/hashnode/image/upload/v1642237950200/GZsVjidl9p.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
            title="What the Hoist 🚩in Javascript ??"
            description="Introduction Before diving deep into the pool of Hoisting, let's get an overview of what it is actually Hoisting is a mechanism in javascript where..."
            blogLink="https://arpanmondal.hashnode.dev/wth-in-javascript"
        />
      </section>
    </section>
  );
}

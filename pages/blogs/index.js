import { Card } from "../../Components/Card";

export default function Test() {
  return (
    <section className="w-full min-h-screen flex flex-col p-10 items-center justify-start bg-pallet1-blueGrotto">
      <h1 className="text-4xl md:text-5xl font-black text-white text-center">
        Blogs
      </h1>
      <section className="w-full h-max mt-5 flex flex-col items-center drop-shadow-lg">
        <Card
          imgSrc="https://arpanmondal.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1628442954056%2FOHNFYAzz4.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
          title="Getting started with Formik-Part1"
          description="Forms are very important to any business application. They are a powerful tool to directly interact with the user —> used commonly to gather data about the user..."
          blogLink="https://arpanmondal.hashnode.dev/getting-started-with-formik-part1"
        />
        <Card 
            imgSrc="https://arpanmondal.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1629213727901%2FsPzrh9F3Z.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
            title="Getting started with Formik-Part2"
            description="Hello everyone! 👋 and welcome to part 2 of the Formik series, Before jumping to this part I hope everyone has gone through the previous part..."
            blogLink="https://arpanmondal.hashnode.dev/getting-started-with-formik-part2"
        />
        <Card 
            imgSrc="https://arpanmondal.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1637480827598%2FqvUr4ngLK.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
            title="What is Babel?"
            description='Hello guys, today I will talk about "Babel" which is one of the most important topics in Frontend development. Babel is a free and open-source Javascript transpiler, that converts modern...'
            blogLink="https://arpanmondal.hashnode.dev/what-is-babel"
        />
      </section>
    </section>
  );
}

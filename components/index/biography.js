import { Typewriter } from "react-simple-typewriter";

export default function Biography() {
  const biography = {
    // title: "Hey there, I'm Filipe",
    body: "I can guarantee I will make your website ",
  };

  // returnText = <div className='App'>
  //   <Typewriter />
  // </div>
  return (
    <div className="h-full border-0">
      <div className=" lg:max-w-xl">
        <h1 className="text-2xl font-black text-center text-white lg:text-4xl">
          {biography.body}
        </h1>
        <div className="mt-4 font-mono text-3xl font-thin tracking-widest text-cta lg:text-5xl dark:text-cta">
          <Typewriter
            cursor="true"
            loop="0"
            words={[
              "Responsive",
              "User Friendly",
              "Lightweight",
              "SEO Friendly",
              "Modern",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

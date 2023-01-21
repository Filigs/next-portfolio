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
    <div className="border-0">
      <div className="text-xl font-medium text-center text-white lg:text-2xl lg:max-w-xl">
        {biography.body}
        <div className="mt-4 font-mono text-3xl font-black tracking-wider text-cta lg:text-5xl dark:text-cta">
          <Typewriter
            cursor="true"
            loop="0"
            words={[
              "Responsive",
              "User Friendly",
              "Lightweight",
              "SEO Friendly",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

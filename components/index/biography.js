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
      <div className="text-2xl font-medium text-center text-white lg:text-3xl xl:text-4xl lg:max-w-xl">
        {biography.body}
        <div className="mt-4 font-mono font-black tracking-wider text-yellow-300 dark:text-yellow-300">
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

const info = {
  title: "Hey there, I'm Filipe",
  body: "Currently I'm a Junior Developer, I've been using computers for most of my life. I love being able to be a software arquitect, and working doing something you do is amazing!",
};

export default function Biography() {
  return (
    <div className="border-0">
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center items-center justify-center leading-normal pt-20 lg:pt-24 bg-light">
        <div className="rounded text-center justify-center">
          {/* name */}

          <div className="mb-8 lg:mb-10 space-y-8">
            <p className="text-3xl lg:text-4xl font-bold text-center text-zinc-900">
              {info.title}
            </p>
            <p className="text-xl lg:text-2xl font-normal text-center text-zinc-900">
              {info.body}
            </p>
          </div>
          {/* hero */}
        </div>
      </div>
    </div>
  );
}

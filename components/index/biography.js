export default function Biography() {
  const biography = {
    // title: "Hey there, I'm Filipe",
    body: "I'm Nuno Martins, I do development as a hobby for many years, and also is my job, I feel like we're going to work just well!",
  };
  return (
    <div className="border-0">
      <p className="mb-4 text-base font-medium tracking-wider text-center lg:mb-8 lg:text-2xl xl:text-3xl lg:max-w-xl">
        {"Hello there!"}
      </p>
      <p className="text-base tracking-wider text-center lg:text-lg xl:text-xl lg:max-w-xl">
        {biography.body}
      </p>
    </div>
  );
}

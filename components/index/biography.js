export default function Biography() {
  const biography = {
    // title: "Hey there, I'm Filipe",
    body: "I'm Nuno Martins, I've been a developer for many years, currently a freelancer looking for clients!",
  };
  return (
    <div className="border-0">
      <p className="text-lg tracking-wider text-center lg:text-xl xl:text-2xl lg:max-w-xl">
        {biography.body}
      </p>
    </div>
  );
}

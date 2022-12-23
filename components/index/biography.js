export default function Biography() {
  const biography = {
    // title: "Hey there, I'm Filipe",
    body: "Hi! I'm Nuno Martins, I'm 29 years old and shifting my career into a software engineer, I absolutely love technology and I really enjoy learning cutting edge technologies and self-improvement.",
  };
  return (
    <div className="border-0">
      <p className="text-base tracking-wider lg:text-lg xl:text-xl text-start lg:max-w-xl">
        {biography.body}
      </p>
    </div>
  );
}

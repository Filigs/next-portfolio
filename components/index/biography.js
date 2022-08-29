export default function Biography() {
  const biography = {
    // title: "Hey there, I'm Filipe",
    body: "Hi! I'm Nuno Martins, I'm 29 years old and shifting my career into a software engineer, I absolutely love technology and I really enjoy learning cutting edge technologies and self-improvement.",
  };
  return (
    <div className="text-dark dark:text-light border-0">
      <p className="text-md lg:text-lg xl:text-xl italic text-start lg:max-w-xl tracking-wider">
        {biography.body}
      </p>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiMoon, HiSun } from "react-icons/hi";
const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // When mounted on client, now we can show the UI
  if (!mounted) return null;
  // check theme
  function isDark() {
    return theme === "dark";
  }
  return (
    <div className="flex flex-row items-center px-8 gap-2">
      <span className="text-xl">
        {" "}
        {isDark() ? "Day Mode: " : "Night Mode: "}
      </span>
      <button
        id="switch"
        onClick={() => setTheme(isDark() ? "light" : "dark")}
        ariaLabel="Theme toggle"
        className=""
      >
        <span>{isDark() ? <HiSun size={30} /> : <HiMoon size={30} />}</span>
      </button>
    </div>
  );
};

export default ThemeSwitch;

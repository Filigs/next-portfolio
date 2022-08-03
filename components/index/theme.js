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
    <div>
      {/* <span className="font-semibold lg:text-xl">
        {" "}
        {isDark() ? "Day Mode " : "Night Mode "}
      </span> */}
      <button
        id="switch"
        onClick={() => setTheme(isDark() ? "light" : "dark")}
        aria-label="Theme toggle"
      >
        <span>
          {isDark() ? (
            <HiSun className="text-lg" />
          ) : (
            <HiMoon className="text-lg" />
          )}
        </span>
      </button>
    </div>
  );
};

export default ThemeSwitch;

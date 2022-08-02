import { HiMoon, HiSun } from "react-icons/hi";

export default function NavBar() {
  return (
    <nav className="bg-white border-zinc-200 px-4 sm:px-4 py-2.5 rounded dark:bg-zinc-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Filipe Martins
          </span>
        </div>
        <div>
          {/* <button>
            <HiMoon />
            <HiSun />
          </button> */}
        </div>
        <div>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-large font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Talk to me
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

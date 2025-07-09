"use client";

import {
  Home,
  Search,
  Heart,
  Bookmark,
  Download,
  Settings,
  X,
  Clapperboard,
  Grid2X2,
} from "lucide-react";

const icons = [Home, Grid2X2, Clapperboard, Bookmark, Download, Settings];
const titles = ["Home", "Now Playing", "Film", "Bookmark", "Download", "Setting"];
const title = [];
const colors = [
  "bg-red-100 text-red-600 border-red-300",
  "bg-yellow-100 text-yellow-600 border-yellow-300",
  "bg-green-100 text-green-600 border-green-300",
  "bg-blue-100 text-blue-600 border-blue-300",
  "bg-purple-100 text-purple-600 border-purple-300",
  "bg-pink-100 text-pink-600 border-pink-300",
];

const Menu = () => {
  return (
    <nav className="flex flex-row justify-start md:justify-center p-4 gap-4 w-full z-50 md:gap-6 overflow-x-auto">
      {icons.map((Icon, i) => (
        <div key={i} className="flex flex-col items-center">
          <button
            className={`p-3 min-w-[3rem] rounded-full border shadow-md transition-all duration-300 hover:bg-white hover:text-black ${colors[i]}`}
          >
            <Icon size={22} />
          </button>
          <span className="text-xs text-white mt-1">{titles[i]}</span>
        </div>
      ))}
    </nav>
  );
};

export default Menu;

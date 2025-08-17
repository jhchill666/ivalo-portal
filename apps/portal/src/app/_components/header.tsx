import { Github } from "lucide-react";
import HeaderTitle from "./header-title.js";

export function Header() {
  return (
    <header className="h-14 bg-white flex items-center px-4 border-b border-gray-200 shrink-0 relative z-50">
      <img src="/images/360.png" alt="360" className="h-8 w-auto mr-3" />

      <div className="flex-1">
        <HeaderTitle />
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="https://github.com/jhchill666/ivalo-demo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
          className="text-gray-500 hover:text-gray-900 transition"
        >
          <Github className="w-5 h-5" />
        </a>

        <div className="w-8 h-8 m-0 rounded-full bg-green-600 flex items-center justify-center text-gray-900 font-bold text-white">
          JH
        </div>
      </div>
    </header>
  );
}

import { Github } from "lucide-react";

export function Header() {
  return (
    <header className="h-14 bg-white flex items-center px-4 border-b border-gray-200 flex-shrink-0">
      <div className="flex-1">
        <span className="text-gray-700 font-semibold text-lg tracking-wide">
          PROMPT EXPLORER
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <a
          href="https://github.com/jhchill666/ivalo-demo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
          className="text-gray-500 hover:text-gray-900 transition"
        >
          <Github className="w-5 h-5" />
        </a>

        <div className="w-8 h-8 m-0 rounded-full bg-green-600 flex items-center justify-center text-gray-900 font-bold text-base">
          J
        </div>
      </div>
    </header>
  );
}

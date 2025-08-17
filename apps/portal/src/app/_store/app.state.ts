import { House, ListCheck, SquareChevronRight } from "lucide-react";
import { proxy } from "valtio";

export type PageColour =
  | "blob-salmon"
  | "blob-yellow"
  | "blob-green"
  | "blob-cream";

interface Page {
  route: string;
  title: string;
  bg: PageColour;
  Icon: React.ElementType;
}

export const pages: Page[] = [
  {
    route: "/",
    title: "360 Leaderboard",
    bg: "blob-green",
    Icon: House,
  },
  {
    route: "/validate",
    title: "Self Validation",
    bg: "blob-cream",
    Icon: ListCheck,
  },
  {
    route: "/prompts",
    title: "Prompt Explorer",
    bg: "blob-cream",
    Icon: SquareChevronRight,
  },
];

interface AppState {
  currentPage: string;
  pageTitle: string;

  setPage: (page: string, title: string) => void;
}

export const appState = proxy<AppState>({
  currentPage: "home",
  pageTitle: "Ivalo Portal",

  setPage: (page: string, title: string) => {
    appState.currentPage = page;
    appState.pageTitle = title;
  },
});

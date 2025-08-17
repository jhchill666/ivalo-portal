import { House, Leaf, Trophy } from "lucide-react";
import { proxy } from "valtio";

export type PageColour =
  | "blob-salmon"
  | "blob-yellow"
  | "blob-green"
  | "blob-cream";

interface Page {
  route: string;
  title: string;
  shortTitle?: string;
  bg: PageColour;
  Icon: React.ElementType;
  opacity?: number;
}

export const pages: Page[] = [
  {
    route: "/",
    title: "360 Sustainability",
    bg: "blob-green",
    Icon: House,
    opacity: 0.3,
  },
  {
    route: "/questionnaire",
    title: "Questionnaire for Brand Partners",
    shortTitle: "Questionnaire",
    bg: "blob-cream",
    Icon: Leaf,
  },
  {
    route: "/leaderboard",
    title: "360 Leaderboard",
    bg: "blob-green",
    Icon: Trophy,
  },
];

interface AppState {
  currentPage: string;
  pageTitle: string;
}

export const appState = proxy<AppState>({
  currentPage: "home",
  pageTitle: "Ivalo Portal",
});

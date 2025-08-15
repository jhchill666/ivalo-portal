import { House, ListCheck, SquareChevronRight } from "lucide-react";
import { proxy } from "valtio";

interface Page {
  route: string;
  title: string;
  Icon: React.ElementType;
}

export const pages: Page[] = [
  {
    route: "/",
    title: "Ivalo Portal",
    Icon: House,
  },
  {
    route: "/results",
    title: "Validated Results",
    Icon: ListCheck,
  },
  {
    route: "/prompts",
    title: "Prompt Explorer",
    Icon: SquareChevronRight,
  },
];

interface AppState {
  currentPage: string;
  pageTitle: string;

  setPage: (page: string, title: string) => void;
}

export const appStore = proxy<AppState>({
  currentPage: "home",
  pageTitle: "Ivalo Portal",

  setPage: (page: string, title: string) => {
    appStore.currentPage = page;
    appStore.pageTitle = title;
  },
});

import { Inter, Poppins } from "next/font/google";

// const leagueSpartan = League_Spartan({
//     weight: ["700", "800"],
//     subsets: ["latin"],
//     display: "swap",
//   });

export const bodyFont = Inter({ subsets: ["latin"], variable: "--font-body" });

export const displayFont = Poppins({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
});

import { League_Spartan } from "next/font/google";
import { Sidebar } from "./_components/sidebar.jsx";
import { Header } from "./_components/header.jsx";

import "./global.css";

const leagueSpartan = League_Spartan({
  weight: ["700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ivalo Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${leagueSpartan.className} antialiased min-h-screen bg-white text-gray-900 transition-colors duration-200`}
      >
        <div className="flex h-screen bg-white text-gray-900 ">
          <Sidebar />

          <div className="flex-1 flex flex-col overflow-x-hidden">
            <Header />
            <main
              className={`flex-1 overflow-y-auto py-6 transition-all duration-300 ease-in-out bg-gray-50`}
            >
              <div className="max-w-7xl mx-auto px-4 px-8 w-full">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

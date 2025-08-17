import { Header } from "./_components/header.js";
import { Sidebar } from "./_components/sidebar.js";

import BlobBackground from "./_components/blob-background.js";
import { bodyFont, displayFont } from "./_theme/fonts.js";
import "./_theme/global.css";

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
        className={`${bodyFont.className} antialiased min-h-screen bg-white text-gray-900 transition-colors duration-200`}
        style={
          {
            "--font-display": displayFont.style.fontFamily,
          } as React.CSSProperties
        }
      >
        <div className="flex h-screen bg-white text-gray-900 relative z-20">
          <Sidebar />

          <div className="flex-1 flex flex-col overflow-x-hidden relative z-20">
            <Header />
            <main
              className={`flex-1 overflow-y-auto py-6 transition-all duration-300 ease-in-out bg-gray-50 relative bg-white`}
            >
              <BlobBackground />

              <div className="max-w-7xl mx-auto px-4 px-8 w-full relative z-10">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

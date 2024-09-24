import "./globals.css";
import { IBM_Plex_Mono, Figtree } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header";

const mono = IBM_Plex_Mono({
  weight: "300",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});
const poly = Figtree({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-figtree",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${mono.variable} ${poly.variable}`}
      suppressHydrationWarning
    >

      <body><ThemeProvider attribute="class">
        <div className="flex overflow-x-hidden relative flex-col justify-start items-center h-screen text-black transition-all dark:text-neutral-200">
          <div className="flex justify-center items-center px-2 mt-4 w-screen max-w-screen-2xl">
            <Header />
          </div>
          {children}
        </div></ThemeProvider>
      </body>

    </html>
  );
}

export const metadata = {
  title: "natalie's website",
  // good description for seo
  description: " ",
};
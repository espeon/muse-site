import "./globals.css";
import { IBM_Plex_Mono, Figtree } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import BreakpointDisplay from "@/components/breakpointDisplay";

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
      <body>
        <ThemeProvider attribute="class">
          <BreakpointDisplay />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "natalie's website",
  // good description for seo
  description: " ",
};

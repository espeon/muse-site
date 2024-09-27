import Header from "@/components/header";
import Footer from "@/components/footer";
import "./blog.css"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div className="flex overflow-x-hidden relative flex-col justify-start items-center h-screen text-neutral-800 transition-all dark:text-neutral-200">
        <div className="sticky top-0 flex justify-center items-center px-2 pt-4 w-screen fade-bottom-10 py-6 bg-gradient-to-bl from-slate-400 dark:from-slate-950/50 via-transparent to-transparent">
          <Header />
        </div>
        {children}
          <Footer />

      </div>
    );
  }
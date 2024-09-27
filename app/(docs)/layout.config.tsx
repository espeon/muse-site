import { HomeLayoutProps } from "fumadocs-ui/home-layout";
import Home from "../(main)/page";
import Header from "@/components/header";

const HomeComponent = <div>Custom home component</div>;

export const baseOptions: HomeLayoutProps = {
  githubUrl: "https://github.com/espeon/muse",
  nav: {
    title: "muse audio docs",
    url: "/docs",
  },
};

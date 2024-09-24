import Card from "@/components/card";
import Header from "@/components/header";
import Link from "next/link";
import { LuAppWindow, LuChevronRight, LuComputer, LuGlobe, LuKey, LuServer } from "react-icons/lu";

export default function Home() {
  return (
    <>
      <div className="absolute self-center items-center w-screen max-w-screen-2xl h-[55rem] -z-30">
        <Blob6 />
        <Blob7 />
        <Blob8 />
        <Blob9 />
        <Blob10 />
      </div>
      <div className="fade-bottom-10 absolute self-center items-center w-screen max-w-full h-[65rem] bg-gradient-to-bl from-slate-400 dark:from-slate-950 via-transparent -z-10" />
      <div className="w-screen lg:h-screen max-w-full h-full md:max-h-[55rem] mt-24 md:mt-0 flex flex-row lg:flex-col justify-center items-center pointer-events-none">
        <div className="flex flex-row justify-center items-center w-screen max-w-screen-2xl h-2/3 md:h-screen lg:flex-col">
          <div className="flex flex-col justify-center md:justify-between align-center md:flex-row">
            <div className="flex flex-col justify-center items-start ml-4 lg:w-1/2">
              <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
                Your <br /> <span className="text-wisteria-500">personal</span>{" "}
                <br /> music platform
              </h1>
              <p className="mt-4 lg:w-[32rem] lg:text-lg text-neutral-800 dark:text-neutral-500">
                Build your own music server and stream your personal music
                collection from any device*, with full control over how and
                where you listen.
              </p>
              <div className="gap-2 mt-4 text-lg">
                <Link
                  className="p-2 pl-4 rounded-full bg-wisteria-400 dark:bg-wisteria-700"
                  href="https://github.com/espeon/muse"
                >
                  Deploy <LuChevronRight className="inline mb-1" />
                </Link>
                <Link
                  className="px-4 py-2"
                  href="https://github.com/espeon/muse/wikis"
                >
                  Docs
                </Link>
              </div>
            </div>
            <div className="flex flex-col h-full md:h-[50rem] pointer-events-none lg:w-full justify-center md:-mr-96 lg:flex-1 rounded-xl px-4 pt-12 lg:px-0 lg:pt-0">
              <img
                className="object-contain object-center rounded-xl"
                src="https://i.imgur.com/srqAqBc.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-32 mb-12 w-1/3 border-t border-neutral-500/75" />
      <div className="flex flex-col justify-start items-center p-4 w-screen max-w-screen-xl h-screen">
        <h2 className="mb-12 text-4xl">Why use Muse?</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <LuServer className="mb-2 text-5xl" />
            <h3 className="text-xl font-semibold">Self-Hosted Freedom</h3>
            <p>
              Your music, your server. No subscriptions, no limits. Set up once
              and enjoy seamless streaming across all your devices.
            </p>
          </Card>{" "}
          <Card>
            <LuAppWindow className="mb-2 text-5xl" />
            <h3 className="text-xl font-semibold">
              Simple, Intuitive Interface
            </h3>
            <p>
              Effortless browsing, beautiful playback. Muse has
              a clean and minimal design that lets you focus on your music,
              without any distractions.
            </p>
          </Card>{" "}
          <Card>
            <LuGlobe className="mb-2 text-5xl" />
            <h3 className="text-xl font-semibold">Stream from Anywhere</h3>
            <p>
              Whether you’re at home, commuting, or traveling, access your music
              library with just a browser. Listen from any device with a web
              browser - mobile, desktop, tablet.
            </p>
          </Card>{" "}
          <Card>
            <LuKey className="mb-2 text-5xl" />
            <h3 className="text-xl font-semibold">Privacy & Security</h3>
            <p>
            Your music stays with you. No third-party services, no data tracking—just you and your music.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

const Blob6 = () => (
  <svg
    className="absolute top-1/4 left-1/4 w-52 h-52 text-red-300 opacity-70 mix-blend-multiply filter blur-3xl dark:text-red-900 -z-20 animate-blob animation-delay-4000"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M44.3,-76.5C55.9,-69.1,63.1,-54.3,69.9,-39.7C76.7,-25.1,83,-10.7,83.6,4.1C84.1,18.9,78.9,34.1,70.1,46.8C61.3,59.5,49,69.7,35,76.5C21,83.3,5.3,86.7,-10.2,85.3C-25.7,83.9,-41,77.7,-54.6,68.5C-68.2,59.3,-80.2,47.1,-86.7,32.1C-93.2,17.2,-94.3,-0.4,-90.1,-16.3C-85.8,-32.2,-76.3,-46.3,-63.9,-56.9C-51.5,-67.5,-36.3,-74.5,-21.2,-77.6C-6.1,-80.7,8.9,-79.9,23.4,-77.3C37.9,-74.7,51.8,-70.3,44.3,-76.5Z"
      transform="translate(100 100)"
    />
  </svg>
);

const Blob7 = () => (
  <div className="absolute right-1/4 bottom-3/4 w-80 h-80 rounded-full opacity-70 mix-blend-multiply filter blur-3xl bg-wisteria-300 dark:bg-wisteria-800 animate-blob"></div>
);

const Blob8 = () => (
  <svg
    className="absolute top-12 left-1/4 w-56 h-56 opacity-70 mix-blend-multiply filter blur-3xl text-slate-300 dark:text-slate-900 animate-blob animation-delay-2000"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M39.9,-67.1C52.6,-60.3,64.4,-51.2,72.8,-39C81.2,-26.8,86.1,-11.5,85.9,3.8C85.6,19,80.2,34.2,71.1,46.7C62,59.2,49.3,69,35.5,75.3C21.7,81.6,6.9,84.5,-8.6,83.8C-24.1,83.1,-40.2,78.9,-53.9,70.5C-67.6,62.2,-78.9,49.7,-84.6,35.1C-90.3,20.5,-90.5,3.8,-87.3,-12.1C-84.2,-28,-77.7,-43.1,-67.1,-54.7C-56.5,-66.3,-41.8,-74.3,-27.4,-77.7C-12.9,-81.1,1.3,-79.8,14.7,-75.8C28.1,-71.8,40.8,-65,39.9,-67.1Z"
      transform="translate(100 100)"
    />
  </svg>
);

const Blob9 = () => (
  <div className="absolute left-10 top-1/4 w-72 h-72 bg-teal-500 rounded-full opacity-70 mix-blend-multiply filter blur-3xl dark:bg-teal-900 animate-blob animation-delay-4000"></div>
);

const Blob10 = () => (
  <svg
    className="absolute bottom-14 left-1/3 w-64 h-64 text-pink-300 opacity-70 mix-blend-multiply filter blur-3xl dark:text-pink-950 animate-blob"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M45.3,-77.5C58.9,-70.3,70.3,-58.4,79.2,-44.3C88.1,-30.3,94.5,-14.1,93.1,1.3C91.7,16.7,82.5,31.4,71.8,44.1C61.1,56.8,49,67.5,35,74.8C21,82.1,5.2,86,-10.6,84.9C-26.4,83.8,-42.1,77.7,-55.5,68.1C-68.9,58.5,-79.9,45.4,-85.5,30.1C-91.1,14.8,-91.3,-2.6,-87.1,-18.7C-82.9,-34.8,-74.4,-49.5,-62.1,-59.1C-49.8,-68.7,-33.8,-73.2,-18.7,-76.3C-3.5,-79.4,10.8,-81.1,25.1,-79.9C39.5,-78.7,53.9,-74.6,45.3,-77.5Z"
      transform="translate(100 100)"
    />
  </svg>
);

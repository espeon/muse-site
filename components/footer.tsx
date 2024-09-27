import React from 'react';
import { PiDiscordLogo, PiGithubLogo } from 'react-icons/pi';
import { RiDiscordLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="fade-top-10 py-6 w-screen bg-gradient-to-tr from-slate-400 dark:from-slate-950/30 via-transparent">
      <div className="container mx-auto flex flex-col justify-between items-center align-middle px-8 gap-4 max-w-screen-2xl">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} <a className="text-blue-800 dark:text-blue-300" href="https://natalie.sh?ref=muse">natalie b.</a> MIT Licensed.
        </div>

        <div className="flex space-x-4 text-2xl text-blue-800 dark:text-blue-300">
          <a href="https://github.com/espeon/muse" rel="noopener noreferrer" className="hover:text-gray-400">
            <PiGithubLogo />
          </a>
          <a href="https://discord.gg/hTxq5jD9h8"rel="noopener noreferrer" className="hover:text-gray-400">
            <RiDiscordLine />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
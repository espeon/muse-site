import Link from "next/link";
import { ColorToggle } from "./mode-toggle";
import clsx from "clsx";
import { HTMLAttributes } from "react";
import HeaderLink from "./headerLink";
import { IconButton } from "./iconButton";
import { LuCommand } from "react-icons/lu";

const links = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/blog", label: "Blog", alsoMatch: ["/posts"] },
];

export default function Header(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "transition-all duration-500 w-full px-8",
        props.className,
      )}
      {...props}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex gap-2">
          {links.map((link) => (
            <HeaderLink key={link.href} {...link} />
          ))}
        </div>
        <div className="flex gap-2">
          <IconButton
            Icon={LuCommand}
            className="hidden text-gray-500 bg-neutral-300 dark:text-gray-500 dark:bg-neutral-700"
            disabled
          />
          <ColorToggle />
        </div>
      </div>
    </div>
  );
}
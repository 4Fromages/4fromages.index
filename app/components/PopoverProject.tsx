"use client";

import { Dropdown } from "flowbite-react";
import { IoIosLink } from "react-icons/io";
import { RiBlueskyLine, RiGithubLine  } from "react-icons/ri";

export function DropdownLink() {
  return (
    <Dropdown className="p-0 m-0 border-none bg-none" dismissOnClick={true} renderTrigger={() =>
      <div className="rounded-full cursor-pointer gap-2 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
        <IoIosLink/>
        <p>Our links</p>
      </div>
    }>
      <Dropdown.Item className="cursor-pointer border-black/[.08] dark:border-white/[.145] flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a]" icon={RiBlueskyLine} as="a" href="https://bsky.app/profile/4fromages.fr" target="_blank">Bluesky</Dropdown.Item>
      <Dropdown.Item className="cursor-pointer border-black/[.08] dark:border-white/[.145] flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a]" icon={RiGithubLine } as="a" href="https://github.com/4Fromages" target="_blank">GitHub</Dropdown.Item>
      {/* <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item> */}
    </Dropdown>
  );
}

// https://upload.wikimedia.org/wikipedia/commons/7/7a/Bluesky_Logo.svg
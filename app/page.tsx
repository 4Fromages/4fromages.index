import Image from "next/image";
import { DropdownLink } from "./components/PopoverProject";
import { IoMailOutline } from "react-icons/io5";
import { SiFusionauth } from "react-icons/si";
import TextFlip from "./components/TextFlip";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-24 sm:p-20 font-[family-name:var(--font-space-mono)]">
      <main className="flex flex-col gap-24 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/4fromages.svg"
          alt="4Fromages logo"
          width={180}
          height={38}
          priority
        />
        <div className="-mt-28">
          <TextFlip/>
        </div>
        <div className="flex gap-6 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-[20px] h-[20px] dark:invert text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clipRule="evenodd" />
            </svg>
            Our team
          </a>
          <DropdownLink />
        </div>
      </main>
      <footer className="row-start-3">
        <div className="flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://auth.4fromages.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiFusionauth />
            Your account
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://mail.4fromages.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMailOutline />
            Mail server
          </a>
          {/* <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org
          </a> */}
        </div>
        <hr className=" mt-6 mx-6" />
        <div className="flex gap-12 mt-6 flex-wrap items-center justify-center">
          <p className="text-sm text-center sm:text-left">
            &copy;{new Date().getFullYear()} - 4Fromages
          </p>
          <p className="text-sm text-center sm:text-left">
            Made with <a target="_blank" className="underline" href="https://nextjs.org/">NextJS</a> and <a target="_blank" className="underline" href="https://flowbite.com/">Flowbite</a>/<a target="_blank" className="underline" href="https://tailwindcss.com/">TailwindCSS</a> &lt;3
          </p>
        </div>
      </footer>
    </div>
  );
}

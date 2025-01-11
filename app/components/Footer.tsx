import { IoMailOutline } from "react-icons/io5";
import { SiFusionauth } from "react-icons/si";

export default function Footer() {
    return (
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
    )

}
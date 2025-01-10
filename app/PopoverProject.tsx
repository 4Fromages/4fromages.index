import { Fragment } from 'react'
import Image from 'next/image'

const solutions = [
    {
        name: 'Bluesky',
        description: 'Our profile on Bluesky',
        href: 'https://bsky.app/profile/4fromages.fr',
        icon: IconOne,
    },
    //   {
    //     name: 'Automations',
    //     description: 'Create your own targeted content',
    //     href: '##',
    //     icon: IconTwo,
    //   },
    //   {
    //     name: 'Reports',
    //     description: 'Keep track of your growth',
    //     href: '##',
    //     icon: IconThree,
    //   },
]

export default function PopoverProject() {
    return (
        <div>
            <button data-popover-target="popover-click" data-popover-trigger="click" type="button"
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            >
                Our links
            </button>

            <div data-popover id="popover-click" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Popover click</h3>
                </div>
                <div className="px-3 py-2">
                    <p>And here's some amazing content. It's very engaging. Right?</p>
                </div>
                <div data-popper-arrow></div>
            </div>
        </div>
    )
}

function IconOne() {
    return (
        <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Bluesky_Logo.svg/1200px-Bluesky_Logo.svg.png"
            alt="Bluesky logo"
            width={48}
            height={48}
        />
    )
}

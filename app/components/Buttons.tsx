"use client";

import Link from 'next/link'
import Image from 'next/image'

export function ReversedButton(
    props: {
        href: string,
        text: string,
        reversed?: boolean,
        target?: "_self" | "_blank" | "_parent" | "_top",
    }
) {
    const { href, text, reversed, target = "_self" } = props;
    return (
        <Link
            href={href}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            target={target}
            rel="noopener noreferrer"
        >
            {text}
        </Link>
    );
}

export function HomeIcon() {
    return (
        <Link
            href="/"
            rel="noopener noreferrer"
            replace
        >
            <Image
                className="dark:invert"
                src="/4fromages.svg"
                alt="4Fromages logo"
                width={180}
                height={38}
                priority
            />
        </Link>
    );
}
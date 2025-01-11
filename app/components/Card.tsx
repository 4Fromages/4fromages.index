import { Card } from "flowbite-react";
import Image from "next/image";
import { Suspense } from "react";
import membersData from "@/lib/members.json";
import { ReversedButton } from "./Buttons";
import type { CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme['card'] = {
    root: {
        "base": "rounded-xl max-w-lg h-full cursor-pointer gap-2 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent",
        "children": "flex h-fill flex-col justify-center gap-4 p-6",
        "horizontal": {
            "off": "flex-col",
            "on": "flex-col md:max-w-xl md:flex-row"
        },
        "href": "hover:bg-gray-100 dark:hover:bg-gray-700"
    },
    "img": {
        "base": "",
        "horizontal": {
            "off": "rounded-t-lg",
            "on": "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        }
    }

};

export function MemberCard(props: { name: string }) {
    const member = membersData.members.find(
        (m) => m.name.firstname.toLowerCase() === props.name.toLowerCase()
    );

    if (!member) {
        return (
            <Card className="max-w-sm">
                <div className="flex flex-col items-center pb-10">
                    <h5 className="mb-1 text-xl font-medium">
                        Membre introuvable
                    </h5>
                    <span className="text-sm">
                        Le prénom "{props.name}" ne correspond à aucun membre.
                    </span>
                </div>
            </Card>
        );
    }

    return (
        <Card theme={customTheme}>
            <div className="flex flex-col items-center py-8">
                <Suspense fallback={<p>Loading...</p>}>
                    <Image
                        alt={`${member.name.pseudo} GitHub profile picture`}
                        height="96"
                        src={`${member.github}.png`}
                        width="96"
                        className="mb-3 rounded-full shadow-lg"
                    />
                </Suspense>

                <h5 className="mb-1 text-xl font-medium underline-offset-4 underline">
                    {member.name.pseudo}
                </h5>
                <span className="text-sm text-justify">
                    {member.description || "4Fromages developper."}
                </span>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                    <ReversedButton href={member.github} text="GitHub" reversed />
                    <ReversedButton href={`mailto:${member.email}`} text="Email" target="_blank" />
                </div>
            </div>
        </Card>
    );
}

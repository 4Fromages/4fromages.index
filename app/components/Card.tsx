import { Card } from "flowbite-react";
import Image from "next/image";
import Link from 'next/link'
import { Suspense } from "react";
import membersData from "@/lib/members.json";
import { ReversedButton } from "./Buttons";

export function MemberCard(props: { name: string }) {
    const member = membersData.members.find(
        (m) => m.name.firstname.toLowerCase() === props.name.toLowerCase()
    );

    if (!member) {
        return (
            <Card className="max-w-sm">
                <div className="flex flex-col items-center pb-10">
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        Membre introuvable
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Le prénom "{props.name}" ne correspond à aucun membre.
                    </span>
                </div>
            </Card>
        );
    }

    return (
        <Card className="max-w-sm h-full">
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

                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {member.name.pseudo}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    {member.description || "4Fromages developper."}
                </span>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                    <ReversedButton href={member.github} text="GitHub" reversed/>
                    <ReversedButton href={`mailto:${member.email}`} text="Email" target="_blank"/>
                </div>
            </div>
        </Card>
    );
}

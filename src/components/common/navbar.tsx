import Image from "next/image";

import logo from "@/images/Logo_horizon.png"
import { MdNotifications } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

type NavbarItem = {
    id: string;
    route: string;
    caption: string;
}

interface NavbarProps {
    items: NavbarItem[];
}

export function Navbar({ items }: NavbarProps) {
    return (
        <div className="flex flex-row items-center gap-4 w-full px-4 py-2 bg-scheduler-400">
            <div className="w-32 h-auto">
                <Image 
                    src={logo}
                    alt="Scheduler logo"
                    height={50}
                    width={200}
                />
            </div>
            <div className="flex-1 flex flex-row gap-2">
                { items.map((item) => {
                    return (
                        <Link
                            key={`navbar-item-${item.id}`}
                            href={item.route}
                            className="px-2 py-1 rounded-md hover:bg-scheduler-500"
                        >
                            <span className="text-base text-white font-normal">
                                { item.caption }
                            </span>
                        </Link>
                    );
                }) }
            </div>
            <div className="flex flex-row gap-2">
                <button
                    type="button"
                    className="p-2 rounded-md hover:bg-scheduler-500"
                >
                    <MdNotifications size={20} color="white" />
                </button>
                <button
                    type="button"
                    className="p-2 rounded-md hover:bg-scheduler-500"
                >
                    <div className="flex flex-row gap-2 items-center">
                        <FaChevronDown size={10} color="white"/>
                        <div className="min-w-6 min-h-6 rounded-full bg-white">

                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
}
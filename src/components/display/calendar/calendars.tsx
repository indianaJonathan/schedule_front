import { Calendar } from "@/lib/types";
import Link from "next/link";
import { Card } from "../common/card";
import { FaCalendar, FaCaretSquareLeft, FaCaretSquareRight, FaPlus } from "react-icons/fa";
import { formatDate } from "@/utils/date";
import { MdOutlineUpdate } from "react-icons/md";

interface CalendarsDisplayProps {
    title: string;
    calendars: Calendar[];
    canAdd?: boolean;
}

export function CalendarsDisplay({ title, calendars, canAdd = false }: CalendarsDisplayProps) {
    return (
        <div className="flex flex-col gap-4">
            <span className="text-2xl font-semibold">
                { title }
            </span>
            <div className="flex flex-row gap-2">
                { canAdd &&
                    <div className="flex flex-row items-center justify-center h-full min-h-[105px] w-16 bg-scheduler-200 rounded-md">
                        <FaPlus size={20} color="white" />
                    </div>
                }
                { calendars.length > 0 && calendars.map((calendar) => {
                    return (
                    <Link
                        key={calendar.id}
                        href={`/calendars/${calendar.id}`}
                    >
                        <Card title={calendar.name}>
                            <div className="flex-1 flex flex-col w-full p-2">
                                <div className="flex flex-row items-center justify-between">
                                    <FaCaretSquareLeft size={18} className="text-scheduler-200" />
                                    <span className="text-scheduler-50 font-light text-sm">
                                        { calendar.events.length > 0 ? formatDate(calendar.events.sort((a, b) => { return a.startDate > b.startDate ? 1 : -1 })[0].startDate) : '-' }
                                    </span>
                                </div>
                                <div className="flex flex-row items-center justify-between">
                                    <FaCaretSquareRight size={18} className="text-scheduler-200" />
                                    <span className="text-scheduler-50 font-light text-sm">
                                        { calendar.events.length > 0 ? formatDate(calendar.events.sort((a, b) => { return a.startDate > b.startDate ? 1 : -1 })[0].startDate) : '-' }
                                    </span>
                                </div>
                                <div className="flex flex-row gap-4 items-center justify-between">
                                    <div className="flex flex-row gap-2 items-center">
                                        <FaCalendar size={18} className="text-scheduler-200" />
                                        <span className="text-scheduler-50 font-light text-sm">
                                            { calendar.events.length }
                                        </span>
                                    </div>
                                    <div className="flex flex-row gap-2 items-center truncate">
                                        <MdOutlineUpdate size={18} className="text-scheduler-200" />
                                        <span className="text-scheduler-50 font-light text-sm truncate">
                                            { formatDate(calendar.updatedAt) }
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Link>
                    );
                }) }
                { calendars.length === 0 && 
                    <div className="flex-1 flex flex-row items-center justify-center">
                        <span className="text-sm text-scheduler-200 italic">
                            Não há calendários para mostrar
                        </span> 
                    </div>
                }
            </div>
        </div>
    );
}
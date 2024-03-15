"use client"

import { useParams } from "next/navigation";

import { getCalendarById } from "@/utils/data";
import { CalendarComponent } from "@/components/calendar/calendar";
import { FaInfoCircle, FaPlay, FaPlus, FaStop } from "react-icons/fa";
import { Card } from "@/components/display/common/card";
import { formatDate } from "@/utils/date";
import { IoPersonSharp } from "react-icons/io5";

export default function Calendar() {
    const { id } = useParams();
    const calendar = getCalendarById(id.toString());

    if (!calendar) return;

    return (
        <main className="flex-1 flex flex-col justify-start py-8">
            <div className="flex-1 flex flex-row w-full">
                <div className="flex-1 flex flex-col px-96 w-full">
                    <CalendarComponent calendar={calendar}/>
                </div>
                <div className="min-h-full max-w-px w-px bg-scheduler-300" />
                <div className="flex flex-col gap-4 px-8">
                    <div className="flex flex-row items-center justify-center min-w-[105px] h-16 bg-scheduler-200 rounded-md">
                        <FaPlus size={20} color="white" />
                    </div>
                    { calendar.events.length > 0 && calendar.events.map((event) => {
                        return (
                            <Card
                                key={`event-${event.id}`}
                                title={event.name}
                            >
                                <div className="flex flex-col gap-2 p-2">
                                    <div className="flex flex-row justify-between">
                                        <FaPlay size={18} className="text-scheduler-300" />
                                        <span className="text-scheduler-200 font-light text-sm">
                                            { formatDate(event.startDate) }
                                        </span>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <FaStop size={18} className="text-scheduler-300" />
                                        <span className="text-scheduler-200 font-light text-sm">
                                            { formatDate(event.endDate) }
                                        </span>
                                    </div>
                                    <div className="flex flex-row justify-between gap-4">
                                        <div className="flex flex-row gap-2">
                                            <IoPersonSharp size={18} className="text-scheduler-300" />
                                            <span className="text-scheduler-200 font-light text-sm">
                                                { event.participants.length }
                                            </span>
                                        </div>
                                        <div className="flex flex-row gap-2 items-center">
                                            <FaInfoCircle size={18} className="text-scheduler-300" />
                                            <span className="text-scheduler-200 font-light text-sm">
                                                { event.status }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        );
                    }) }
                </div>
            </div>
        </main>
    );
}

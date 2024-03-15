"use client"

import { FormEvent, useState } from "react";

import { Day } from "./day";

import { formatMonth } from "@/utils/date";
import { Calendar } from "@/lib/types";
import { IoMdLink, IoMdPersonAdd, IoMdSettings } from "react-icons/io";
import Link from "next/link";
import { FaLock, FaUnlock } from "react-icons/fa";

interface CalendarProps {
    calendar: Calendar
}

export function CalendarComponent({ calendar }: CalendarProps) {
    const [date, setDate] = useState<Date>(new Date());
    const daysInThisMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const weekDayStart = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const weekDayEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    function handleMonthChange(e: FormEvent<HTMLInputElement>) {
        const selectedDate = new Date(e.currentTarget.value);
        setDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1));
    }

    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold text-scheduler-50">
                            { calendar.name }
                        </span>
                        <span className="text-base font-light text-scheduler-200 max-w-1/2 truncate">
                            { calendar.description }
                        </span>
                    </div>
                    <div
                        className="flex flex-row gap-2 h-fit"
                    >
                        <Link
                            href={`/`}
                            className="flex flex-row items-center p-2 rounded-md hover:bg-scheduler-600"
                        >
                            <IoMdLink size={20} color="white" />
                        </Link>
                        <Link
                            href={`/`}
                            className="flex flex-row items-center p-2 rounded-md hover:bg-scheduler-600"
                        >
                            <IoMdSettings size={20} color="white" />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <button
                        type="button"
                        className="px-2 py-1 rounded-md hover:bg-scheduler-600"
                    >
                        <span className="text-scheduler-50 underline font-normal text-sm">
                            Participantes ({calendar.participants.length})
                        </span>
                    </button>
                    <button
                        type="button"
                        className="flex flex-row justify-between gap-4 items-center p-2 rounded-md bg-scheduler-blue-500"
                    >
                        <IoMdPersonAdd size={20} color="white" />
                        <span className="text-scheduler-50 w-full text-center">
                            Convidar
                        </span>
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-2 bg-scheduler-400 p-4 rounded-md">
                <input
                    type="month"
                    className="bg-scheduler-500 w-full text-center select-none [color-scheme:dark]"
                    min={`${formatMonth(calendar.startDate)}`}
                    max={`${formatMonth(new Date(new Date().getFullYear(), new Date().getMonth() + 2))}`}
                    value={`${formatMonth(new Date(date.getFullYear(), date.getMonth()))}`}
                    onChange={handleMonthChange}

                />
                <div className="grid grid-cols-7 gap-2 w-full">
                    <span className="text-center w-full bg-scheduler-600 text-white rounded-t-md py-1">Dom</span>
                    <span className="text-center w-full bg-scheduler-600 text-white rounded-t-md py-1">Seg</span>
                    <span className="text-center w-full bg-scheduler-600 text-white rounded-t-md py-1">Ter</span>
                    <span className="text-center w-full bg-scheduler-600 text-white rounded-t-md py-1">Qua</span>
                    <span className="text-center w-full bg-scheduler-600 text-white rounded-t-md py-1">Qui</span>
                    <span className="text-center w-full bg-scheduler-600 text-white rounded-t-md py-1">Sex</span>
                    <span className="text-center w-full bg-scheduler-600 text-white rounded-t-md py-1">Sab</span>
                </div>
                <div className="grid grid-cols-7 gap-2 w-full">
                { Array.from({ length: weekDayStart }).map((d, index) => {
                    return (
                        <Day
                            key={`empty-before-${index}`}
                            content=""
                        />
                    );
                }) }
                { Array.from({ length: daysInThisMonth }).map((d, index) => {
                    return (
                    <Day
                        key={`month-day-${index}`}
                        content={`${index + 1}`}
                    />
                    );
                }) }
                { Array.from({ length: 6 - weekDayEnd }).map((d, index) => {
                    return (
                        <Day
                            key={`empty-after-${index}`}
                            content=""
                        />
                    );
                }) }
                </div>
            </div>
            <div className="flex flex-row gap-4">
                <button
                    type="button"
                    className="bg-scheduler-red rounded-md flex-1 flex flex-row items-center p-2"
                >
                    <FaLock size={18} />
                    <span className="w-full text-center">
                        Travar calendário
                    </span>
                </button>
                <button
                    type="button"
                    className="bg-scheduler-yellow rounded-md flex-1 flex flex-row items-center p-2"
                >
                    <FaUnlock size={18} />
                    <span className="w-full text-center">
                        Travar calendário temporariamente
                    </span>
                </button>
            </div>
        </div>
    );
}
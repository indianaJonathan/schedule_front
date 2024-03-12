"use client"

import { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Day } from "@/components/calendar/day";

export default function Calendar() {
    const months = [
        {
            value: 0,
            description: "Janeiro",
        },
        {
            value: 1,
            description: "Fevereiro",
        },
        {
            value: 2,
            description: "Março",
        },
        {
            value: 3,
            description: "Abril",
        },
        {
            value: 4,
            description: "Maio",
        },
        {
            value: 5,
            description: "Junho",
        },
        {
            value: 6,
            description: "Julho",
        },
        {
            value: 7,
            description: "Agosto",
        },
        {
            value: 8,
            description: "Setembro",
        },
        {
            value: 9,
            description: "Outubro",
        },
        {
            value: 10,
            description: "Novembro",
        },
        {
            value: 11,
            description: "Dezembro",
        }
    ]

    const params = useSearchParams();
    const dateParam = params.get('date');
    const parsedDate = dateParam!.split("-");
    const [date, setDate] = useState<Date>(new Date(Number.parseInt(parsedDate[0]), Number.parseInt(parsedDate[1]) - 1, Number.parseInt(parsedDate[2])));
    const daysInThisMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const weekDayStart = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const weekDayEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    const [startDate, setStartDate] = useState<Date>();
    const [endDate, setEndDate] = useState<Date>();

    function handleClick(day: number) {
        if (!startDate) return setStartDate(new Date(date.getFullYear(), date.getMonth(), day));
        if (!endDate) return setEndDate(new Date(date.getFullYear(), date.getMonth(), day));
        setStartDate(undefined);
        setEndDate(undefined);
    }

    function handleMonthChange(e: ChangeEvent<HTMLSelectElement>) {
        setDate(new Date(date.getFullYear(), Number.parseInt(e.target.value), 1));
    }

    useEffect(() => {}, [date]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <span className="text-2xl font-bold">{months.find((month) => month.value === date.getMonth())?.description}</span>
            <select name="months" id="months" className="bg-zinc-600" onChange={handleMonthChange}>
                { months.map((month) => {
                    return (
                        <option key={`month-${month.value}`} value={month.value} className="text-zinc-100">
                            {month.description}
                        </option>
                    );
                }) }
            </select>
            <div className="w-1/2">
                <div className="grid grid-cols-7 gap-2 w-full">
                <span className="text-center">Dom</span>
                <span className="text-center">Seg</span>
                <span className="text-center">Ter</span>
                <span className="text-center">Qua</span>
                <span className="text-center">Qui</span>
                <span className="text-center">Sex</span>
                <span className="text-center">Sab</span>
                </div>
                <div className="grid grid-cols-7 gap-2 w-full">
                { Array.from({ length: weekDayStart }).map((d, index) => {
                    return (
                    <div key={index} className="flex flex-row justify-center w-full">
                        <div className="rounded-full min-h-12 bg-zinc-500 min-w-12 max-w-12">
                        
                        </div>
                    </div>
                    );
                }) }
                { Array.from({ length: daysInThisMonth }).map((d, index) => {
                    return (
                    <Day
                        key={index}
                        content={`${index + 1}`}
                        selected={isInRange(startDate!, endDate!, new Date(date.getFullYear(), date.getMonth(), index + 1))}
                        onClick={() => handleClick(index + 1)}
                    />
                    );
                }) }
                { Array.from({ length: 6 - weekDayEnd }).map((d, index) => {
                    return (
                    <div key={index} className="flex flex-row justify-center w-full">
                        <div key={index} className="rounded-full min-h-12 bg-zinc-500 min-w-12 max-w-12">
                        
                        </div>
                    </div>
                    );
                }) }
                </div>
            </div>
        </main>
    );
}

function isInRange(startDate: Date, endDate: Date, targetDate: Date) {
    if (targetDate <= endDate && targetDate >= startDate) return true;
    return false;
}

import { ReactNode } from "react";

interface CardProps {
    title: string,
    children: ReactNode,
}

export function Card({ title, children }: CardProps){
    return (
        <div className="flex flex-col rounded-md bg-scheduler-400 w-60 overflow-hidden">
            <div className="flex flex-col w-full">
                { children }
            </div>
            <div className="flex flex-row w-full items-center justify-center bg-scheduler-300 py-1">
                <span className="text-white truncate text-sm font-light">
                    { title }
                </span>
            </div>
        </div>
    );
}
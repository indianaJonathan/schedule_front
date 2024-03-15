type DayProps = {
    content: string;
    selected?: boolean;
}

export function Day({content, selected = false}: DayProps) {
    return (
        <div className="flex flex-row justify-center w-full">
            <div
                className={`flex flex-row items-center justify-center rounded-full min-h-12 ${content === "" ? 'bg-scheduler-300' : selected ? 'bg-scheduler-blue' : 'bg-scheduler-100'} min-w-12 max-w-12`}
            >
                <span className="text-black font-semibold select-none">
                    {content}
                </span>
            </div>
        </div>
    );
}
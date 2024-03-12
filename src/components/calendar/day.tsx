type DayProps = {
    content: string;
    selected: boolean;
    onClick: () => void;
}

export function Day({content, selected, onClick}: DayProps) {
    return (
        <div className="flex flex-row justify-center w-full">
            <button
                type="button"
                onClick={onClick}
                className={`rounded-full min-h-12 ${selected ? 'bg-blue-400' : 'bg-zinc-400'} min-w-12 max-w-12`}
            >
                <span>{content}</span>
            </button>
        </div>
    );
}
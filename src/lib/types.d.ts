export type User = {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
}

export type Event = {
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
    status: string;
    participants: User[];
    url: string;
}

export type Calendar = {
    id: string;
    name: string;
    description: string;
    owner: boolean;
    startDate: Date;
    updatedAt: Date;
    events: Event[];
    participants: User[];
}
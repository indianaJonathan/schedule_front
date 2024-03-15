import { Calendar } from "@/lib/types";

export const calendars: Calendar[] = [
    {
        id: "1",
        name: "Primeiro calendário",
        description: "Primeiro calendário criado no front",
        owner: true,
        startDate: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
        events: [
            {
                id: "1",
                name: "Primeiro evento",
                status: "Concluído",
                startDate: new Date("2024-03-13T12:00"),
                endDate: new Date("2024-03-13T13:00"),
                url: "",
                participants: [],
            }
        ],
        participants: [],
    },
    {
        id: "2",
        name: "Calendário convidado",
        description: "Descrição bem legal",
        owner: false,
        startDate: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
        events: [],
        participants: [],
    }
]

export function getUserCalendars(): Calendar[] {
    return calendars.filter((calendar) => calendar.owner);
}

export function getUserInvitedCalendars(): Calendar[] {
    return calendars.filter((calendar) => !calendar.owner);
}

export function getCalendarById(id: string): Calendar | undefined {
    return calendars.find((calendar) => calendar.id === id);
}
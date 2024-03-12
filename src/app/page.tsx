"use client"

import Link from "next/link";

type Calendar = {
  id: string;
  name: string;
  description: string;
  startDate: Date;
}

export default function Home() {
  const calendars: Calendar[] = [
    {
      id: "1",
      name: "Primeiro calendário",
      description: "Calendário de teste",
      startDate: new Date("2024-01-01"),
    },
    {
      id: "2",
      name: "Agenda churrasqueira",
      description: "Churrasqueira do condomínio",
      startDate: new Date("2024-03-01"),
    }
  ]

  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="flex flex-col gap-4">
        <span className="text-2xl font-semibold">Meus calendários</span>
        <div className="flex flex-row gap-8">
          { calendars.map((calendar) => {
            return (
              <Link
                key={calendar.id}
                href={`/calendars/${calendar.id}?date=${calendar.startDate.toISOString().split("T")[0]}`}
                className="border border-zinc-400 rounded-md px-4 py-8"
              >
                <span>{calendar.name}</span>
              </Link>
            );
          }) }
        </div>
      </div>
    </main>
  );
}

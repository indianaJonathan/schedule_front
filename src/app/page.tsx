"use client"

import { getUserCalendars, getUserInvitedCalendars } from "@/utils/data";

import { Calendar } from "@/lib/types";
import { CalendarsDisplay } from "@/components/display/calendar/calendars";
import { FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";

export default function Home() {
  const calendars: Calendar[] = getUserCalendars();
  const invitedCalendars: Calendar[] = getUserInvitedCalendars();

  const [filteredCalendars, setFilteredCalendars] = useState<Calendar[]>(calendars);
  const [filteredInvitedCalendars, setFilteredInvitedCalendars] = useState<Calendar[]>(invitedCalendars);

  function handleSearch(e: FormEvent<HTMLInputElement>) {
    if (e.currentTarget.value === "") {
      setFilteredCalendars(calendars);
      setFilteredInvitedCalendars(invitedCalendars);
      return;
    }
    setFilteredCalendars(calendars.filter((calendar) => calendar.name.toLocaleLowerCase().includes(e.currentTarget.value.toLocaleLowerCase())));
    setFilteredInvitedCalendars(invitedCalendars.filter((calendar) => calendar.name.toLocaleLowerCase().includes(e.currentTarget.value.toLocaleLowerCase())));
  }

  return (
    <main className="flex-1 flex flex-col gap-8 px-12 py-8">
      <div className="flex flex-row gap-4 w-1/2">
        <div className="flex-1 flex flex-row items-center ring-1 ring-scheduler-300 p-2 rounded-md">
          <input
            type="text"
            placeholder="Pesquisar"
            onChange={handleSearch}
            className="bg-transparent outline-none w-full"
          />
          <FaSearch size={18} className="text-scheduler-200" />
        </div>
        <button
          type="button"
          className="flex flex-row items-center gap-2 hover:bg-scheduler-600 p-2 rounded-md"
        >
          <IoFilterSharp size={20} className="text-scheduler-200"/>
          <span className="text-scheduler-200 text-base">
            Filtrar
          </span>
        </button>
      </div>
      <CalendarsDisplay title="Meus calendários" calendars={filteredCalendars} canAdd/>
      { filteredInvitedCalendars.length > 0 && <CalendarsDisplay title="Calendários convidados" calendars={filteredInvitedCalendars} /> }
    </main>
  );
}

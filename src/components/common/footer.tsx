import Image from "next/image";

import logo from "@/images/Logo_vert.png";

export function Footer() {
    return (
        <div className="flex flex-row items-center gap-8 bg-scheduler-400 px-8 py-2">
            <div className="flex flex-row items-center justify-center w-20">
                <Image 
                    src={logo}
                    alt="Scheduler logo"
                    width={200}
                    height={150}
                />
            </div>
            <div className="min-h-12 min-w-px bg-scheduler-300" />
            <div className="w-1/3">
                <p className="text-sm font-semibold text-scheduler-300">
                    Este projeto foi desenvolvido com o fim de organizar suas agendas em diferentes escopos. Nenhum dado compartilhado com essa aplicação será utilizado para outros fins.
                </p>
            </div>
        </div>
    );
}
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.locale("pt-br");
dayjs.extend(relativeTime);

export function formatDate(date: Date) {
    return dayjs(date).format('DD/MM/YYYY [às] HH:mm');
}

export function formatMonth(date: Date) {
    return dayjs(date).format('YYYY-MM');
}
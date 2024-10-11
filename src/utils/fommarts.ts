import { format, parseISO } from "date-fns"

export function dateFormmater(data: string){
    const date = parseISO(data);
    return format(date, "dd/MM/yyyy")
}

export function moneyToString(data: number){
    return data.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
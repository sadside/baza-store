type Block = {
    title: string
    bottom: string
    info: any
}

export const convertTypeOfObzor = (type : string) => {
    switch (type) {
        case 'baza':{
            return {title:'BAZA LOYALTY', bottom:'История начислений баллов', info:{rub: true, color: false, data: false}}
        }
        case 'zakaz':{
            return {title:'АКТУАЛЬНЫЙ ЗАКАЗ', bottom:'Список заказов', info:{rub: false, color: true, data: true}}
        }
        case 'info':{
            return {title: 'Учетные данные', bottom: 'Больше данных', info: {rub: false, color: false, data: false}}
        }
        default:
            return undefined
    }
}
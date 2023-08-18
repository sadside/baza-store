export const convertDate = (date:string):string => {
    let mounth
    switch (date.split('.')[1].replace('0', '')) {
        case '1': {
             mounth = 'января'
            break
        }
        case '2': {
             mounth = 'февраля'
            break
        }
        case '3': {
             mounth = 'марта'
            break
        }
        case '4': {
             mounth = 'апреля'
            break
        }
        case '5': {
             mounth = 'мая'
            break
        }
        case '6': {
             mounth = 'июня'
            break
        }
        case '7': {
             mounth = 'июля'
            break
        }
        case '8': {
             mounth = 'августа'
            break
        }
        case '9': {
             mounth = 'сентября'
            break
        }
        case '10': {
             mounth = 'октября'
            break
        }
        case '11': {
             mounth = 'ноября'
            break
        }
        case '12': {
             mounth = 'декабря'
            break
        }
        default: {

        }
    }
    return `${date.split('.')[0]} ${mounth} ${date.split('.')[2]}`}
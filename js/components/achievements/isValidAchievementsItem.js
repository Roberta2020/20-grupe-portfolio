// cia tikriname duomenu objektus

function isValidAchievementsItem(item) {
    if(typeof item !== 'object' ||
    Array.isArray(item) ||
    //ar dave 3 objektus riestiniuose skliaustuose testuojant reiktu klaust kas jei yra maziau jei yra lygu 3 ir jei yra daugiau
    Object.keys(item).length !== 3){
        return false;
    }
    if(typeof item.icon !== 'string' ||
    item.icon === '') {
        return false;
    }
    if(typeof item.label !== 'string' ||
    item.label === '') {
        return false;
    }
    if(typeof item.number !== 'number' ||
    !isFinite(item.number) ||
    item.number < 1 ||
    item.number % 1 !== 0) {
        return false;
    }
    return true;
}

export {isValidAchievementsItem}
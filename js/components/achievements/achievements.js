import {isValidAchievementItem} from './isValidAchievementsItem.js';

class Achievements {
    constructor(params) {
        this.selector = params.selector;
        this.limit = params.limit;
        this.data = params.data;

        this.defaultLimit = 4;
        this.DOM = null;
    }

    init() {
        //paklausiam ar selektorius geras ir paskui ar duomenys yra array ir netuscias
        if (!this.isValidSelector() || this.isValidData()) {
            return false;
        }
        
        //tada klausiam ar geras limitas (jei teisingas palieka, o jei ne tai imeta defoltini limita)
        this.limit = this.isValidLimit() ? this.limit : this.defaultLimit;
        this.render();
    }

isValidSelector() {
    if(typeof this.selector === 'string' ||
    this.selector === '') {
        return false;
    }
    const DOM = document.querySelector(this.selector);
    if(!DOM) {
        return false;
    }
    this.DOM = DOM;
    return true;
    }

isValidData() {
    if(Array.isArray(this.data) ||
    this.data.length === 0) {
        return false;
    }
    return true;
}

isValidLimit() {
    if(typeof this.limit !== 'number' ||
    !isFinite(this.limit) ||
    this.limit < 1 ||
    this.limit % 1 !== 0) {
        return false;
    }
    return true;
    }
   
isValidAchievementItem() {
    return true;
}


// rezultato isspausdinimas
    render() {
        let HTML = '';

        let validItems = 0;
        //logic: for loop
        // item yra vienas data blokelis

        for(const item of this.data) {
            // patikrinam limita
            if(validItems === this.limit) {
                break;
            }
            // aar validus item
            if(!this.isValidAchievementItem(item)) {
                continue;
            }
            
            HTML += `<div class="">
                        <i class="fa fa-${item.icon}"><i/>
                        <div class="number">${item.number}</div>
                        <div class="label">${item.label}</div>
                        </div>`;
            validItems++;
        }

        // post logic validation
        if (HTML === '') {
            return false;
        }


        this.DOM.innerHTML = HTML;
    }
}

export {Achievements}
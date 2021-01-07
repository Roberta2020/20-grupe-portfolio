
import {isValidAchievementsItem} from './isValidAchievementsItem.js';

//APRASOM KLASE

class Achievements {
    constructor(params = {}) {
    
        this.selector = params.selector || '';
        this.defaultLimit = 4; //keturi skaiciu elementai
        this.limit = params.limit || this.defaultLimit;
        this.data = params.data || [];

        
        this.DOM = null; // is pradziu dokumentas nezinomas
        this.validUsedData = []; //atrinkti objektai kurie bus idedami i sekcija
        this.animationDuration = 5; // laikas per kiek prasisuka skaicia
        this.fps = 60; // frames per second kiek prasuks skaiciu per sekunde - daznis
    }

    // SEKCIJOS INICIJAVIMAS (pagamina statini turini)
    init() {
        //paklausiam ar selektorius geras ir paskui ar duomenys yra array ir netuscias
        if (!this.isValidSelector() || this.isValidData()) {
            return false;
        }
        
        //tada klausiam ar geras limitas (jei teisingas palieka, o jei ne tai imeta defoltini limita)
        this.limit = this.isValidLimit() ? this.limit : this.defaultLimit;
        this.render();
        this.Event();
        return true;
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
            // jei patikrinus tinkamas item ji imeta i duomenu sarasa
            this.validUsedData.push(item);

            HTML += `<div class="">
                        <i class="fa fa-${item.icon}"><i/>
                        <div class="number">0</div>
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


    animateNumber(index, DOM) {
        
            // isloginus rasti kokiu skaiciu prasideda skaiciai, kad jie galetu suktis - scrollY
            // innerHeight rodo eekrano apaacios pozicija 
            const windowBottom = scrollY + innerHeight;
            // tuomet sudeda vidini ekrano auksti su elemento auksciu, kada reiktu pradeti skaiciavima
            const numberBottom = DOM.offsetTop + DOM.offsetHeight;


        // duodame intervala per kiek laiko kiek skaiciu turi prasisukti

            if(windowBottom > numberBottom) {
                // uzdedam kaip saugikli kad animacija scrolo metu paleis tik 1 karta
            if(this.validUsedData[index].animated) {
                return false;
            }
            this.validUsedData[index].animated = true;


            //animacijos logika
                let step = 0;
                const increment = this.validUsedData[index].number / this.animationDuration / this.fps;
                const timer = setInterval(() => {
                    const value = Math.floor(increment * step);
                    step ++;
                    // imetame i elementa
                    DOM.innerText = value;

                    // pasakom kada sustoti
                    if(value >= this.validUsedData[index].number) {
                        DOM.innerText = this.validUsedData[index].number;
                        clearInterval(timer);
                    }
                }, 1000 / this.fps);
    }
    }
    // sudedame event listenerius (scrolas)

    addEvents() {
        addEventListener('scroll', () => {

            //nurodom kurios sekcijos vietos reikia sulaukti
            const numbersDOM = document.querySelectorAll('.achievements .item > .number');
            
            for(let i=0; i<this.validUsedData.length; i++) {
                this.animateNumber(i, numbersDOM[I]);
            }

        })
    }
}



export {Achievements}
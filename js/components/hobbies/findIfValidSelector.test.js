import { findIfValidSelector } from "./findIfValidSelector";

import {findIfValidSelector} from "./findIfValidSelector.js";

describe('Tikriname duomenu formata', () => {
    test ('netinkamas formatas', () => {
        expect(isValidHobbieItem()).toBeFalsy();
        expect(isValidHobbieItem(551)).toBeFalsy();
        expect(isValidHobbieItem(true)).toBeFalsy();
        expect(isValidHobbieItem(false)).toBeFalsy();
        expect(isValidHobbieItem([])).toBeFalsy();
        expect(isValidHobbieItem({})).toBeFalsy();
        expect(isValidHobbieItem('')).toBeFalsy();
    })

    // test('tinkamas formatas', () => {
    //    expect(isValidHobbieItem('body')).toBeTruthy();
    //    expect(isValidHobbieItem('div > p')).toBeTruthy();
    //})

})
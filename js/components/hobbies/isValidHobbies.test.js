import {isValidHobbies} from "./isValidHobbies.js";


describe('Tikriname duomenu formata', () => {
    test ('netinkamas formatas', () => {
        expect(isValidHobbies()).toBeFalsy();
        expect(isValidHobbies(551)).toBeFalsy();
        expect(isValidHobbies(true)).toBeFalsy();
        expect(isValidHobbies(false)).toBeFalsy();
        expect(isValidHobbies({})).toBeFalsy();
        expect(isValidHobbies('')).toBeFalsy();
        expect(isValidHobbies('fbdbz')).toBeFalsy();
    })
    test('tinkamas formatas, bet tuscias objektas arba jo vertes blogos', () => {
        expect(isValidHobbies({})).toBeFalsy();
        expect(isValidHobbies({selector: ''})).toBeFalsy();
        expect(isValidHobbies({selecrtor: 15})).toBeFalsy();
        expect(isValidHobbies({selecrtor: 'body', data: 15})).toBeFalsy();
        expect(isValidHobbies({selecrtor: 'body', data: []})).toBeFalsy();
        expect(isValidHobbies({selecrtor: 'body', data: [{}], limit: 'hjuh'})).toBeFalsy();
        expect(isValidHobbies({selecrtor: 'body', data: [{}], limit: 0})).toBeFalsy();
        expect(isValidHobbies({selecrtor: 'body', data: [{}], limit: -10})).toBeFalsy();
        expect(isValidHobbies({selecrtor: 'body', data: [{}], limit: 3.14})).toBeFalsy();
    })
    test('tinkamas formatas', () => {
        expect(isValidHobbies({selecrtor: 'body', data: [{}], limit: 12})).toBeTruthy();
        expect(isValidHobbies({selecrtor: 'div > p', data: [{icon:'globe', title: 'Design'}], limit: 12})).toBeTruthy();

    })


})
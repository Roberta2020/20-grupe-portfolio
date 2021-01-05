import {renderHobbies} from "./renderHobbies.js";

describe('Tikriname duomenu formata', () => {
    test ('netinkamas formatas', () => {
        expect(renderHobbies()).toBeFalsy();
        expect(renderHobbies(551)).toBeFalsy();
        expect(renderHobbies(true)).toBeFalsy();
        expect(renderHobbies(false)).toBeFalsy();
        expect(renderHobbies({})).toBeFalsy();
        expect(renderHobbies('')).toBeFalsy();
        expect(renderHobbies('gfdd')).toBeFalsy();
    }renderHobbies
    test('tinkamas formatas', () => {
        expect(renderHobbies([])).toBeFalsy();
    })
    test('tinkamas formatas, bet netinkamos vidines reiksmes', () => {
        expect(renderHobbies([])).toBeFalsy();
        expect(renderHobbies([{icon: 48}])).toBeFalsy();
        expect(renderHobbies([{}])).toBeFalsy();
        expect(renderHobbies([{title: 48}])).toBeFalsy();
        expect(renderHobbies([{icon: 52, title: 48}])).toBeFalsy();
        expect(renderHobbies([{icon: 52, title: 'Design'}])).toBeFalsy();
        expect(renderHobbies([{icon: 'globe', title: 48}])).toBeFalsy();
        expect(renderHobbies([{icon: 'globe', title: 'Design'}])).toBeFalsy();
    })
})
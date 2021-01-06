import { TestScheduler } from 'jest';
import { Menu } from './Menu.js';

describe('Is valid selector', () => {
    test('is invalid if number is given', () => {
        const menu = new Menu({
            selector: 845
        });
    expect(menu.isValidSelector()).toBeFalsy();
    })
})
test('is invalid if array is given', () => {
    const menu = new Menu({
        selector: []
    });

expect(menu.isValidSelector()).toBeFalsy();
})
test('is invalid if object is given', () => {
    const menu = new Menu({
        selector: {}
    });
expect(menu.isValidSelector()).toBeFalsy();
})
test('is invalid if boolean is given', () => {
    const menu = new Menu({
        selector: true
    });
expect(menu.isValidSelector()).toBeFalsy();
})
test('is invalid if empty string is given', () => {
    const menu = new Menu({
        selector: ''
    });
expect(menu.isValidSelector()).toBeFalsy();

    test('can find element by given selector', () => {
        document.body.innerHTML = '<header><nav></nav>Labas</header>'
        const menu = new Menu({
            selector: 'header nav'
        });
        expect(menu.isValidSelector()).toBeTruthy();
    test('can find element by given selector', () => {
        document.body.innerHTML = '<header><div></div></header>'
        const menu = new Menu({
        selector: 'header div'
    });
        expect(menu.isValidSelector()).toBeFalsy();    
test('can find element by given selector', () => {
    document.body.innerHTML = '<header><div><nav></nav></div></header>'
    const menu = new Menu({
    selector: 'header nav'
});
expect(menu.isValidSelector()).toBeTruthy();    
test('can find element by given selector', () => {
    document.body.innerHTML;
    const menu = new Menu({
    selector: 'header nav'
});
expect(menu.isValidSelector()).toBeTruthy();    
}) 
})
describe('generates valid HTML for a menu link', () => {
    test('is invalid link object', () => {
        const menu = new Menu({ selector: '', structure: [] });
        rateHTML(menu.generateHTML(123)).toBe('');
        rateHTML(menu.generateHTML(true)).toBe('');
    });
})
})
})
describe('Generates menu HTML', () => {
    test('nav iss empty', () => {
        const menu = new Menu({
            selector: 'header nav',
            structure: [],
        });
        menu.init();
        const linkCount = document.querySelectorAll(menu.selector + 'a').length;
        expect(linkCount).toBeEqual(0);
    })
})
})
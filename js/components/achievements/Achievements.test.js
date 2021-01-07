import {Achievements} from './Achievements.js';

describe('Tikriname parametrus', () => {
    test('Nevalidu kai duodamas be parametru', () => {
        const achievement = newAchievements();
        expect(achievement.init()).toBeFalsy();
    })
})
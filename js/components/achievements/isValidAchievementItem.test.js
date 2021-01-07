import {isValidAchievementItem} from './isValidAchievementsItem.js';

describe('Tikriname parametrus', () => {
    test('Nevalidu kai duodamas be parametru', () => {
        const achievement = newAchievements();
        expect(isValidAchievementItem()).toBeFalsy();
    })
})
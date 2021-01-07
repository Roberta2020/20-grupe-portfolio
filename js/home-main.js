//all import (importai)
/*header*/
import {Menu} from './components/menu/Menu.js';
import {menuData} from './data/menuData.js';
/*hero*/
/*about*/
/*hobbies*/
import {renderHobbies} from './components/hobbies/renderHobbies.js';
import {hobbiesData} from './data/hobbiesData.js';
/*achievements*/
import {Achievements} from './components/achievements/Achievements.js';
import {achievementsData} from './data/achievementsData.js';
/*job history*/
/*contact me*/
/*footer*/

//code execution (importu panaudojimas)
/*header*/
const menu = new Menu(menuData);
menu.init;
/*hero*/
/*about*/
/*hobbies*/
renderHobbies({
    selector: '#hobbies_block',
    data: hobbiesData,
    limit: 12,
});
/*achievements*/
const achievements = newAchievements(achievements.data)

/*job history*/
/*contact me*/
/*footer*/
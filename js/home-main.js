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
    borderRadius: 4
});
/*achievements*/
/*job history*/
/*contact me*/
/*footer*/
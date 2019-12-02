import { components } from '../vistas/index.js';
import { getOrders } from '../controlador-firebase/controlador-fb.js';
import { templatePedidos } from './funciones-cocinero.js';




export const changeTmp = (hash) => {
    const sectionMain = document.getElementById('container');
    sectionMain.innerHTML = '';
    switch (hash) {
        case '': 
        sectionMain.appendChild(components.login());
        break;
        case '#/home': 
        sectionMain.appendChild(components.home());
        break;
        case '#/cocinero': 
        sectionMain.appendChild(components.cocinero());
        break;
        default:
        sectionMain.appendChild(components.different());
        break;
    }
};
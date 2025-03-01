import { templateOrders, templateTotal } from "../controlador-rutas/tabla.js";
import { adicionales } from '../controlador-rutas/adicionales.js'
export let arr = [];

export const templateProducts = (doc) => {

    const btnProducts = document.createElement('button');
    btnProducts.className = 'btnProducto';
    btnProducts.setAttribute('data-id', doc.id); //contiene el id de cada producto

    const templateInfoPro = `<img class="fotoDesayuno" src="${doc.data().img}">
    <p>${doc.data().producto}</p>
    <p>S/. ${doc.data().precio}</p>

    `;
    btnProducts.innerHTML = templateInfoPro;

    //--------BOTONES PRODUCTOS 

    btnProducts.addEventListener('click', (e) => {

        const obj = {
            id: doc.id,
            producto: doc.data().producto,
            precio: doc.data().precio,
            cantidad: 1,

        }

        const metodoFind = arr.find(eleId => eleId.id === obj.id);
        if (doc.data().sabores) {
            adicionales(doc, e.target);

        } else if (!metodoFind) {
            arr.push(obj);
            templateOrders(obj);
            templateTotal(obj);
           
        } else {
            metodoFind.cantidad++;
            document.querySelector('#containerTabla').innerHTML = '';//para que no se repita mis productos
            arrProducto('ordenes').forEach(element => { // recorrer el array del local y le hago un for each
                templateOrders(element);
                templateTotal(element);
                
            });

        }

        localStorage.setItem('ordenes', JSON.stringify(arr));



    });
    return btnProducts;
};
export const arrProducto = string => (localStorage.getItem(string) ? JSON.parse(localStorage.getItem(string)) : []);
//

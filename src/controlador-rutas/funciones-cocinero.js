// import { orders } from "../controlador-firebase/controlador-fb.js";
export const templatePedidos = (doc) => {


        // btnProductss.setAttribute('data-id', doc.id);
        const divProductss = document.createElement('button');
        divProductss.className = 'btnProducto';
        divProductss.setAttribute('data-id', doc.id);

        const data = doc.data()

        if (data.arrOrders) {
                data.arrOrders.forEach(element => {
                        divProductss.innerHTML += `
                        <p>${element.producto}</p>
                        <p>S/. ${element.precio}</p>
            
                `;
              
                });
        }

        return divProductss;
}
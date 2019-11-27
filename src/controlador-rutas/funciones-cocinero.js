// import { orders } from "../controlador-firebase/controlador-fb.js";
import { saveStatus } from "../controlador-firebase/controlador-fb.js";
export const templatePedidos = (doc) => {


        // btnProductss.setAttribute('data-id', doc.id);
        const divProductss = document.createElement('div');
        divProductss.className = 'divPedidos';
        divProductss.setAttribute('data-id', doc.id);
        let acum = '';
        
        const data = doc.data()
        // const containerGeneral = document.querySelector('#containerGeneral');
        // containerGeneral.innerHTML = '';
        if (data.ordenes) {
                data.ordenes.forEach(element => {
                        acum += `
                        <p>${element.producto}</p>
                        <p>S/. ${element.precio}</p>
                      
                       
                `;

                });
        }
        const date = data.fecha;
        const date2 = date.toDate();
        
        divProductss.innerHTML += `
         <p>${date2.getHours()}:${date2.getMinutes()}:${date2.getSeconds()}</p>
        ${acum}
        <select id="status">
        <option value="Estado" selected disabled hidden>Estado</option>
        <option class = "red" value="Pendiente">Pendiente</option>
        <option class = "yellow" value="Preparando">Preparando</option>
        <option class = "green" value="Entregado">Entregado</option>
        </select>`
        const status = divProductss.querySelector('#status')
        status.addEventListener('change' , () => {
                // const estado = data.estado;
                const valueStatus = status.value;
                saveStatus(doc.id,{estado:valueStatus})
               
        })
       
        return divProductss;
     
};
import { saveStatus } from "../controlador-firebase/controlador-fb.js";
export const templatePedidos = (doc) => {

        const divProductss = document.createElement('div');
        divProductss.className = 'divPedidos';
        divProductss.setAttribute('data-id', doc.id);
        let acum = '';
        const data = doc.data()
        if (data.ordenes) {
                data.ordenes.forEach(element => {
                        acum += `
                        <p>${element.producto}</p>
                        <p>S/. ${element.precio}</p>
                `;
                });
        }
        const date = data.fecha;
        const fullDate = date.toDate();

        divProductss.innerHTML += `
         <p>${fullDate.getHours()}:${fullDate.getMinutes()}:${fullDate.getSeconds()}</p>
        ${acum}
        <select id="status">
        <option value="Estado" selected disabled hidden >Estado</option>
        <option class = "red" value="Pendiente">Pendiente</option>
        <option class = "yellow" value="Preparando">Preparando</option>
        <option class = "green" value="Entregado">Entregado</option>
        </select>`
        const status = divProductss.querySelector('#status')
        status.addEventListener('change', () => {
                // const estado = data.estado;
                const valueStatus = status.value;
                saveStatus(doc.id, { estado: valueStatus })

        })

        return divProductss;

};
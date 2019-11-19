import { getOrders } from "../controlador-firebase/controlador-fb.js";
import {templatePedidos} from "../controlador-rutas/funciones-cocinero.js"
export default () => {
    const viewAccesories = `
  <h2 class="text-center">Cocinero</h2>
 
  <input id="buttonViewOrders" type="button"></input>
  <div id="containerGeneral" ></div>`;

  const divElement = document.createElement('section');
  divElement.innerHTML = viewAccesories;
 const btnCocinero = divElement.querySelector('#buttonViewOrders')
 btnCocinero.addEventListener('click', () => {
    const containerGeneral= document.getElementById('containerGeneral');
    containerGeneral.innerHTML = '';
   
    getOrders("Pedidos")
    .then((querySnapshot )=> {
     
      querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          // containerGeneral.appendChild(templatePedidos(doc));
          containerGeneral.innerHTML += `
          <p>${doc.data().x[0]}</p>
          <p>S/. ${doc.data().x[0].precio}</p>
      
          `;
          console.log( doc.id, doc.data());
      });
    
      })
      .catch(() => console.log('error'));
  })
  return divElement;
}

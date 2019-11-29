import { getOrders } from "../controlador-firebase/controlador-fb.js";
import { templatePedidos } from "../controlador-rutas/funciones-cocinero.js"
export default () => {
  const viewAccesories = `
  <section id="pantallaEntrega">
        
        <div class="newviewDely">
         
            <div class="nextviewDely">
            <input id="buttonViewOrders" type="button" value="Ver Pedidos"></input>
                <a href="" class="newiconoPrincipal"></a>
            </div>
         <section id="containerGeneral"></section>
           
            </div>
        </div>
    </section>
  
  `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewAccesories;
  const btnCocinero = divElement.querySelector('#buttonViewOrders')
  btnCocinero.addEventListener('click', () => {
    const containerGeneral = divElement.querySelector('#containerGeneral');
    containerGeneral.innerHTML = '';

    getOrders("Pedidos")
      .then((snapshot) => {
        snapshot.forEach(doc => {
          containerGeneral.appendChild(templatePedidos(doc))


        });

      })
      .catch((e) => console.log(e));


  })
  return divElement;

}
{/* <div id="imagenDelivery"><img  src="./img/tomato-burger-and-fried-fries-1600727.jpg"/></div> */ }
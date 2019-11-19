export const templatePedidos = (doc) =>{
       const divProductss = document.createElement('div');
       divProductss.className = 'btnProducto';
        // btnProductss.setAttribute('data-id', doc.id);
    
        const templateInfoPros = `
        <p>${doc.data().producto}</p>
        <p>S/. ${doc.data().precio}</p>
    
        `;
        divProductss.innerHTML = templateInfoPros;
    
}
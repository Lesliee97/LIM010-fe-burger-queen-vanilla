export const verDataFb = (string) => {
   return firebase.firestore().collection(string).get();
};
 export const guardarPedidos = (arrObj) => {
   return firebase.firestore().collection('Pedidos').add(arrObj);
}
export const  getOrders = (arrayObj ) => {
   return firebase.firestore().collection(arrayObj).orderBy('fecha').get();
};

export const saveStatus = (string, obj) => {
   firebase.firestore().collection('Pedidos').doc(string).update(obj);
}

// export const orders = (string) => {
// return firebase.firestore().collection(string).orderBy('arrOrder');
// }

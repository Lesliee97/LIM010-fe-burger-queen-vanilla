export const verDataFb = (string) => {
   return firebase.firestore().collection(string).get();
};
 export const guardarPedidos = (arrObj) => {
   return firebase.firestore().collection('Pedidos').add(arrObj);
}
export const  getOrders = (arrayObj ) => {
   return firebase.firestore().collection(arrayObj).get();
};
export const guardarFecha = (string) => {
   return firebase.firestore().collection('ExtraInfo').add(string);
}
// export const orders = (string) => {
// return firebase.firestore().collection(string).orderBy('arrOrder');
// }

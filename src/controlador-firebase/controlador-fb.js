export const verDataFb = (string) => {
   return firebase.firestore().collection(string).get();
};
 export const guardarPedidos = (arrObj) => {
   return firebase.firestore().collection('Pedidos').add(arrObj);
}
export const  getOrders = (arrayObj ) => {
   return firebase.firestore().collection(arrayObj).orderBy('fecha').get();
};

export const saveStatus = (id, obj) => {
   firebase.firestore().collection('Pedidos').doc(id).update(obj);
}


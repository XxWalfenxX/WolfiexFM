import { collection, getDocs } from "firebase/firestore";
import { db } from "./index";
/*
async function getRadios() {
  const querySnapshot = await getDocs(collection(db, "radios"));
  querySnapshot.forEach((doc) => {
    return doc.data();
  });
}*/

const getRadios = new Promise(async (resolve, reject) => {
  const querySnapshot = await getDocs(collection(db, "radios"));
  let listaRadios = [];
  querySnapshot.forEach((doc) => {
    const radios = {
      id: doc.id,
      nombre: doc.data().nombre,
      streamURL: doc.data().streamURL,
      logoURL: doc.data().logoURL,
    };
    listaRadios.push(radios);
  });
  resolve(listaRadios);
});

export default getRadios;

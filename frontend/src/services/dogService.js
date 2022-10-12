import { http } from "../http";

const serviceUrl = "dog/"

export const viewDogs = async () => {
    return await http.get(serviceUrl);
}

export const dogsLists = async () => {
  return await http.get(serviceUrl);
}

export const addNewDog = async (dog) => {
    return await http.post(serviceUrl, dog)
    .then(() => {
        alert("Dog added");
        window.location.replace('/viewDogs');
      })
      .catch((err) => {
        alert(err);
      });
}
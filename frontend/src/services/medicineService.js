import { http } from "../http";

const serviceUrl = "medicine/"

export const getMedicine = async () => {
    return await http.get(serviceUrl);
}

export const createMedicine = async (medicine) => {
    return await http.post(serviceUrl, medicine)
    .then(() => {
        alert("Medicine added");
      })
      .catch((err) => {
        alert(err);
      });
}
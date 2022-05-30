import axios from "axios";

const BACKEND_URL =
  "https://expense-tracker-react-na-834c5-default-rtdb.europe-west1.firebasedatabase.app/";

export async function storeZaduzenje(zaduzenjeData) {
  const response = await axios.post(
    BACKEND_URL + "/zaduzenja.json",
    zaduzenjeData
  );
  const id = response.data.name;
  return id;
}

export async function storeRadnik(radnikData) {
  const response = await axios.post(BACKEND_URL + "/radnici.json", radnikData);
  const id = response.data.name;
  return id;
}

export async function fetchZaduzenja() {
  const response = await axios.get(BACKEND_URL + "/zaduzenja.json");

  const zaduzenja = [];

  for (const key in response.data) {
    const zaduzenjeObj = {
      id: key,
      //amount: response.data[key].amount,
      //date: new Date(response.data[key].date),
      //description: response.data[key].description,
      //podaciZgrada: response.data[key].podaciZgrada,
      brZgrade: response.data[key].brZgrade,
      spratova: response.data[key].spratova,
      tip: response.data[key].tip,
      adresa: response.data[key].adresa,
      datum: response.data[key].datum,
      datumUlaz: response.data[key].datumUlaz,
      datumIzlaz: response.data[key].datumIzlaz,
      status: response.data[key].status,
      radnik: response.data[key].radnik,
    };
    zaduzenja.push(zaduzenjeObj);
  }

  return zaduzenja;
}

export async function fetchRadnici() {
  const response = await axios.get(BACKEND_URL + "/radnici.json");

  const radnici = [];

  for (const key in response.data) {
    const radnikObj = {
      id: key,
      //amount: response.data[key].amount,
      //date: new Date(response.data[key].date),
      //description: response.data[key].description,
      //podaciZgrada: response.data[key].podaciZgrada,
      ime: response.data[key].ime,
      prezime: response.data[key].prezime,
      username: response.data[key].username,
      sifra: response.data[key].sifra,
    };
    radnici.push(radnikObj);
  }

  console.log(radnici);
  return radnici;
}

export function updateZaduzenje(id, zaduzenjeData) {
  return axios.put(BACKEND_URL + `/zaduzenja/${id}.json`, zaduzenjeData);
}

export function updateRadnik(id, radnikData) {
  return axios.put(BACKEND_URL + `/radnici/${id}.json`, radnikData);
}

export function deleteZaduzenje(id) {
  return axios.delete(BACKEND_URL + `/zaduzenja/${id}.json`);
}

export function deleteRadnik(id) {
  return axios.delete(BACKEND_URL + `/radnici/${id}.json`);
}

import http from "./httpService";

export async function getAddresses() {
  const { data: addresses } = await http.get("http://localhost:4000/addresses");

  return addresses;
}

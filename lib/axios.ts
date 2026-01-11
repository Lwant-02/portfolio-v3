import axios from "axios";

const clientApi = axios.create({
  baseURL: "/api",
  headers: { "Content-Type": "application/json" },
});

const serverApi = axios.create({
  baseURL: `${process.env.NEXTAUTH_URL}/api`,
  headers: { "Content-Type": "application/json" },
});

export { clientApi, serverApi };

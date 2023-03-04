import axios from "axios";
const API_ENDPOINT = process.env.API_ENDPOINT;

export default async function handler(req: any, res: any) {
  const data = req.body;
  const response = await axios.post(`${API_ENDPOINT}/interview/social`, {
    ...data,
  });
  res.json(response.data);
}

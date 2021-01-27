import axios from "axios";
export async function getRequest(): Promise<{ message: string }> {
  const response = await axios.get("http://localhost:5678");
  return response.data;
}

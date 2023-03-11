import { ApiResponse } from "@/types/api";

const sendRequest = async <T>(
  url: string,
  method?: "GET" | "POST"
): Promise<ApiResponse<T>> => {
  try {
    const res = await fetch(url, {
      method: method || "GET",
      headers: {
        apiKey: process.env.API_KEY!,
      },
    });
    const json = await res.json();
    return json;
  } catch (err: any) {
    return { errorMessage: err.message };
  }
};

export default sendRequest;

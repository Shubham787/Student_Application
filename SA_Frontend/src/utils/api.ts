// utils/api.ts (optional central function)
export const fetchAPI = async (
  url: string,
  method: string,
  body?: any,
  auth = false
) => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (auth) {
    const token = localStorage.getItem("token");
    if (token) headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${process.env.BACKEND_BASE_URL}${url}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    credentials: "include",
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Unknown error");
  }

  return res;
};

export const useJsonResponse = () => {
  const handleJsonResponse = (res: Response) => {
    if (!res.ok) {
      throw new Error(`[${res.status}] ${res.statusText}`);
    }
    return res.json()
  }

  return { handleJsonResponse }
}

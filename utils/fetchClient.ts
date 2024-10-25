const fetchClient = async ({
  url,
  options = { method: "GET" },
}: {
  url: string;
  options?: RequestInit;
}): Promise<{isError: boolean, data: any}> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}${url}`, options);

    if (!response.ok) {
      const errorData = await response.json();
      return {isError: true, data: errorData.message}
    }
    return {isError: false, data: await response.json()};
  } catch (error: any) {
    return {isError: true, data: "Faild to Fetch"}
  }
};


export default fetchClient
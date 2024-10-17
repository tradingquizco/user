
const FetchHelper = async ({
  endPoint,
  config = { method: "GET", cache: "no-cache" },
}: {
  endPoint: string;
  config?: RequestInit;
}): Promise<{ isError: boolean; data: any, pending: boolean }> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/${endPoint}`, config);

    if (!response.ok) {
      const { message } = await response.json();
      return { isError: true, data: message, pending: false };
    }

    const data = await response.json();
    return { isError: false, data, pending: false};
  } catch (err) {
    console.log(`Fetch to ${endPoint} Faild`);
    console.log(err);

    return { isError: true, data: "Faild to Fetch", pending: false };
  }
};


export default FetchHelper;
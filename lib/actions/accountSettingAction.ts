"use server";

export const accountSettingAction = async (data): Promise<{ isError: boolean; message: string }> => {

  try {
    const response = await fetch(
      `${await getBaseApi()}/createUser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: hashedPassword, email, name, username }),
      }
    );

    if (!response.ok) {
      const { data } = await response.json();
      return {
        isError: true,
        message: data.error ? "This Email is Taken" : "Something went wrong",
      };
    }

    return { isError: false, message: "account created. Please login" };
  } catch (error: any) {
    return { isError: true, message: error.message };
  }
};
import tokenInstance from "../axiosInstance";

export const addAddress = async (newData) => {
  try {
    const response = await tokenInstance.post("address", newData);
    return response.data;
  } catch (error) {
    console.error("An error occurred while adding the address:", error);
    throw error;
  }
};

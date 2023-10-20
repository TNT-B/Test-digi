import tokenInstance from "../axiosInstance";

export const editAddress = async (newData, id) => {
  try {
    // Make a PUT request using Axios to update the address with the specified id
    const response = await tokenInstance.put(`address/${id}`, newData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

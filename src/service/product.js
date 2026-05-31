import { apiClient } from "./axiosClient";

export const fetchApiProduct = async (page) => {
    try {
        const response = await apiClient.get("");
        return response.data;
    } catch (error) {
        console.log("Error fetching API:", error);
    }
};

export const fetchApiProductById = async (id) => {
    try {
        const response = await apiClient.get(`/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error fetching API:", error);
    }
};

import axios from "axios";
import { BASE_URL } from "./endpoint";

const axiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const login = (identifier, password) => {
	return axiosInstance.post("/auth/login", {
		identifier,
		password,
	});
};

export default axiosInstance;

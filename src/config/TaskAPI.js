import api from ".";

export default {
	find: () => api.get("/tasks").then((res) => res.data),
};

import api from ".";

export default {
	find: () => api.get("/notes").then((res) => res.data),
};

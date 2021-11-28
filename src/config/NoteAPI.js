import api from ".";
import axios from "axios";

export default {
	find: () => api.get("/notes").then((res) => res.data),
	findById: (id) => api.get(`/notes/${id}`).then((res) => res.data),
   
};

import api from "./api"

const resource = "/dashboard"

export const getAllRegisters = () => api.get(resource);


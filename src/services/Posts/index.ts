import { api } from "../api";

interface Post {
  codigo?: string;
  nome: string;
  descricao: string;
  imagen: string;
  cidade: string;
  estado: string;
  telefone: string;
  data: string;
}

export const getPosts = () => {
  return api.get("/postagens");
};

export const getPost = (id: number) => {
  return api.get(`/postagens/${id}`);
};

export const createPost = (data: Post) => {
  return api.post("/postagens", data);
};

export const deletePost = (id: number) => {
  return api.delete(`/postagens/${id}`);
};

export const updatePost = (id: number, data: Post) => {
  return api.put(`/postagens/${id}`, data);
};

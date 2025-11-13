import { API_BASE_URL } from "./config.js";

// Función que trae todos los cursos desde la BD
export async function cursosBd() {
  try {
    const response = await fetch(`${API_BASE_URL}/cursos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en cursos.js/cursosBd:", error);
    throw error;
  }
}

// Función que trae un curso específico desde la BD
export async function cursoBdPorId(id_course) {
  try {
    const response = await fetch(`${API_BASE_URL}/cursos/${id_course}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en cursos.js/cursoBdPorId:", error);
    throw error;
  }
}

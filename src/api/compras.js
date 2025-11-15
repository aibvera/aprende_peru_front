import { API_BASE_URL } from "./config.js";

// Función que añade una compra a la BD
export async function nuevaCompraBd(token, id_course, id_user, id_discount) {
  try {
    const response = await fetch(`${API_BASE_URL}/cursos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      boddy: JSON.stringify({ id_course, id_user, id_discount }),
    })
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en compras.js/nuevaCompraBd:", error);
    throw error;
  }
}

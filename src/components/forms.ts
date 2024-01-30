// Archivo en el directorio src/utils/usuarios.ts

// Definir el tipo para el usuario
interface Usuario {
  nombre: string;
  apellido: string;
  edad: number,
  genero: string,
  telefono: number
  // Agrega otras propiedades según sea necesario
}

// Lista de usuarios
const usuarios: Usuario[] = [];

// Función para verificar si el nombre ya existe en la lista de usuarios
export function verificarNombreExistente(nombre: string): boolean {
  return usuarios.some((user) => user.nombre === nombre);
}

// Función para agregar un nuevo usuario a la lista
export function agregarUsuario(usuario: Usuario): void {
  usuarios.push(usuario);
}

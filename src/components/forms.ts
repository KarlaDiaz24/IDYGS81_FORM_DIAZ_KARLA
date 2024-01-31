interface Usuario {
  nombre: string;
  apellido: string;
  edad: number,
  genero: string,
  telefono: number
}

const usuarios: Usuario[] = [];

export function verificarNombreExistente(nombre: string): boolean {
  return usuarios.some((user) => user.nombre === nombre);
}

export function agregarUsuario(usuario: Usuario): void {
  usuarios.push(usuario);
}

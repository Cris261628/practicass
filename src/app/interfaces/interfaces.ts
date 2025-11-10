
/*export interface RespuestaBD{
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Personajes[];
}*/

export interface Personaje {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface personajesFirebase {

  apellido: string;
  armas: number;
  dano: number;
  descripcion: string;
  id: string;
  imagen: string;
  nombre: string;
  salud: number;
  velocidad: number;
}
/*export interface RespuestaDetalle {
  data: Detalle;
  support: {
    url: string;
    text: string;
  };
}*/

/*export interface Detalle {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  text?: string; 
}*/


/*

export interface Personajes{
  Apellido: string;
  Armas: number;
  Daño: number;
  Descripcion: string;
  Imagen: string;
  Nombre: string;
  Salud: number;
  Velocidad: number;
}

*/
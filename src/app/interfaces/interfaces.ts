
/*export interface RespuestaBD{
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Personajes[];
}*/

export interface Personaje{
   
    avatar: string;
    email: string;
    first_name: string;
    id: number;
    last_name: string;
   
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
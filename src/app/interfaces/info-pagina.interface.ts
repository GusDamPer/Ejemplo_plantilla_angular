export interface InfoPagina {
  titulo?: string;
  email?: string;
  nombre_corto?: string;
  pagina_autor?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  tumblr?: string;
  equipo_trabajo?: any[];
}

//se importa con la extension JSON to TS
//primero se copia todo el archivo JSON y luego con el shorthand
//ctrl + shift + P y se busca json to ts:convert from clipboard

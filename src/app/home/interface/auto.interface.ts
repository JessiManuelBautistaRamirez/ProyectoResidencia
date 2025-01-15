export interface AutosModel {
  id:          number;
  nombre:      string;
  kilometraje: string;
  precio:      string;
  anio:        string;
  version:     string;
  trasmision:  string;
  sucursal:    string;
  stock:       string;
  imagen:      string;
  descripcion: string;
}

export interface Description {
  id_Descripcion:  number;
  star_Stop:       string;
  num_Velocidades: string;
  caballos:        string;
  peso:            string;
  litros:          string;
  aceleracion:     string;
  cilindro:        string;
  combustible:     string;
  tipo_Motor:      string;
  nombre:          string;
}

export interface Cliente {
  nombre:string
  ap:string
  am:string
  id_cliente:string
}


export interface Solicitud {
  fecha_Solicitud: string;
  estado:          string;
  correo:          string;
  fecha_Encuentro: string;
  telefono:        string;
  unidad:          string;
  sucursal:        string;
  cliente:         string;
  responsable:     string;
}


export interface Sucursal {
  id_Sucursal:number
  ubicacion:string
}

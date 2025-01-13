using System.ComponentModel.DataAnnotations;

namespace WebApiperson.models
{
    public class Cliente
    {
        [Key]
        public int Id_cliente { get; set; }


        public string Nombre { get; set; }

        public string Ap { get; set; }

        public string Am { get; set; }

        public int Edad { get; set; }

        public string Domicilio { get; set; }

        public string Estado_Civil { get; set; }

        public string Nacimiento { get; set; }

        public string Telefono { get; set; }

        public string Empresa_Laboral { get; set; }

        public string Puesto { get; set; }

        public string Ingresos { get; set; }

        public string Tiempo_Laborando { get; set; }


    }
}

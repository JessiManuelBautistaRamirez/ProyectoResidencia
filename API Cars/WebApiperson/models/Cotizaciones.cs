using System.ComponentModel.DataAnnotations;

namespace WebApiperson.models
{
    public class Cotizaciones
    {
        [Key]
        public int Id_Cotizacion { get; set; }

        public string Nombre { get; set; }


        public string Fecha { get; set; }

        public string Unidad { get; set; }

        public string Responsable { get; set; }

        public string Telefono { get; set; }

        public string Correo { get; set; }


    }
}

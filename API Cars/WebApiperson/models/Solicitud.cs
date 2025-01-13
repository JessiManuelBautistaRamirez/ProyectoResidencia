using System.ComponentModel.DataAnnotations;

namespace WebApiperson.models
{
    public class Solicitud
    {
        [Key]
        public int Id_Solicitud { get; set; }

        public string Fecha_Solicitud { get; set; }

        public string Estado { get; set; }

        public string Correo { get; set; }

        public string Fecha_Encuentro { get; set; }

        public string Telefono { get; set; }

        public string Unidad { get; set; }

        public string Sucursal { get; set; }

        public string Cliente { get; set; }

        public string Responsable { get; set; }

    }
}

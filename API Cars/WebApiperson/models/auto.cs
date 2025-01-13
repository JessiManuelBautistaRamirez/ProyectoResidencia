using System.ComponentModel.DataAnnotations;

namespace WebApiperson.models
{
    public class auto
    {
        [Key]
        public int Id { get; set; }

        public string Nombre { get; set; }

        public string Kilometraje { get; set; }

        public string Precio { get; set; }

        public string Anio { get; set; }

        public string Version { get; set; }

        public string Trasmision { get; set; }

        public string Sucursal { get; set; }

        public string Stock { get; set; }

        public string Imagen { get; set; }

        public string Descripcion { get; set; }

    }
}

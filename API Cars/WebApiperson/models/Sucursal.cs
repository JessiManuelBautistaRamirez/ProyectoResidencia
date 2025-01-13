using System.ComponentModel.DataAnnotations;

namespace WebApiperson.models
{
    public class Sucursal
    {
        [Key]
        public int Id_Sucursal { get; set; }

        public string Ubicacion { get; set; }

    }
}

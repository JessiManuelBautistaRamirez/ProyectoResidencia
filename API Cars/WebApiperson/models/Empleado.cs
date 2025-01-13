using System.ComponentModel.DataAnnotations;

namespace WebApiperson.models
{
    public class Empleado
    {
        [Key]
        public int Id_Empleado { get; set; }

        public string Nombre { get; set; }

        public string Ap { get; set; }

        public string Am { get; set; }

        public string Correo { get; set; }

        public string Telefono { get; set; }

    }
}

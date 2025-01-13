using System.ComponentModel.DataAnnotations;

namespace WebApiperson.models
{
    public class Descripcion_auto
    {
        [Key]
        public int Id_Descripcion { get; set; }

        public string Star_Stop { get; set; }

        public string Num_Velocidades { get; set; }

        public string Caballos { get; set; }

        public string Peso { get; set; }

        public string Litros { get; set; }

        public string Aceleracion { get; set; }

        public string Cilindro { get; set; }

        public string Combustible { get; set; }

        public string Tipo_Motor { get; set; }

        public string Nombre { get; set; }

    }
}

using System.ComponentModel.DataAnnotations;

namespace WebApiperson.models
{
    public class person
    {
        [Key]
        public string Name { get; set; }
        public required string Email { get; set; }
        public required int Age { get; set; }
    }
}

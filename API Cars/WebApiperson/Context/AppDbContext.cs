using Microsoft.EntityFrameworkCore;
using WebApiperson.models;

namespace WebApiperson.Context
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options): base(options)
        {
            
        }

        //public DbSet<person> Persons { get; set; }
        public DbSet<auto> Auto { get; set; }
        public DbSet<Cliente> Cliente { get; set; }
        public DbSet<Cotizaciones> Cotizaciones { get; set; }
        public DbSet<Descripcion_auto> Descripcion_auto { get; set; }
        public DbSet<Empleado> Empleado { get; set; }
        public DbSet<Solicitud> Solicitud { get; set; }
        public DbSet<Sucursal> Sucursal { get; set; }









    }
}

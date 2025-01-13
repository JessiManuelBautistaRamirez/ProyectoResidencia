using Microsoft.EntityFrameworkCore;
using WebApiperson.Context;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// crear variable para la cadena de conexion
var connectionsString = builder.Configuration.GetConnectionString("connection");

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigins", policy =>
    {
        policy.WithOrigins("http://*") // Agregar los hosts permitidos
              .AllowAnyMethod() // Permitir todos los métodos (GET, POST, etc.)
              .AllowAnyHeader() // Permitir cualquier encabezado
              .AllowAnyOrigin();
    });
});


// registrar servicio para la conexion
builder.Services.AddDbContext<AppDbContext>
    (options => options.UseSqlServer(connectionsString)
    );
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsProduction())
{
    app.UseDeveloperExceptionPage();
}
app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();
app.UseCors("AllowSpecificOrigins");

app.UseAuthorization();

app.MapControllers();

app.Run();

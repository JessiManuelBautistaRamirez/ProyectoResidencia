using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiperson.Context;
using WebApiperson.models;

namespace WebApiperson.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CotizacionesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CotizacionesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Cotizaciones
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cotizaciones>>> GetCotizaciones()
        {
            return await _context.Cotizaciones.ToListAsync();
        }

        // GET: api/Cotizaciones/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cotizaciones>> GetCotizaciones(int id)
        {
            var cotizaciones = await _context.Cotizaciones.FindAsync(id);

            if (cotizaciones == null)
            {
                return NotFound();
            }

            return cotizaciones;
        }

        // PUT: api/Cotizaciones/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCotizaciones(int id, Cotizaciones cotizaciones)
        {
            if (id != cotizaciones.Id_Cotizacion)
            {
                return BadRequest();
            }

            _context.Entry(cotizaciones).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CotizacionesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Cotizaciones
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Cotizaciones>> PostCotizaciones(Cotizaciones cotizaciones)
        {
            _context.Cotizaciones.Add(cotizaciones);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCotizaciones", new { id = cotizaciones.Id_Cotizacion }, cotizaciones);
        }

        // DELETE: api/Cotizaciones/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCotizaciones(int id)
        {
            var cotizaciones = await _context.Cotizaciones.FindAsync(id);
            if (cotizaciones == null)
            {
                return NotFound();
            }

            _context.Cotizaciones.Remove(cotizaciones);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CotizacionesExists(int id)
        {
            return _context.Cotizaciones.Any(e => e.Id_Cotizacion == id);
        }
    }
}

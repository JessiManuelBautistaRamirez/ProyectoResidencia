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
    public class Descripcion_autoController : ControllerBase
    {
        private readonly AppDbContext _context;

        public Descripcion_autoController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Descripcion_auto
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Descripcion_auto>>> GetDescripcion_auto()
        {
            return await _context.Descripcion_auto.ToListAsync();
        }

        // GET: api/Descripcion_auto/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Descripcion_auto>> GetDescripcion_auto(int id)
        {
            var descripcion_auto = await _context.Descripcion_auto.FindAsync(id);

            if (descripcion_auto == null)
            {
                return NotFound();
            }

            return descripcion_auto;
        }

        // PUT: api/Descripcion_auto/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDescripcion_auto(int id, Descripcion_auto descripcion_auto)
        {
            if (id != descripcion_auto.Id_Descripcion)
            {
                return BadRequest();
            }

            _context.Entry(descripcion_auto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Descripcion_autoExists(id))
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

        // POST: api/Descripcion_auto
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Descripcion_auto>> PostDescripcion_auto(Descripcion_auto descripcion_auto)
        {
            _context.Descripcion_auto.Add(descripcion_auto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDescripcion_auto", new { id = descripcion_auto.Id_Descripcion }, descripcion_auto);
        }

        // DELETE: api/Descripcion_auto/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDescripcion_auto(int id)
        {
            var descripcion_auto = await _context.Descripcion_auto.FindAsync(id);
            if (descripcion_auto == null)
            {
                return NotFound();
            }

            _context.Descripcion_auto.Remove(descripcion_auto);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Descripcion_autoExists(int id)
        {
            return _context.Descripcion_auto.Any(e => e.Id_Descripcion == id);
        }
    }
}

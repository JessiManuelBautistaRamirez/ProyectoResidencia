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
    public class AutoController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AutoController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Auto
        [HttpGet]
        public async Task<ActionResult<IEnumerable<auto>>> GetAuto()
        {
            return await _context.Auto.ToListAsync();
        }

        // GET: api/Auto/5
        [HttpGet("{id}")]
        public async Task<ActionResult<auto>> Getauto(int id)
        {
            var auto = await _context.Auto.FindAsync(id);

            if (auto == null)
            {
                return NotFound();
            }

            return auto;
        }

        // PUT: api/Auto/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Putauto(int id, auto auto)
        {
            if (id != auto.Id)
            {
                return BadRequest();
            }

            _context.Entry(auto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!autoExists(id))
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

        // POST: api/Auto
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<auto>> Postauto(auto auto)
        {
            _context.Auto.Add(auto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getauto", new { id = auto.Id }, auto);
        }

        // DELETE: api/Auto/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deleteauto(int id)
        {
            var auto = await _context.Auto.FindAsync(id);
            if (auto == null)
            {
                return NotFound();
            }

            _context.Auto.Remove(auto);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool autoExists(int id)
        {
            return _context.Auto.Any(e => e.Id == id);
        }
    }
}

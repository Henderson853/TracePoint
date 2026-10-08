using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TracePointApi.Data;
using TracePointApi.Models;

namespace TracePointApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class InvestigationsController : ControllerBase
{
    private readonly TracePointDbContext _context;

    public InvestigationsController(TracePointDbContext context)
    {
        _context = context;
    }

    // POST: /api/investigations
    [HttpPost]
    public async Task<ActionResult<Investigation>> PostInvestigation(Investigation investigation)
    {
        // Set the start date automatically
        investigation.DateStarted = DateTime.UtcNow;

        _context.Investigations.Add(investigation);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetInvestigation), new { id = investigation.InvestigationId }, investigation);
    }

    // Optional helper so CreatedAtAction works
    [HttpGet("{id}")]
    public async Task<ActionResult<Investigation>> GetInvestigation(int id)
    {
        var investigation = await _context.Investigations.FindAsync(id);

        if (investigation == null)
            return NotFound();

        return investigation;
    }
}
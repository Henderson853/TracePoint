using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TracePointApi.Data;
using TracePointApi.Models;

namespace TracePointApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SuspectsController : ControllerBase
{
    private readonly TracePointDbContext _context;

    public SuspectsController(TracePointDbContext context)
    {
        _context = context;
    }

    // GET: /api/suspects
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Suspect>>> GetSuspects()
    {
        return await _context.Suspects.ToListAsync();
    }

    // GET: /api/suspects/1
    [HttpGet("{id}")]
    public async Task<ActionResult<Suspect>> GetSuspect(int id)
    {
        var suspect = await _context.Suspects.FindAsync(id);

        if (suspect == null)
            return NotFound();

        return suspect;
    }
}
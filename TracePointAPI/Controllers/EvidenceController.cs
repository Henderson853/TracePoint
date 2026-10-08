using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TracePointApi.Data;
using TracePointApi.Models;

namespace TracePointApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EvidenceController : ControllerBase
{
    private readonly TracePointDbContext _context;

    public EvidenceController(TracePointDbContext context)
    {
        _context = context;
    }

    // GET: /api/evidence
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Evidence>>> GetEvidence()
    {
        return await _context.Evidence.ToListAsync();
    }

    // GET: /api/evidence/1   ← routing constraint required by the assignment
    [HttpGet("{id:int}")]
    public async Task<ActionResult<Evidence>> GetEvidenceById(int id)
    {
        var evidence = await _context.Evidence.FindAsync(id);

        if (evidence == null)
            return NotFound();

        return evidence;
    }
}
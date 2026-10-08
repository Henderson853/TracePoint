using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TracePointApi.Data;
using TracePointApi.Models;

namespace TracePointApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CasesController : ControllerBase
{
    private readonly TracePointDbContext _context;

    public CasesController(TracePointDbContext context)
    {
        _context = context;
    }

    // GET: /api/cases
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Case>>> GetCases()
    {
        return await _context.Cases.ToListAsync();
    }

    // GET: /api/cases/1
    [HttpGet("{id}")]
    public async Task<ActionResult<Case>> GetCase(int id)
    {
        var caseItem = await _context.Cases.FindAsync(id);

        if (caseItem == null)
            return NotFound();

        return caseItem;
    }
}
using Microsoft.EntityFrameworkCore;
using TracePointApi.Models;

namespace TracePointApi.Data;

public class TracePointDbContext : DbContext
{
    public TracePointDbContext(DbContextOptions<TracePointDbContext> options)
        : base(options)
    {
    }

    public DbSet<Case> Cases { get; set; }
    public DbSet<Suspect> Suspects { get; set; }
    public DbSet<Evidence> Evidence { get; set; }
    public DbSet<Investigation> Investigations { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // ===== Seed Data =====

        modelBuilder.Entity<Case>().HasData(
            new Case
            {
                CaseId = 1,
                CaseName = "The Missing Prototype",
                Description = "A technology company has reported that an experimental prototype disappeared from its research laboratory between 22:00 and 00:00.",
                Status = "Open"
            }
        );

        modelBuilder.Entity<Suspect>().HasData(
            new Suspect
            {
                SuspectId = 1,
                Name = "Alex Morgan",
                Occupation = "Software Developer",
                Description = "Alex developed the software used by the prototype and had access to the laboratory."
            },
            new Suspect
            {
                SuspectId = 2,
                Name = "Jamie Smith",
                Occupation = "Security Officer",
                Description = "Jamie was responsible for security at the building on the night of the incident."
            },
            new Suspect
            {
                SuspectId = 3,
                Name = "Taylor Williams",
                Occupation = "Research Assistant",
                Description = "Taylor worked with the research team and had access to the laboratory during working hours."
            }
        );

        modelBuilder.Entity<Evidence>().HasData(
            new Evidence
            {
                EvidenceId = 1,
                Title = "Security Access Log",
                Description = "Jamie Smith's access card was used to enter the research laboratory at 23:41.",
                Location = "Security Office"
            },
            new Evidence
            {
                EvidenceId = 2,
                Title = "CCTV Report",
                Description = "CCTV footage shows a person entering the laboratory at approximately 23:43. The person's face cannot be clearly identified.",
                Location = "Research Laboratory"
            },
            new Evidence
            {
                EvidenceId = 3,
                Title = "Fingerprint Report",
                Description = "A partial fingerprint was found on the prototype storage cabinet. The fingerprint belongs to a person who regularly works in the laboratory.",
                Location = "Research Laboratory"
            },
            new Evidence
            {
                EvidenceId = 4,
                Title = "Email Message",
                Description = "An email sent shortly before the incident states: \"The prototype must be moved before tomorrow's demonstration.\"",
                Location = "Archive Room"
            },
            new Evidence
            {
                EvidenceId = 5,
                Title = "Photograph",
                Description = "A photograph taken after the incident shows that the prototype cabinet was open and the laboratory lights were switched off.",
                Location = "Research Laboratory"
            }
        );
    }
}
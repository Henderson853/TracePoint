using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace TracePointAPI.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cases",
                columns: table => new
                {
                    CaseId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CaseName = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Status = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cases", x => x.CaseId);
                });

            migrationBuilder.CreateTable(
                name: "Evidence",
                columns: table => new
                {
                    EvidenceId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Title = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Location = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Evidence", x => x.EvidenceId);
                });

            migrationBuilder.CreateTable(
                name: "Investigations",
                columns: table => new
                {
                    InvestigationId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CaseId = table.Column<int>(type: "INTEGER", nullable: false),
                    SuspectId = table.Column<int>(type: "INTEGER", nullable: false),
                    DateStarted = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Investigations", x => x.InvestigationId);
                });

            migrationBuilder.CreateTable(
                name: "Suspects",
                columns: table => new
                {
                    SuspectId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Occupation = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Suspects", x => x.SuspectId);
                });

            migrationBuilder.InsertData(
                table: "Cases",
                columns: new[] { "CaseId", "CaseName", "Description", "Status" },
                values: new object[] { 1, "The Missing Prototype", "A technology company has reported that an experimental prototype disappeared from its research laboratory between 22:00 and 00:00.", "Open" });

            migrationBuilder.InsertData(
                table: "Evidence",
                columns: new[] { "EvidenceId", "Description", "Location", "Title" },
                values: new object[,]
                {
                    { 1, "Jamie Smith's access card was used to enter the research laboratory at 23:41.", "Security Office", "Security Access Log" },
                    { 2, "CCTV footage shows a person entering the laboratory at approximately 23:43. The person's face cannot be clearly identified.", "Research Laboratory", "CCTV Report" },
                    { 3, "A partial fingerprint was found on the prototype storage cabinet. The fingerprint belongs to a person who regularly works in the laboratory.", "Research Laboratory", "Fingerprint Report" },
                    { 4, "An email sent shortly before the incident states: \"The prototype must be moved before tomorrow's demonstration.\"", "Archive Room", "Email Message" },
                    { 5, "A photograph taken after the incident shows that the prototype cabinet was open and the laboratory lights were switched off.", "Research Laboratory", "Photograph" }
                });

            migrationBuilder.InsertData(
                table: "Suspects",
                columns: new[] { "SuspectId", "Description", "Name", "Occupation" },
                values: new object[,]
                {
                    { 1, "Alex developed the software used by the prototype and had access to the laboratory.", "Alex Morgan", "Software Developer" },
                    { 2, "Jamie was responsible for security at the building on the night of the incident.", "Jamie Smith", "Security Officer" },
                    { 3, "Taylor worked with the research team and had access to the laboratory during working hours.", "Taylor Williams", "Research Assistant" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cases");

            migrationBuilder.DropTable(
                name: "Evidence");

            migrationBuilder.DropTable(
                name: "Investigations");

            migrationBuilder.DropTable(
                name: "Suspects");
        }
    }
}


namespace TracePointApi.Models
{
    public class Investigation
    {
        public int InvestigationId { get; set; }
        public int CaseId { get; set; }
        public int SuspectId { get; set; }
        public DateTime DateStarted { get; set; }
    }
}
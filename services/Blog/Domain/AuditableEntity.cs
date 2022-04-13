namespace Domain
{
    public class AuditableEntity
    {
        public DateTimeOffset Created { get; set; }

        public DateTimeOffset? LastModified { get; set; }
    }
}

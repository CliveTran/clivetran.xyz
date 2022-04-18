namespace Api.Dtos
{
    public class PostDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public string Summary { get; set; } = string.Empty;
        public int ViewCount { get; set; }
        public int Upvote { get; set; }
        public int Downvote { get; set; }
        public DateTimeOffset Created { get; set; }
        public DateTimeOffset? LastModified { get; set; }
    }
}

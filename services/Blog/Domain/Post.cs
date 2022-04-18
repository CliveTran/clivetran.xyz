namespace Domain
{
    public class Post : AuditableEntity
    {
        public int Id { get; set; }

        private string _title = string.Empty;

        public string Title
        {
            get { return _title; }
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("Title cannot be null.");
                }
                _title = value;
            }
        }

        private string _content = string.Empty;

        public string Content
        {
            get { return _content; }
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("Content cannot be null.");
                }
                _content = value;
            }
        }

        private string _summary = string.Empty;

        public string Summary
        {
            get { return _summary; }
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("Summary cannot be null.");
                }
                _summary = value;
            }
        }

        public int ViewCount { get; set; }
        public int Upvote { get; set; }
        public int Downvote { get; set; }
    }
}
namespace Domain
{
    public class Post
    {
        public int Id { get; set; }

        private string _title = string.Empty;

        private string _content = string.Empty;

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
    }
}
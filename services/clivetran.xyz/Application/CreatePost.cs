using Application.Interfaces;
using Domain;
using MediatR;

namespace Application
{
    public class CreatePost
    {
        public class Command : IRequest
        {
            public string Title { get; set; } = string.Empty;

            public string Content { get; set; } = string.Empty;
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly IPostRepository _postRepository;

            public Handler(IPostRepository postRepository)
            {
                _postRepository = postRepository ?? throw new ArgumentNullException(nameof(postRepository));
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var post = new Post { Title = request.Title, Content = request.Content };

                await _postRepository.CreatePost(post);

                return Unit.Value;
            }
        }
    }
}

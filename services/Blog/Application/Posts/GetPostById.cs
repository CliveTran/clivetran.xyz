using Application.Interfaces;
using Domain;
using MediatR;

namespace Application.Posts
{
    public class GetPostById
    {
        public class Query : IRequest<Post?>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Post?>
        {
            private readonly IPostRepository _postRepository;

            public Handler(IPostRepository postRepository)
            {
                _postRepository = postRepository ?? throw new ArgumentNullException(nameof(postRepository));
            }

            public async Task<Post?> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _postRepository.GetPostById(request.Id);
            }
        }
    }
}

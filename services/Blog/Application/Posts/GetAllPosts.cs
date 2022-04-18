using Application.Interfaces;
using Domain;
using MediatR;

namespace Application.Posts
{
    public class GetAllPosts
    {
        public class Query : IRequest<IEnumerable<Post>>
        {

        }

        public class Handler : IRequestHandler<Query, IEnumerable<Post>>
        {
            private readonly IPostRepository _postRepository;

            public Handler(IPostRepository postRepository)
            {
                _postRepository = postRepository ?? throw new ArgumentNullException(nameof(postRepository));
            }

            public async Task<IEnumerable<Post>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _postRepository.GetAllPosts();
            }
        }
    }
}

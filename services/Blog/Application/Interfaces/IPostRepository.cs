using Domain;

namespace Application.Interfaces
{
    public interface IPostRepository
    {
        Task CreatePost(Post post);
        Task<Post?> GetPostById(int id);
    }
}

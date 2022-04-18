using Api.Dtos;
using Application.Posts;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly ILogger<PostController> _logger;
        public PostController(IMediator mediator, ILogger<PostController> logger)
        {
            _mediator = mediator;
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> CreatePost([FromBody] CreatePostDto post)
        {
            await _mediator.Send(new CreatePost.Command { Title = post.Title, Content = post.Content, Summary = post.Summary });

            return Ok();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPostById(int id)
        {
            var post = await _mediator.Send(new GetPostById.Query { Id = id });

            if (post is null)
            {
                _logger.LogInformation($"Post with id={id} was not found.");
                return NotFound();
            }

            return Ok(new PostDto { 
                Title = post.Title, 
                Content = post.Content,
                Summary = post.Summary,
                ViewCount = post.ViewCount, 
                Upvote = post.Upvote, 
                Downvote = post.Downvote, 
                Created = post.Created, 
                LastModified = post.LastModified 
            });
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAllPosts()
        {
            var posts = await _mediator.Send(new GetAllPosts.Query());

            return Ok(posts.Select(p => { 
                return new PostDto {
                    Title = p.Title,
                    Content = p.Content,
                    Summary = p.Summary,
                    ViewCount = p.ViewCount,
                    Upvote = p.Upvote,
                    Downvote = p.Downvote,
                    Created = p.Created,
                    LastModified = p.LastModified
                }; 
            }).ToList());
        }
    }
}

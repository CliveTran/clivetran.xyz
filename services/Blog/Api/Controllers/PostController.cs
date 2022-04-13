using Api.Dtos;
using Application;
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
        public async Task<IActionResult> CreatePost([FromBody] PostDto post)
        {
            await _mediator.Send(new CreatePost.Command { Title = post.Title, Content = post.Content });

            return Ok();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAction(int id)
        {
            var post = await _mediator.Send(new GetPost.Query { Id = id });

            if (post is null)
            {
                _logger.LogInformation($"Post with id={id} was not found.");
                return NotFound();
            }

            return Ok(new PostDto { Title = post.Title, Content = post.Content });
        }
    }
}

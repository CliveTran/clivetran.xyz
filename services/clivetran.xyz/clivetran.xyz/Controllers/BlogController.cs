using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace clivetran.xyz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public BlogController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public string Test()
        {
            return _configuration.GetConnectionString("DefaultConnection");
        }
    }
}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace clivetran.xyz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        [HttpGet]
        public string Test()
        {
            return "Hello world.";
        }
    }
}

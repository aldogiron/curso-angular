using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class TestController: Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            var usuario = User.Identity.Name;
            return Ok();
        }
    }
}
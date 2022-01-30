using System.Threading.Tasks;
using Application.Profiles;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProfilesController : BaseAPIController
    {
        [HttpGet("{username}")]
        public async Task<IActionResult> GetProfile(string username)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Username = username }));
        }

        [HttpGet("{username}/books")]
        public async Task<IActionResult> GetUserBooks(string username)
        {
            return HandleResult(await Mediator.Send(new ListBooks.Query { Username = username }));
        }
    }
}
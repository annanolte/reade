using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Books;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BooksController : BaseAPIController
    {
        [HttpGet]
        public async Task<IActionResult> GetBooks()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
        
        [HttpGet("{id}")] 
        public async Task<IActionResult> GetBook(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }

        [HttpPost("{id}/save")]
        public async Task<IActionResult> Save(Guid id)
        {
            return HandleResult(await Mediator.Send(new UpdateReaders.Command{Id = id}));
        }

    }
}
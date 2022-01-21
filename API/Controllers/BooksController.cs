using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Books;
using Domain.obj;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [AllowAnonymous]
    public class BooksController : BaseAPIController
    {
        [HttpGet]
        public async Task<ActionResult<List<Book>>> GetBooks()
        {
            return await Mediator.Send(new List.Query());
        }
        
        [HttpGet("{id}")] // books/id
        public async Task<ActionResult<Book>> GetBook(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateBook(Book book) 
        {
            return Ok(await Mediator.Send(new Create.Command {Book = book}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditBook(Guid id, Book book)
        {
            book.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Book = book}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}
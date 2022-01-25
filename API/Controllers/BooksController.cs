using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Books;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class BooksController : BaseAPIController
    {
        [HttpGet]
        public async Task<ActionResult<List<BookDto>>> GetBooks()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
        
        [HttpGet("{id}")] // books/id
        public async Task<ActionResult<BookDto>> GetBook(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }

        [HttpPost]
        public async Task<IActionResult> CreateBook(Book book) 
        {
            return HandleResult(await Mediator.Send(new Create.Command {Book = book}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditBook(Guid id, Book book)
        {
            var result = 
            book.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Book = book}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }

        [HttpPost("{id}/save")]
        public async Task<IActionResult> Save(Guid id)
        {
            return HandleResult(await Mediator.Send(new UpdateReaders.Command{Id = id}));
        }

    }
}
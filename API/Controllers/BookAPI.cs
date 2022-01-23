using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Books;
using Google.Apis.Books.v1;
using Google.Apis.Books.v1.Data;
using Google.Apis.Services;

namespace API.Controllers
{
    public class BookAPI
    {
        private readonly BooksService _booksService;
        public BookAPI(string apiKey)
        {
            _booksService = new BooksService(new BaseClientService.Initializer()
            {
                ApiKey = apiKey,
                ApplicationName = this.GetType().ToString()
            });
        }
        public Tuple<int?, List<BookModel>> Search(string query, int offset, int count)
        {
            var listquery = _booksService.Volumes.List(query);
            listquery.MaxResults = count;
            listquery.StartIndex = offset;
            var res = listquery.Execute();
            var books = res.Items.Select(b => new BookModel
            {
                Id = b.Id,
                Title = b.VolumeInfo.Title,
                Subtitle = b.VolumeInfo.Subtitle,
                Description = b.VolumeInfo.Description,
                PageCount = b.VolumeInfo.PageCount,
            }).ToList();
            return new Tuple<int?, List<BookModel>>(res.TotalItems, books);
        }


        public static BooksService service = new BooksService(new BaseClientService.Initializer
        {
            ApplicationName = "my-project-338121",
            ApiKey = "AIzaSyDh7vEHPKU1Vx9mnldt-mL4qxG3FwuWtm4"
        });

        public static async Task<Volume> SearchISBN(string isbn)
        {
            var result = await service.Volumes.List(isbn).ExecuteAsync();
            if (result != null && result.Items != null)
            {
                var item = result.Items.FirstOrDefault();
                return item;
            }
            return null;
        }
    }
}
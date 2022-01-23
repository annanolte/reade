using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Interfaces;
using Microsoft.AspNetCore.Http;

namespace Application.Search
{
    public class GoogleBooksAccessor : IGoogleBookAccessor
    {
        public Task<GoogleBooksSearchResult> GetBook(IFormCollection query)
        {
            throw new NotImplementedException();
        }

        public Task<string> ViewBook(string id)
        {
            throw new NotImplementedException();
        }

    }
}
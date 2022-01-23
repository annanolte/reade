using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Search;
using Microsoft.AspNetCore.Http;

namespace Application.Interfaces
{
    public interface IGoogleBookAccessor
    {
        Task<GoogleBooksSearchResult> GetBook(IFormCollection query);
        Task<string> ViewBook(string id);
    }
}
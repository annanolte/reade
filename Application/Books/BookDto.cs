using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Profiles;

namespace Application.Books
{
    public class BookDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Authors { get; set; }
        public string ISBN { get; set; }
        public string Description { get; set; }
        public string PublishedDate { get; set; }
        public int PageCount { get; set; }
        public string Image { get; set; }
        public ICollection<Profile> Readers { get; set; }
    }
}
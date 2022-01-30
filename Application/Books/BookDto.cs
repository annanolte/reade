using System;
using System.Collections.Generic;
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
        public string PublishDate { get; set; }
        public int Pages { get; set; }
        public string Image_url { get; set; }
        public ICollection<Profile> Readers { get; set; }
    }
}
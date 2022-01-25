using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Book
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Title { get; set; }
        public string Authors { get; set; }
        public string ISBN { get; set; }
        public string Description { get; set; }
        public string PublishDate { get; set; } 
        public int? Pages { get; set; }
        public string Image_url { get; set; }
        public ICollection<BookReader> Readers { get; set;} = new List<BookReader>();
        public ICollection<Comment> Comments { get; set; } = new List<Comment>();
    }
}
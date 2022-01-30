using System;

namespace Domain
{
    public class BookReader
    {
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }
        public Guid BookId { get; set; }
        public Book Book { get; set; }
    }
}
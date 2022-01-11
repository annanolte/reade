using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain.obj
{
    public class Book
    {
        public Guid Id { get; set; } 
        public string Title { get; set; }
        public string Author { get; set; }
        public string ISBN { get; set; }
        public string Description { get; set; }
        public int Publication_year { get; set; } 
        public int Page_number { get; set; }
    }
}
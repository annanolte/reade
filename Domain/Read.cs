using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Read
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Authors { get; set; }
        public string ISBN { get; set; }
        public string Description { get; set; }
        public int Publication_date { get; set; }
        public int Page_number { get; set; }
        public string Image { get; set; }
        public string Comment { get; set; }

    }
}
using System;

namespace Application.Profiles
{
    public class UserBookDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Authors { get; set; }
        public string Image_url { get; set; }
        
    }
}
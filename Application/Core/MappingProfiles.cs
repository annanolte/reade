using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Books;
using Application.Profiles;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : AutoMapper.Profile
    {
        public MappingProfiles()
        {
            CreateMap<Book, Book>();
            CreateMap<Book, BookDto>();

            CreateMap<BookReader, Profiles.Profile>()
                .ForMember(d => d.Username, o => o.MapFrom(s => s.AppUser.UserName));

            CreateMap<BookReader, ReaderDto>()
                .ForMember(d => d.Username, o => o.MapFrom(s => s.AppUser.UserName));
            
            CreateMap<AppUser, Profiles.Profile>();
            
            CreateMap<BookReader, UserBookDto>()
                .ForMember(d => d.Id, o => o.MapFrom(s => s.Book.Id))
                .ForMember(d => d.Title, o => o.MapFrom(s => s.Book.Title))
                .ForMember(d => d.Authors, o => o.MapFrom(s => s.Book.Authors))
                .ForMember(d => d.Image_url, o => o.MapFrom(s => s.Book.Image_url));

            
        }
    }
}
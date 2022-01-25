using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Profiles
{
    public class ListBooks
    {
        public class Query : IRequest<Result<List<UserBookDto>>>
        {
            public string Username { get; set; }
        }
        public class Handler : IRequestHandler<Query, Result<List<UserBookDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }
            public async Task<Result<List<UserBookDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var query = _context.BookReaders
                    .Where(u => u.AppUser.UserName == request.Username)
                    .ProjectTo<UserBookDto>(_mapper.ConfigurationProvider)
                    .AsQueryable();
                    
                var books = await query.ToListAsync();
                return Result<List<UserBookDto>>.Success(books);
            }
        }
    }
}
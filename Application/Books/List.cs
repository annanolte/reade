using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using AutoMapper.QueryableExtensions;

namespace Application.Books
{
    public class List
    {
        public class Query : IRequest<List<BookDto>> { }

        public class Handler : IRequestHandler<Query, List<BookDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<List<BookDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var books = await _context.Books
                    .ProjectTo<BookDto>(_mapper.ConfigurationProvider)
                    .ToListAsync();

                return books;
            }
        }
    }
}
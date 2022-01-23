using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Books
{
    public class Details
    {
        public class Query : IRequest<BookDto>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, BookDto>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<BookDto> Handle(Query request, CancellationToken cancellationToken)
            {
                var book = await _context.Books
                    .ProjectTo<BookDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id);

                return book;
            }
        }
    }
}
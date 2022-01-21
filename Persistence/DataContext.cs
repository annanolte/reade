using Domain;
using Domain.obj;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Book> Books { get; set; }
        public DbSet<Favourite> Favourite { get; set; }
        public DbSet<Read> Read { get; set; }
        public DbSet<TBR> TBR { get; set; }
    }
}
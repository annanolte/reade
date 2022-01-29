using System.Collections.Generic;
using System.IO;
using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Book> Books { get; set; } 
        public DbSet<BookReader> BookReaders { get; set; }
        public DbSet<Comment> Comments { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<BookReader>(z => z.HasKey(aa => new {aa.AppUserId, aa.BookId}));

            builder.Entity<BookReader>()
                .HasOne(u => u.AppUser)
                .WithMany(a => a.Books)
                .HasForeignKey(aa => aa.AppUserId);

            builder.Entity<BookReader>()
                .HasOne(u => u.Book)
                .WithMany(a => a.Readers)
                .HasForeignKey(aa => aa.BookId);
            
            builder.Entity<Book>().HasData(SeedLargData());
            
        }

        public List<Book> SeedLargData()
        {
            var books = new List<Book>();
            using (StreamReader r = new StreamReader(@"..\Persistence\bookData.json"))
            {
                string json = r.ReadToEnd();
                books = JsonConvert.DeserializeObject<List<Book>>(json);
            }
            return books;
        }
    }
}
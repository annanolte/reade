using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Domain.obj;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser{UserName = "john", Email = "john@test.com"},
                    new AppUser{UserName = "jane", Email = "jane@test.com"}
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                } 
            }

            if (context.Books.Any()) return;
            
            var books = new List<Book>
            {
                new Book
                {
                    Title = "The Design of Everyday Things",
                    Authors = "Don Norman",
                    ISBN = "9780465050659",
                    Description = "lorem ipsum",
                    PublishedDate = "1988",
                    PageCount = 240,
                    Image = "https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg",
                },
                new Book
                {
                    Title = "Just Kids",
                    Authors = "Patti Smith",
                    ISBN = "006621131X",
                    Description = "lorem ipsum",
                    PublishedDate = "2010",
                    PageCount = 304,
                    Image = "https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg",
                },
                new Book
                {
                    Title = "Born Standing Up",
                    Authors = "Steve Martin",
                    ISBN = "1416553649",
                    Description = "lorem ipsum",
                    PublishedDate = "2007",
                    PageCount = 207,
                    Image = "https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg",
                },
                new Book
                {
                    Title = "A Pattern Language",
                    Authors = "Christopher Alexander et al.",
                    ISBN = "0195019199",
                    Description = "lorem ipsum",
                    PublishedDate = "1977",
                    PageCount = 1216,
                    Image = "https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg",
                },
                new Book
                {
                    Title = "The Girl with the Lower Back Tattoo",
                    Authors = "Amy Schumer",
                    ISBN = "1501139886",
                    Description = "lorem ipsum",
                    PublishedDate = "2016",
                    PageCount = 323,
                    Image = "https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg",
                },
                new Book
                {
                    Title = "How Buildings Learn",
                    Authors = "Stewart Brand",
                    ISBN = "0140139966",
                    Description = "lorem ipsum",
                    PublishedDate = "1994",
                    PageCount = 252,
                    Image = "https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg",
                },
                new Book
                {
                    Title = "Understanding Comics",
                    Authors = "Scott Mccloud",
                    ISBN = "006097625X",
                    Description = "lorem ipsum",
                    PublishedDate = "1993",
                    PageCount = 215,
                    Image = "https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg",
                }
            };

            await context.Books.AddRangeAsync(books);
            await context.SaveChangesAsync();
        }
    }
}
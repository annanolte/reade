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
                    Author = "Don Norman",
                    ISBN = "9780465050659",
                    Description = "lorem ipsum",
                    Publication_year = 1988,
                    Page_number = 240,
                },
                new Book
                {
                    Title = "Just Kids",
                    Author = "Patti Smith",
                    ISBN = "006621131X",
                    Description = "lorem ipsum",
                    Publication_year = 2010,
                    Page_number = 304,
                },
                new Book
                {
                    Title = "Born Standing Up",
                    Author = "Steve Martin",
                    ISBN = "1416553649",
                    Description = "lorem ipsum",
                    Publication_year = 2007,
                    Page_number = 207,
                },
                new Book
                {
                    Title = "A Pattern Language",
                    Author = "Christopher Alexander et al.",
                    ISBN = "0195019199",
                    Description = "lorem ipsum",
                    Publication_year = 1977,
                    Page_number = 1216,
                },
                new Book
                {
                    Title = "The Girl with the Lower Back Tattoo",
                    Author = "Amy Schumer",
                    ISBN = "1501139886",
                    Description = "lorem ipsum",
                    Publication_year = 2016,
                    Page_number = 323,
                },
                new Book
                {
                    Title = "How Buildings Learn",
                    Author = "Stewart Brand",
                    ISBN = "0140139966",
                    Description = "lorem ipsum",
                    Publication_year = 1994,
                    Page_number = 252,
                },
                new Book
                {
                    Title = "Understanding Comics",
                    Author = "Scott Mccloud",
                    ISBN = "006097625X",
                    Description = "lorem ipsum",
                    Publication_year = 1993,
                    Page_number = 215,
                },
                new Book
                {
                    Title = "The Artist's Way",
                    Author = "Julia Cameron",
                    ISBN = "1585421464",
                    Description = "lorem ipsum",
                    Publication_year = 1992,
                    Page_number = 237,
                },
                new Book
                {
                    Title = "Steal Like an Artist",
                    Author = "Austin Kleon",
                    ISBN = "0761169253",
                    Description = "lorem ipsum",
                    Publication_year = 2012,
                    Page_number = 160,
                },
                new Book
                {
                    Title = "The Gift",
                    Author = "Lewis Hyde",
                    ISBN = "0394715195",
                    Description = "lorem ipsum",
                    Publication_year = 1979,
                    Page_number = 327,
                }
            };

            await context.Books.AddRangeAsync(books);
            await context.SaveChangesAsync();
        }
    }
}
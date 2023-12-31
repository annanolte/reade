using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
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
                    new AppUser{UserName = "John", Email = "john@test.com"},
                    new AppUser{UserName = "Jane", Email = "jane@test.com"},
                    new AppUser{UserName = "Sally", Email = "sally@test.com"},
                    new AppUser{UserName = "Mark", Email = "mark@test.com"},
                    new AppUser{UserName = "Jeremy", Email = "jeremy@test.com"},
                    new AppUser{UserName = "Sophie", Email = "sophie@test.com"}
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
                            Id = new Guid("60cdae2e-99d6-47ec-b1ce-e50857783f31"),
                            Authors = "['Suzanne Collins']",
                            Description = "WINNING MEANS FAME AND FORTUNE.LOSING MEANS CERTAIN DEATH.THE HUNGER GAMES HAVE BEGUN. . . .In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and once girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.Sixteen-year-old Katniss Everdeen regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love.",
                            ISBN = "439023483",
                            Image_url = "https://images.gr-assets.com/books/1447303603m/2767052.jpg",
                            Pages = 374,
                            PublishDate = "09/14/08",
                            Title = "The Hunger Games (The Hunger Games, #1)"
                        },
                        new Book
                        {
                            Id = new Guid("87d96613-8001-4b7d-a8d0-71b9c07e5f01"),
                            Authors = "['J.K. Rowling', 'Mary GrandPré']",
                            Description = "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.After a lifetime of bottling up his magical powers, Harry finally feels like a normal kid. But even within the Wizarding community, he is special. He is the boy who lived: the only person to have ever survived a killing curse inflicted by the evil Lord Voldemort, who launched a brutal takeover of the Wizarding world, only to vanish after failing to kill Harry.Though Harry's first year at Hogwarts is the best of his life, not everything is perfect. There is a dangerous secret object hidden within the castle walls, and Harry believes it's his responsibility to prevent it from falling into evil hands. But doing so will bring him into contact with forces more terrifying than he ever could have imagined.Full of sympathetic characters, wildly imaginative situations, and countless exciting details, the first installment in the series assembles an unforgettable magical world and sets the stage for many high-stakes adventures to come.",
                            ISBN = "439554934",
                            Image_url = "https://images.gr-assets.com/books/1474154022m/3.jpg",
                            Pages = 309,
                            PublishDate = "11/01/03",
                            Title = "Harry Potter and the Sorcerer's Stone (Harry Potter, #1)"
                        },
                        new Book
                        {
                            Id = new Guid("ad27cc10-125b-4ba8-90d8-1365c3fb636c"),
                            Authors = "['Stephenie Meyer']",
                            Description = "About three things I was absolutely positive.\n\nFirst, Edward was a vampire.\n\nSecond, there was a part of him—and I didn't know how dominant that part might be—that thirsted for my blood.\n\nAnd third, I was unconditionally and irrevocably in love with him.\n\nDeeply seductive and extraordinarily suspenseful, Twilight is a love story with bite.",
                            ISBN = "316015849",
                            Image_url = "https://images.gr-assets.com/books/1361039443m/41865.jpg",
                            Pages = 501,
                            PublishDate = "09/06/06",
                            Title = "Twilight (Twilight, #1)"
                        },
                        new Book
                        {
                            Id = new Guid("2f08f81e-350a-4ba6-a348-a90d383721ed"),
                            Authors = "['Harper Lee']",
                            Description = "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.Compassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature.",
                            ISBN = "61120081",
                            Image_url = "https://images.gr-assets.com/books/1361975680m/2657.jpg",
                            Pages = 324,
                            PublishDate = "05/23/06",
                            Title = "To Kill a Mockingbird"
                        }           
            };

            await context.Books.AddRangeAsync(books);
            await context.SaveChangesAsync();
        }
    }
}
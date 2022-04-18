using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using DaviBook.Context;
using System;
using System.Linq;

namespace DaviBook.Models
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {

            using (var context = new DaviBookContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<DaviBookContext>>()))
            {
                // Look for any users.
                if (context.Users.Any())
                {
                    return;   // DB has been seeded
                }

                context.Users.AddRange(
                    new AppUser
                    {
                        UserName = "Test User 1",                
                        Email = "email1@outlook.com"
                    },

                    new AppUser
                    {
                        UserName = "Test User 2",
                        Email = "email2@outlook.com"
                    },

                    new AppUser
                    {
                        UserName = "Test User 3",
                        Email = "email3@outlook.com"
                    },

                    new AppUser
                    {
                        UserName = "Test User 4",
                        Email = "email4@outlook.com"
                    }
                );

                context.SaveChanges();

                /* Pending get User ID to seed (Posts, frienships)

                context.Posts.AddRange(
                       new Post
                       {
                           Title = "Test User 1",
                           Content = "Post Test Content",
                           CreatedDate = DateTime.Today,
                           UserID = 1
                       },

                      new Post
                      {
                          Title = "Test User 1",
                          Content = "Post Test Content",
                          CreatedDate = DateTime.Today,
                          UserID = 1
                      },

                       new Post
                       {
                           Title = "Test User 1",
                           Content = "Post Test Content",
                           CreatedDate = DateTime.Today,
                           UserID = 2
                       },

                       new Post
                       {
                           Title = "Test User 1",
                           Content = "Post Test Content",
                           CreatedDate = DateTime.Today,
                           UserID = 3
                       }
                   );

                context.SaveChanges();

                context.Friendships.AddRange(
                   new Friendship
                   {
                       UserOneId = 1,
                       UserTwoId = 2,
                       PendingUserTwo = false,
                       Friends = true
                   },

                   new Friendship
                   {
                       UserOneId = 1,
                       UserTwoId = 3,
                       PendingUserTwo = true,
                       Friends = false
                   },

                    new Friendship
                    {
                        UserOneId = 1,
                        UserTwoId = 4,
                        PendingUserTwo = false,
                        Friends = true
                    },

                    new Friendship
                    {
                        UserOneId = 2,
                        UserTwoId = 1,
                        PendingUserTwo = true,
                        Friends = false
                    }
               );

                context.SaveChanges();
                */
            }
        }
    }
}

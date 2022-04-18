using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using DaviBook.Models;

namespace DaviBook.Context
{
    // DBContext is derived from the IdentityDbContext
    public class DaviBookContext : IdentityDbContext<AppUser>
    {
        public DaviBookContext(DbContextOptions<DaviBookContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // many to many relationship on same model
            modelBuilder.Entity<Friendship>()
     .HasKey(f => new { f.UserOneId, f.UserTwoId });

            // 2 foreign keys in Friendship => specify inverse end in the entity they refer to
            modelBuilder.Entity<Friendship>()
                .HasOne(f => f.UserOne)
                .WithMany(mu => mu.MainUserFriends)
                .HasForeignKey(f => f.UserOneId).OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Friendship>()
                .HasOne(f => f.UserTwo)
                .WithMany(mu => mu.Friends)
                .HasForeignKey(f => f.UserTwoId);
        }

        public DbSet<Post> Posts { get; set; }
        public DbSet<Friendship> Friendships { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace DaviBook.Models
{
    public class AppUser : IdentityUser
    {
        // Add properties that are not defined in the IdentityUser class

        // collection navigation property
        public ICollection<Post> Posts { get; set; }

        public virtual ICollection<Friendship> MainUserFriends { get; set; }
        public virtual ICollection<Friendship> Friends { get; set; }

    }
}

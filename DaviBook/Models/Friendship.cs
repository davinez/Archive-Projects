using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DaviBook.Models
{
    // many to many
    public class Friendship
    {
        public string UserOneId { get; set; }
        public AppUser UserOne { get; set; }
        public string UserTwoId { get; set; }
        public AppUser UserTwo { get; set; }
        public bool PendingUserTwo { get; set; }
        public bool Friends { get; set; }

    }
}

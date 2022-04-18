using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using DaviBook.Context;
using DaviBook.Models;

namespace DaviBook.Controllers
{
    public class UsersController : Controller
    {
        private readonly DaviBookContext _context;

        public UsersController(DaviBookContext context)
        {
            _context = context;
        }

        // GET: Users/id
        public async Task<IActionResult> Index(string id)
        {

            // creates a LINQ query 
            var user = await _context.Users
                   // Include() to do eager loading of related entities
                   .Include(u => u.Posts)
                   .Where(u => u.Id == id)
                   .FirstOrDefaultAsync();

            if (user == null)
            {
                return NotFound();
            }

            foreach (var item in user.Posts)
            {
                Console.WriteLine(item.Title);
            }

            return View(user);

        }

        // GET: Users/Details/5
        public async Task<IActionResult> Details(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.Users
                .FirstOrDefaultAsync(m => m.Id == id);
            if (user == null)
            {
                return NotFound();
            }

            return View(user);
        }

        // GET: Users/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Users/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("UserId,Name,BirthDate,email")] AppUser user)
        {
            if (ModelState.IsValid)
            {
                _context.Add(user);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(user);
        }

        // GET: Users/Edit/5
        public async Task<IActionResult> Edit(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return View(user);
        }

        // POST: Users/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(string id, [Bind("UserId,Name,BirthDate,email")] AppUser user)
        {

            if (ModelState.IsValid)
            {
                var existItem = await _context.Set<AppUser>().FindAsync(user.Id);

                if (existItem == null)
                {
                    return NotFound();
                }
                else
                {
                    _context.Entry(existItem).CurrentValues.SetValues(user);
                    var result = await _context.SaveChangesAsync();
                }

                return RedirectToAction(nameof(Index));
            }
            return View(user);
        }

        // GET: Users/Delete/5
        public async Task<IActionResult> Delete(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.Users
                .FirstOrDefaultAsync(m => m.Id == id);
            if (user == null)
            {
                return NotFound();
            }

            return View(user);
        }

        // POST: Users/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {
            var user = await _context.Users.FindAsync(id);
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }


    }
}

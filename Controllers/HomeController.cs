using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyFirstASPNETWebApp.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MyFirstASPNETWebApp.Controllers
{
    //should i call this HomeController

    public class HomeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {

            return View();
        }

        [HttpGet]

        public IActionResult Calculator()
        {
            return View();
        }

        [HttpPost]

        public IActionResult Calculator(Calculator model)
        {
            return View();
        }
    }
}

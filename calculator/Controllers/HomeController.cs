using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using calculator.Models;

namespace calculator.Controllers

{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
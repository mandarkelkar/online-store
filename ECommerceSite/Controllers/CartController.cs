using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ECommerceSite.Controllers
{
    [Route("cart")]
    [ApiController]
    public class CartController : ControllerBase
    {
        public static List<Product> productlist = new List<Product>();

        // GET /cart
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return productlist;
        }

        // GET /cart/{total}
        [HttpGet("{total}")]
        public int Get(int total)
        {
            return (total <= 50) ? 10 : 20;
        }

        // POST /cart
        [HttpPost]
        public void Post([FromBody] Product value)
        {
            
            Console.WriteLine(value);
            productlist.Add(value);
        }

        // DELETE api/<CartController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            productlist.RemoveAll(items => items.Id == id);
        }
    }
}

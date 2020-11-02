using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ECommerceSite.Controllers
{

    [Route("[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        public static List<CartItem> OrderList = new List<CartItem>();
        // GET: api/<OrderController>
        [HttpGet]
        public IEnumerable<CartItem> Get()
        {
            return OrderList;
        }

        // POST api/<OrderController>
        [HttpPost]
        public void Post([FromBody] List<CartItem> finalOrder)
        {
            OrderList = finalOrder;

        }

    }
}

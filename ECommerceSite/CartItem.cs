using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceSite
{
    public class CartItem
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int Quantity{ get; set; }
        public int Price { get; set; }

        public CartItem (int id, int productId, string productName, int quantity, int price)
        {
            Id = id;
            ProductId = productId;
            ProductName = productName;
            Quantity = quantity;
            Price = price;
        }
    }

}

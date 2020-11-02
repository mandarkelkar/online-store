using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceSite
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
        public string ImgUrl { get; set; }

        public Product (int id, string name, string desc, int price, string imgurl)
        {
            Id = id;
            Name = name;
            Description = desc;
            Price = price;
            ImgUrl = imgurl;
        }
    }

}

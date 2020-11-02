using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace ECommerceSite.Controllers
{
    [Route("products")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return GetProducts();
        }

        public List<Product> GetProducts()
        {
            var products = new List<Product>();
            products.Add(new Product(12, "iPhone 12", "This is the latest iPhone from Apple in 2020.", 1500, "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1601620623000"));
            products.Add(new Product(8, "iPhone 8", "This is the Apple iPhone 8", 799, "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ72H1OXAN9qMk8CHPf-ad8Js7fBruZC2m0pZI9A4ev8lTQu8cTPwDdPJgBFQS30nyYvBwlKmY&usqp=CAc"));
            products.Add(new Product(20, "Galaxy S20", "This is the latest phone from Samsung this year.", 1400, "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3u-xunIVIMNvDq_ltHGm7OR-Yg-PniJcHusP52nQC9_J7luf54AYrmwGVV_ufHzGemw3JBPI&usqp=CAc"));
            products.Add(new Product(10, "Galaxy S10", "This is the Samsung Galaxy S10. This came out in 2019.", 899, "https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s10-128gb-green_1.jpg"));
            products.Add(new Product(5, "Google Pixel 5", "This is the latest phone from Google", 999, "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDjycIVc1560Z6QTyqyAeDdQHIzINRFcWVKHTvhx0vNd_O58YGNZPTPEsUq5-HFZxE4N9P4hBD&usqp=CAc"));
            products.Add(new Product(2, "iPhone 12 cover", "This is a cover for the latest iPhone 12", 20, "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvAUGTP9SxZ7nFmv5Joz1BOgbGB8maXS7_vIbnvUgUONNA_RsqBhGVE8QZbK1sL2VshCMDtU4&usqp=CAc"));

            return products;
        }
    }
}


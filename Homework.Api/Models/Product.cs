namespace Homework.Api.Models
{

    public interface IProduct
    {
        public int ID { get; set; }
        public string? Title { get; set; }
        public string? Brand { get; set; }
        public Decimal DiscountPercentage { get; set; }
        public Decimal Rating { get; set; }
        public Decimal Price { get; set; }
        public string? Description { get; set; }


    }
    public class Product : IProduct
    {
        public int ID { get; set; }
        public string? Title { get; set; }
        public string? Brand { get; set; }
        public Decimal DiscountPercentage { get; set; }
        public Decimal Rating { get; set; }
        public Decimal Price { get; set; }
        public string? Description { get; set; }
    }
}
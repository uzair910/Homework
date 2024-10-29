namespace Homework.Api.Models
{
    public class Product
    {
        public int ID { get; set; }
        public string? Title { get; set; }
        public string? Brand { get; set; }
        public Decimal DiscountPercentage { get; set; } 
        public Decimal Rating { get; set; }
    }
}
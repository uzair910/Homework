using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

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
        [JsonPropertyName(Constants.ID)]
        [Required]
        public int ID { get; set; }

        [JsonPropertyName(Constants.Title)]
        public string Title { get; set; }

        [JsonPropertyName(Constants.DiscountPercentage)]
        [Required]
        public decimal DiscountPercentage { get; set; }

        [JsonPropertyName(Constants.Rating)]
        [Required]
        public decimal Rating { get; set; }

        [JsonPropertyName(Constants.Brand)]
        public string Brand { get; set; }

        [JsonPropertyName(Constants.Price)]
        [Required]
        public decimal Price { get; set; }

        [JsonPropertyName(Constants.Description)]
        public string Description { get; set; }
    }
}
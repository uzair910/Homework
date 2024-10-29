using System.Text.Json;
using Homework.Api.Models; // Add a Models folder for Product model

namespace Homework.Api.Services
{
    // TODO: move this to IProductService file (gotta create that first)
    public interface IProductService
    {
        Task<List<Product>> GetProductsAsync();
    }


    public class ProductService : IProductService
    {
        
        private readonly HttpClient _httpClient;

        public ProductService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<List<Product>> GetProductsAsync()
        {
            var response = await _httpClient.GetAsync(Constants.ApiBaseUrl);
            response.EnsureSuccessStatusCode();
            var content = await response.Content.ReadAsStringAsync();
            // var result = JsonSerializer.Deserialize<ProductResponse>(content);
           
            // Good to check: Using Custom deserializer and extracting the properties that we need only.
            var jsonDoc = JsonDocument.Parse(content);
            if (jsonDoc == null) return null;

            var products = jsonDoc.RootElement.GetProperty(Constants.Products).EnumerateArray()
                .Select(p => new Product
                {
                    ID = p.GetProperty(Constants.ID).GetInt32(),
                    DiscountPercentage = p.GetProperty(Constants.DiscountPercentage).GetDecimal(),
                    Title = p.GetProperty(Constants.Title).GetString()             
                })
                .ToList();

            return products;
        }
    }
}
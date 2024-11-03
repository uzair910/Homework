using System.Text.Json;
using Homework.Api.Models; // Add a Models folder for Product model

namespace Homework.Api.Services
{
    public class DummyJSONProductService : IProductService
    {

        private readonly HttpClient _httpClient;

        public DummyJSONProductService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<List<IProduct>> GetProductsAsync()
        {
            var response = await _httpClient.GetAsync(Constants.DummyJSONApiBaseUrl);
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
                    Title = p.TryGetProperty(Constants.Title, out JsonElement titleElement) ? titleElement.GetString() : string.Empty, // lets not take a chance and use tryGet
                    DiscountPercentage = p.GetProperty(Constants.DiscountPercentage).GetDecimal(),
                    Rating = p.GetProperty(Constants.Rating).GetDecimal(),
                    Brand = p.TryGetProperty(Constants.Brand, out JsonElement brandElement) ? brandElement.GetString() : string.Empty,
                    Price = p.GetProperty(Constants.Price).GetDecimal(),
                    Description = p.TryGetProperty(Constants.Description, out JsonElement descriptionElement) ? descriptionElement.GetString() : string.Empty,
                    

                })
                .ToList();

            return products.Cast<IProduct>().ToList();;
        }
    }
}
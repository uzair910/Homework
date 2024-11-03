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
            var jsonDoc = JsonDocument.Parse(content);
            
             var products = jsonDoc.RootElement.GetProperty("products").Deserialize<Product[]>();
            return products.Cast<IProduct>().ToList(); ;
            
        }
    }
}
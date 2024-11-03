
using Homework.Api.Models; // Add a Models folder for Product model

namespace Homework.Api.Services
{
    public interface IProductService
    {
        Task<List<IProduct>> GetProductsAsync();
    }
}


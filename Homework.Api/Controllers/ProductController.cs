using Homework.Api.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Homework.Api.Services;
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductsController(IProductService productService)
    {
        _productService = productService;
    }
    [HttpGet]
    public async Task<ActionResult<List<IProduct>>> GetProducts([FromQuery] decimal? discountPercentage)
    {
        var products = await _productService.GetProductsAsync();
        if (discountPercentage.HasValue)
        {
            return Ok(products.Where(p => p.DiscountPercentage >= discountPercentage.Value).ToList());
        }
        else
        {
            return Ok(products);
        }
    }
}
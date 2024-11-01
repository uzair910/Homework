using Moq;
using Microsoft.AspNetCore.Mvc;
using Homework.Api.Models;
using Homework.Api.Services;

namespace Homework.Api.Tests;
[TestFixture]
public class ProductControllerTests
{
    private Mock<IProductService> _mockProductService;
    private ProductsController _controller;

    [SetUp]
    public void Setup()
    {
        _mockProductService = new Mock<IProductService>();
        _controller = new ProductsController(_mockProductService.Object);
    }

    [Test]
    public async Task GetProduct_ReturnsOkResult_WithProduct()
    {
        // Arrange
        var productId = 1;
        var mockProduct = new Product
        {
            ID = productId,
            Title = "Sample Product",
            Brand = "Apple",
            Description = "This is a sample product",
            Price = 100,
            Rating = 4.5M,
            DiscountPercentage = 10
        };

        var mockProducts = new List<IProduct> { mockProduct };

        _mockProductService.Setup(service => service.GetProductsAsync())
                           .ReturnsAsync(mockProducts);

        // Act
        var result = await _controller.GetProducts();

        // Assert
        Assert.IsInstanceOf<ActionResult<List<IProduct>>>(result);
        var actionResult = result as ActionResult<List<IProduct>>;
        Assert.NotNull(actionResult);

        // Access the Result property to get the actual list
        var okResult = actionResult.Result as OkObjectResult;
        Assert.NotNull(okResult);
        Assert.NotNull(okResult.Value);

        var products = okResult.Value as List<IProduct>;
        Assert.NotNull(products);
        Assert.AreEqual(1, products.Count); // Verify we have one product
        Assert.AreEqual(mockProduct, products[0]); // Verify the product is correct
    }
}
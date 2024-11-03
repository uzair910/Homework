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
        var mockProducts = new List<IProduct>
        {
            new Product { ID = 1, Title = "Product 1", Price = 10, DiscountPercentage = 0 },
            new Product { ID = 2, Title = "Product 2", Price = 20, DiscountPercentage = 10 },
            new Product { ID = 3, Title = "Product 3", Price = 30, DiscountPercentage = 20 },
        };
        _mockProductService.Setup(service => service.GetProductsAsync())
                           .ReturnsAsync(mockProducts);

        _controller = new ProductsController(_mockProductService.Object);
    }

    [Test]
    public async Task GetProducts_NoDiscountPercentage_ReturnsAllProducts()
    {
        // Act
        var result = await _controller.GetProducts(null);

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
        Assert.That(products.Count, Is.EqualTo(3));
    }

    [Test]
    public async Task GetProducts_WithDiscountPercentage_ReturnsFilteredProducts()
    {
        // Act
        var result = await _controller.GetProducts(10); // Pass discount percentage

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
        Assert.That(products.Count, Is.EqualTo(2));; // Verify we have filtered products
        Assert.That(products[0].ID, Is.EqualTo(2)); // Verify the first product is correct
        Assert.That(products[1].ID, Is.EqualTo(3)); // Verify the second product is correct
    }
}
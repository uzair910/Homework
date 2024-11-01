using Moq;
using Microsoft.AspNetCore.Mvc;
using Homework.Api.Models;
using Homework.Api.Services;

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
        var mockProduct = new Product { ID = productId, Title = "Sample Product", Brand = "Apple", Description = "This is a sample product", Price = 100, Rating = 4.5M, DiscountPercentage = 10 };
        var mockProducts = new List<Product> { mockProduct };
        _mockProductService.Setup(service => service.GetProductsAsync())
                   .ReturnsAsync(mockProducts);
        // Act
        var result = await  _controller.GetProducts();

        // Assert
        Assert.IsInstanceOf<ActionResult<List<Product>>>(result);
        var okResult = result as ActionResult<List<Product>>;
        Assert.NotNull(okResult);
        Assert.AreEqual(mockProduct, okResult.Value[0]);
    }
}
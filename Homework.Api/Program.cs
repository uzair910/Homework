var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddTransient<Homework.Api.Services.IProductService, Homework.Api.Services.ProductService>();
builder.Services.AddHttpClient();


var app = builder.Build();

// app.MapGet("/", () => "Hello World!");

// Configure the HTTP request pipeline
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
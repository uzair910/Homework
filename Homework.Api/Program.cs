var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddTransient<Homework.Api.Services.IProductService, Homework.Api.Services.ProductService>();
builder.Services.AddHttpClient();

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost3000", policy =>
    {
        policy.WithOrigins("http://localhost:3000") // Allow only your React app
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline
app.UseHttpsRedirection();

// Enable CORS for requests
app.UseCors("AllowLocalhost3000");

app.UseAuthorization();

app.MapControllers();

app.Run();
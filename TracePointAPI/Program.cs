using Microsoft.EntityFrameworkCore;
using TracePointApi.Data;
using TracePointApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<TracePointDbContext>(options =>
    options.UseSqlite(
        builder.Configuration.GetConnectionString("DefaultConnection")
    ));

builder.Services.AddControllers();

builder.Services.AddOpenApi();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod();
        
        policy.WithOrigins("https://9pwwf25t-5173.inc1.devtunnels.ms")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors("AllowFrontend");

app.UseAuthorization();

app.MapControllers();
app.MapGet("/", () => "TracePoint API is running");

app.Run();
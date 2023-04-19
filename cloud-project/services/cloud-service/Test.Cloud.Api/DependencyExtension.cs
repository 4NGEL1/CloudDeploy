namespace Test.Cloud.Api
{
    /// <summary>
    /// DependencyExtension static.
    /// </summary>
    public static class DependencyExtension
    {
        /// <summary>
        /// Config application.
        /// </summary>
        /// <param name="webApplication">WebApplicationBuilder.</param>
        /// <returns>WebApplication.</returns>
        public static WebApplication AppConfiguration(this WebApplicationBuilder webApplication)
        {
            webApplication.AddPlaceholderResolver();
            webApplication.Host.UseSerilog();
            webApplication.Services.AddControllers();
            webApplication.Services.AddFacade();
            webApplication.Services.AddPersistence(webApplication.Configuration);
            webApplication.Services.AddServices();
            webApplication.Services.AddAutoMapper();
            webApplication.Services.AddEndpointsApiExplorer();
            webApplication.Services.AddSwaggerGen();
            webApplication.Services.AddApplicationInsightsTelemetry();

            webApplication.Services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", build =>
                {
                    build.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                    build.WithOrigins("http://localhost:8080").AllowAnyMethod().AllowAnyHeader().AllowCredentials();
                });
            });

            return webApplication.Build();
        }

        /// <summary>
        /// Use application.
        /// </summary>
        /// <param name="app">WebApplicationBuilder.</param>
        /// <returns>WebApplication.</returns>
        public static WebApplication UseApplication(this WebApplication app)
        {
            app.UseSwagger();
            app.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/v1/swagger.json", "Microservice");
                options.RoutePrefix = string.Empty;
            });
            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.MapControllers();
            app.UseCors("CorsPolicy");
            return app;
        }
    }
}

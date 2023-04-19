namespace Test.Cloud.Persistence
{
    /// <summary>
    /// DependencyExtension class.
    /// </summary>
    public static class DependencyExtension
    {
        /// <summary>
        /// Method that extend IServiceCollection to IoC.
        /// </summary>
        /// <param name="services">Service collection startup.</param>
        /// <param name="configuration">Configuration startup.</param>
        /// <returns>Service collection.</returns>
        public static IServiceCollection AddPersistence(
            this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContextPool<DatabaseContext>(options =>
            {
                options.UseMySql(
                    configuration.GetConnectionString(nameof(DatabaseContext)),
                    ServerVersion.AutoDetect(configuration.GetConnectionString(nameof(DatabaseContext))),
                    options =>
                    {
                        options.EnableRetryOnFailure(
                            maxRetryCount: 10,
                            maxRetryDelay: TimeSpan.FromSeconds(30),
                            errorNumbersToAdd: null);
                    });
            });

            services.AddScoped<ITestsDao, TestsDao>();
            return services;
        }
    }
}
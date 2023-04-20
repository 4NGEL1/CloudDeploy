
namespace Test.Cloud.Facade
{
    /// <summary>
    /// DependencyExtension class.
    /// </summary>
    public static class DependencyExtension
    {
        /// <summary>
        /// Method that extend IServiceCollection.
        /// </summary>
        /// <param name="services">Service collection startup.</param>
        /// <returns>Service collection.</returns>
        public static IServiceCollection AddFacade(this IServiceCollection services)
        {
            services.AddTransient<IUserFacade, UserFacade>();
            services.AddTransient<IPhraseFacade, PhraseFacade>();
            return services;
        }
    }
}
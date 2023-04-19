
namespace Test.Cloud.Services.Tests
{
    /// <summary>
    /// Service USer.
    /// </summary>
    public interface IServiceUser
    {
        Task<ResultDto> User(User user);
    }
}

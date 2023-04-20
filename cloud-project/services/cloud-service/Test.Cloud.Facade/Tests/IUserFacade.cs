namespace Test.Cloud.Facade.Tests
{
    public interface IUserFacade
    {
        Task<ResultDto> User(User user);
    }
}

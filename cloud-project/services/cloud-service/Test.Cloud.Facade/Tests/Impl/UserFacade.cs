namespace Test.Cloud.Facade.Tests.Impl
{
    public class UserFacade : IUserFacade
    {
        private readonly IServiceUser serviceUser;

        public UserFacade(IServiceUser serviceUser)
        {
            this.serviceUser = serviceUser;
        }

        public async Task<ResultDto> User(User user)
        {
            return await this.serviceUser.User(user);
        }
    }
}

namespace Test.Cloud.Services.Tests.Impl
{
    public class ServiceUser : IServiceUser
    {
        private readonly ITestsDao testDao;

        public ServiceUser(ITestsDao testDao)
        {
            this.testDao = testDao;
        }

        public async Task<ResultDto> User(User user)
        {
            var responseUser = await this.testDao.GetUser(user.Email);

            if (responseUser == null)
            {
                var responseCreate = await this.testDao.InsertUser(user);
                return ServiceUtilities.CreateResponse(responseCreate);
            }

            var responseUpdate = await this.testDao.Update(user.Email);

            return ServiceUtilities.CreateResponse(responseUpdate);
        }
    }
}

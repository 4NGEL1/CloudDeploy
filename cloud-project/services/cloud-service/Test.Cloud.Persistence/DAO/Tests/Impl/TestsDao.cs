using System.Net;

namespace Test.Cloud.Persistence.DAO.Tests.Impl
{
    /// <summary>
    /// Class TestsDao.
    /// </summary>
    public class TestsDao : ITestsDao
    {
        private readonly DatabaseContext context;

        /// <summary>
        /// Initializes a new instance of the <see cref="TestsDao"/> class.
        /// </summary>
        /// <param name="context">DataBase Context.</param>
        public TestsDao(DatabaseContext context)
        {
            ArgumentNullException.ThrowIfNull(context);
            this.context = context;
        }

        public async Task<User> GetUser(string email)
        {
            return await this.context.User.FindAsync(email);
        }

        public async Task<bool> InsertUser(User user)
        {
            var response = await this.context.User.AddAsync(user);
            bool result = response.State.Equals(EntityState.Added);
            await this.context.SaveChangesAsync();
            return result;
        }

        public async Task<bool> Update(string email)
        {
            var response = await this.context.User.FindAsync(email);
            if (response != null)
            {
                response.Contador = response.Contador + 1;
                return await this.context.SaveChangesAsync() > 0;
            }

            return false;
        }
    }
}

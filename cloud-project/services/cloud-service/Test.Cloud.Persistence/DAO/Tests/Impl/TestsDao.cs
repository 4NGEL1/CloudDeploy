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
    }
}

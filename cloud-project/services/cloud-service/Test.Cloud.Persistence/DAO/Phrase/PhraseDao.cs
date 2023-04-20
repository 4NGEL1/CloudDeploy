
namespace Test.Cloud.Persistence.DAO.Phrase
{
    public class PhraseDao : IPhraseDao
    {
        private readonly DatabaseContext context;

        /// <summary>
        /// Initializes a new instance of the <see cref="TestsDao"/> class.
        /// </summary>
        /// <param name="context">DataBase Context.</param>
        public PhraseDao(DatabaseContext context)
        {
            ArgumentNullException.ThrowIfNull(context);
            this.context = context;
        }

        public async Task<bool> DeletePhrase(int id)
        {
            var delete = await this.GetPhrase(id);
            this.context.Frases.Remove(delete);
            return await this.context.SaveChangesAsync() > 0;
        }

        public async Task<long> GetAll()
        {
            return await this.context.Frases.LongCountAsync();
        }

        public async Task<PhraseModel> GetPhrase(int id)
        {
            return await this.context.Frases.FindAsync(id);
        }

        public async Task<bool> InsertPhrase(PhraseModel phrase)
        {
            var response = await this.context.Frases.AddAsync(phrase);
            bool result = response.State.Equals(EntityState.Added);
            await this.context.SaveChangesAsync();
            return result;
        }
    }
}


namespace Test.Cloud.Persistence.DAO.Phrase
{
    public interface IPhraseDao
    {
        Task<PhraseModel> GetPhrase(int id);

        Task<bool> InsertPhrase(PhraseModel user);

        Task<bool> DeletePhrase(int id);

        Task<long> GetAll();
    }
}

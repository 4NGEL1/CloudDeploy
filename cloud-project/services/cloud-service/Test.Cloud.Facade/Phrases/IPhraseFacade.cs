
namespace Test.Cloud.Facade.Phrases
{
    public interface IPhraseFacade
    {
        Task<ResultDto> GetPhrase();

        Task<ResultDto> InsertPhrase(PhraseModel phrase);

        Task<ResultDto> DeletePhrase(int id);
    }
}

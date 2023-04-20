
namespace Test.Cloud.Services.Phrases
{
    public interface IPhraseService
    {
        Task<ResultDto> GetPhrase();

        Task<ResultDto> PostPhrase(PhraseModel id);

        Task<ResultDto> DeletePhrase(int id);
    }
}

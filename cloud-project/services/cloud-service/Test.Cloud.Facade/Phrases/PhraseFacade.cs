
namespace Test.Cloud.Facade.Phrases
{
    public class PhraseFacade : IPhraseFacade
    {
        private readonly IPhraseService phraseService;

        public PhraseFacade(IPhraseService phraseService)
        {
            this.phraseService = phraseService;
        }

        public async Task<ResultDto> DeletePhrase(int id)
        {
            return await this.phraseService.DeletePhrase(id);
        }

        public async Task<ResultDto> GetPhrase()
        {
            return await this.phraseService.GetPhrase();
        }

        public async Task<ResultDto> InsertPhrase(PhraseModel phrase)
        {
            return await this.phraseService.PostPhrase(phrase);
        }
    }
}

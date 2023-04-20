
namespace Test.Cloud.Services.Phrases
{
    public class PhraseService : IPhraseService
    {
        private readonly IPhraseDao phraseDao;

        public PhraseService(IPhraseDao phraseDao)
        {
            this.phraseDao = phraseDao;
        }

        public async Task<ResultDto> DeletePhrase(int id)
        {
            var response = await phraseDao.DeletePhrase(id);

            return ServiceUtilities.CreateResponse(response);
        }

        public async Task<ResultDto> GetPhrase()
        {
            int count = (int)await this.phraseDao.GetAll();
            Random rnd = new Random();
            int search = rnd.Next(0, count + 1);

            var response = await this.phraseDao.GetPhrase(search);

            return ServiceUtilities.CreateResponse(response);
        }

        public async Task<ResultDto> PostPhrase(PhraseModel id)
        {
            var response = await this.phraseDao.InsertPhrase(id);

            return ServiceUtilities.CreateResponse(response);
        }
    }
}

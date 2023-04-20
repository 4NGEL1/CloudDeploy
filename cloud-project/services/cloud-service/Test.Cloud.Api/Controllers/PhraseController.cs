
namespace Test.Cloud.Api.Controllers
{
    /// <summary>
    /// TestsController class.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class PhraseController : Controller
    {
        private readonly IPhraseFacade phraseFacade;

        public PhraseController(IPhraseFacade phraseFacade)
        {
            this.phraseFacade = phraseFacade;
        }

        [Route("/phrase")]
        [HttpPost]
        public async Task<IActionResult> UserAction([FromBody] PhraseModel phrase)
        {
            var response = await this.phraseFacade.InsertPhrase(phrase);
            return this.Ok(response);
        }

        [Route("/phrase")]
        [HttpGet]
        public async Task<IActionResult> GetPhrase()
        {
            var response = await this.phraseFacade.GetPhrase();
            return this.Ok(response);
        }

        [Route("/phrase")]
        [HttpDelete]
        public async Task<IActionResult> DeletePhrase(int id)
        {
            var response = await this.phraseFacade.DeletePhrase(id);
            return this.Ok(response);
        }
    }
}

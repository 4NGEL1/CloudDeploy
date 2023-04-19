namespace Test.Cloud.Api.Controllers
{
    /// <summary>
    /// TestsController class.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class TestsController : ControllerBase
    {
        private readonly IUserFacade userFacade;

        /// <summary>
        /// Initializes a new instance of the <see cref="TestsController"/> class.
        /// </summary>
        /// <param name="userFacade">User facade.</param>
        public TestsController(IUserFacade userFacade)
        {
            this.userFacade = userFacade;
        }

        [Route("/user")]
        [HttpPost]
        public async Task<IActionResult> UserAction([FromBody]User user)
        {
            var response = await this.userFacade.User(user);
            return this.Ok(response);
        }

        /// <summary>
        /// Method Ping.
        /// </summary>
        /// <returns>Pong.</returns>
        [Route("ping")]
        [HttpGet]
        public IActionResult Ping()
        {
            return this.Ok("Pong");
        }
    }
}

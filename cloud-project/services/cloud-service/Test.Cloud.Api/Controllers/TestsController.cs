namespace Test.Cloud.Api.Controllers
{
    /// <summary>
    /// TestsController class.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class TestsController : ControllerBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TestsController"/> class.
        /// </summary>
        /// <param name="testsFacade">User Facade.</param>
        public TestsController()
        {
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

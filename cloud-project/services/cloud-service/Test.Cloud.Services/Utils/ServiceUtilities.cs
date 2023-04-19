
namespace Test.Cloud.Services.Utils
{
    public static class ServiceUtilities
    {
        public static ResultDto CreateResponse(object response)
        {
            return new ResultDto
            {
                Success = true,
                Response = response,
                Message = string.Empty
            };
        }
    }
}

namespace Test.Cloud.Services.Mapping
{
    /// <summary>
    /// Class AutoMapperProfile.
    /// </summary>
    public class AutoMapperProfile : Profile
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="AutoMapperProfile"/> class.
        /// </summary>
        public AutoMapperProfile()
        {
            this.CreateMap<DateTime, string>().ConvertUsing(date => date.ToString("yyyy-MM-ddTHH:mm:ss.fff"));
            this.CreateMap<string, DateTime>().ConvertUsing(dateStr => DateTime.Parse(dateStr));
        }
    }
}

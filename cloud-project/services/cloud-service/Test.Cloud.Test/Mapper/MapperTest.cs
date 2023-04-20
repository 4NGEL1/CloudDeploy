using Test.Cloud.Services.Mapping;

namespace Test.Cloud.Test.Mapper
{
    /// <summary>
    /// Class ProjectServiceTest.
    /// </summary>
    [TestFixture]
    public class MapperTest
    {
        /// <summary>
        /// Validate if mapper configuration is valid.
        /// </summary>
        [Test]
        public void ValidateMapperConfig()
        {
            var mappingConfig = new MapperConfiguration(mc => { mc.AddProfile(new AutoMapperProfile()); });

            // mappingConfig.AssertConfigurationIsValid();
            IMapper mapper = mappingConfig.CreateMapper();

            var fecha = "2022-02-25T00:00:00.000";
            Type typeDateType = typeof(DateTime);

            var result = mapper.Map<DateTime>(fecha);
            Type typeDateType2 = result.GetType();
            Assert.AreEqual(typeDateType, typeDateType2);
        }
    }
}

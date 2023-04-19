namespace Test.Cloud.Model.Entities.Common
{
    /// <summary>
    /// The user.
    /// </summary>
    public class User
    {
        [Key]
        public string Email { get; set; }

        [Column]
        public string Name { get; set; }

        [Column]
        public int Contador { get; set; }
    }
}

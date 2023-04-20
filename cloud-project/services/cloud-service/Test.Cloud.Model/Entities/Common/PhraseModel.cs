namespace Test.Cloud.Model.Entities.Common
{
    [Table("Frases")]
    public class PhraseModel
    {
        [Key]
        public int Id { get; set; }

        [Column]
        public string Frase { get; set; }

        [Column]
        public string Autor { get; set; }
    }
}

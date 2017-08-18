using MainModule.Domain;
using System.Collections.Generic;

namespace MainModule.Builder
{
    public class DetailViewModel
    {
        #region Constructeur
        public DetailViewModel()
        {
            Answers = new List<Answer>();
        }
        #endregion

        public Quota Quota { get; set; }

        public DetailedQuestion Question { get; set; }

        public List<Answer> Answers { get; set; }
    }
}

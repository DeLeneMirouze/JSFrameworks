using MainModule.Domain;
using System.Collections.Generic;

namespace MainModule.Builder
{
    public class QuestionsViewModel
    {
        #region Constructeur
        public QuestionsViewModel()
        {
            Questions = new List<Question>();
        } 
        #endregion

        public Quota Quota { get; set; }

        public List<Question> Questions { get; set; }
    }
}

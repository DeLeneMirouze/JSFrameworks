#region using
using MainModule.Domain;
using MainModule.Repository;
using MainModule.Tools;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
#endregion

namespace MainModule.Builder
{
    public class StackExchangeViewModelBuilder : IStackExchangeViewModelBuilder
    {
        #region Constructeur
        IStackExchangeRepository _stackExchangeRepository;

        public StackExchangeViewModelBuilder(IStackExchangeRepository stackExchangeRepository)
        {
            _stackExchangeRepository = stackExchangeRepository;
        }
        #endregion

        #region AllQuestions
        public async Task<QuestionsViewModel> AllQuestions(string sort = "activity", string order = "desc")
        {
            string json = await _stackExchangeRepository.AllQuestions(sort, order);

            QuestionsViewModel vm = new QuestionsViewModel();
            vm.Questions = Deserializer.DeserializeList<Question>(json);
            vm.Quota = Deserializer.DeserializeQuota(json);

            return vm;
        }
        #endregion

        #region Search
        public async Task<QuestionsViewModel> Search(SearchContext searchContext, string sort = "activity", string order = "desc")
        {
            string json = await _stackExchangeRepository.Search(searchContext, sort, order);

            QuestionsViewModel vm = new QuestionsViewModel();
            vm.Questions = Deserializer.DeserializeList<Question>(json);
            vm.Quota = Deserializer.DeserializeQuota(json);

            return vm;
        }
        #endregion

        #region Details
        /// <summary>
        /// Obtient le détail d'une question
        /// </summary>
        /// <param name="idQuestion">Id de la question</param>
        /// <returns></returns>
        public async Task<DetailViewModel> Details(int idQuestion)
        {
            DetailViewModel vm = new DetailViewModel();

            // obtient la réponse détaillée
            string json = await _stackExchangeRepository.QuestionById(idQuestion);
            List<DetailedQuestion> questions = Deserializer.DeserializeList<DetailedQuestion>(json);
            vm.Question = questions.FirstOrDefault();

            // obtient les commentaires sur la question
            json = await _stackExchangeRepository.CommentsToAQuestion(idQuestion);
            vm.Question.Comments = Deserializer.DeserializeList<Comment>(json);

            // obtient les réponses à la question
            json = await _stackExchangeRepository.AnswersToAQuestion(idQuestion);
            vm.Answers = Deserializer.DeserializeList<Answer>(json);

            // obtient les commentaires pour chaque réponse
            foreach (Answer answer in vm.Answers)
            {
                json = await _stackExchangeRepository.CommentsToAnAnswer(answer.Id);
                answer.Comments = Deserializer.DeserializeList<Comment>(json);
            }
 
            vm.Quota = Deserializer.DeserializeQuota(json);

            return vm;
        }
        #endregion
    }
}

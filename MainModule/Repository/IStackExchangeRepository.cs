using System.Threading.Tasks;
using MainModule.Domain;

namespace MainModule.Repository
{
    /// <summary>
    /// Repository pour accéder à StackOverflow
    /// </summary>
    public interface IStackExchangeRepository
    {
        Task<string> AllQuestions(string sort = "activity", string order = "desc");
        Task<string> Search(SearchContext searchContext, string sort, string order);
        Task<string> AnswersToAQuestion(int idQuestion);
        Task<string> CommentsToAQuestion(int idQuestion);
        Task<string> QuestionById(int idQuestion);
        Task<string> CommentsToAnAnswer(int idAnswer);
    }
}

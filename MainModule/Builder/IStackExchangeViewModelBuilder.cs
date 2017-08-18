using MainModule.Domain;
using System.Threading.Tasks;

namespace MainModule.Builder
{
    public interface IStackExchangeViewModelBuilder
    {
        Task<QuestionsViewModel> AllQuestions(string sort = "activity", string order = "desc");
        Task<QuestionsViewModel> Search(SearchContext searchContext, string sort = "activity", string order = "desc");
        Task<DetailViewModel> Details(int idQuestion);
    }
}

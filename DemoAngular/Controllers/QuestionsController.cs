#region using
using MainModule.Builder;
using MainModule.Domain;
using MainModule.Repository;
using MainModule.Tools;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Threading.Tasks;
#endregion

namespace DemoAngular.Controllers
{
    public class QuestionsController : BaseController
    {
        #region Constructeur
        public QuestionsController(IOptions<StackExchange> stackExchange, IStackExchangeViewModelBuilder stackExchangeViewModelBuilder) 
            : base(stackExchange, stackExchangeViewModelBuilder)
        {
        } 
        #endregion

        /// <summary>
        /// Liste de questions
        /// </summary>
        /// <param name="sort"></param>
        /// <param name="order"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("/api/questions")]
        public async Task<QuestionsViewModel> Get(string sort = "activity", string order = "desc")
        {
            QuestionsViewModel vm = await StackExchangeViewModelBuilder.AllQuestions(sort, order);
            return vm;
        }

        /// <summary>
        /// Recherche parmi les questions
        /// </summary>
        /// <param name="searchContext"></param>
        /// <param name="sort"></param>
        /// <param name="order"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("/api/search")]
        public async Task<QuestionsViewModel> Get(SearchContext searchContext, string sort = "activity", string order = "desc")
        {
            QuestionsViewModel vm = await StackExchangeViewModelBuilder.Search(searchContext, sort, order);
            return vm;
        }

        /// <summary>
        /// Détails d'une question
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("/api/questions/{idQuestion:int}")]
        public async Task<DetailViewModel> Get(int idQuestion)
        {
            DetailViewModel vm = await StackExchangeViewModelBuilder.Details(idQuestion);
            return vm;
        }
    }
}

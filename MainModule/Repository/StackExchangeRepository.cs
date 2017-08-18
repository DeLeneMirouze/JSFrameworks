#region using
using MainModule.Tools;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using MainModule.Domain;
#endregion

namespace MainModule.Repository
{
    /// <summary>
    /// Repository pour accéder à StackOverflow
    /// </summary>
    public sealed class StackExchangeRepository : IStackExchangeRepository
    {
        #region Constructeur
        StackExchange _stackExchange { get; set; }

        public StackExchangeRepository(IOptions<StackExchange> stackExchange)
        {
            _stackExchange = stackExchange.Value;
        }
        #endregion

        #region AllQuestions
        public async Task<string> AllQuestions(string sort = "activity", string order="desc")
        {
            string pathUrl = $"/questions?order={order}&sort={sort}&pagesize=10";
            string json = await RequestApi(pathUrl);
            return json;
        }
        #endregion

        #region Search
        public async Task<string> Search(SearchContext searchContext, string sort, string order)
        {
            string pathUrl = $"/search?order={order}&sort={sort}";
            if (searchContext != null)
            {
                if (!string.IsNullOrWhiteSpace(searchContext.Text))
                {
                    pathUrl += $"&intitle={searchContext.Text}";
                }

                if (searchContext.FromDate.HasValue)
                {
                    pathUrl += $"&fromdate={searchContext.FromDate.Value}";
                }

                if (searchContext.ToDate.HasValue)
                {
                    pathUrl += $"&todate={searchContext.ToDate.Value}";
                }
            }

            string json = await RequestApi(pathUrl);
            return json;
        }
        #endregion

        #region AnswersToAQuestion
        /// <summary>
        /// Obtient toutes les réponses à une question
        /// </summary>
        /// <param name="idQuestion"></param>
        /// <returns></returns>
        public async Task<string> AnswersToAQuestion(int idQuestion)
        {
            string pathUrl = $"/questions/{idQuestion}/answers?filter=withbody";
            string json = await RequestApi(pathUrl);
            return json;
        }
        #endregion

        #region CommentsToAQuestion
        /// <summary>
        /// Obtient tous les commentaires à une question
        /// </summary>
        /// <param name="idQuestion"></param>
        /// <returns></returns>
        public async Task<string> CommentsToAQuestion(int idQuestion)
        {
            string pathUrl = $"/questions/{idQuestion}/comments?filter=withbody";
            string json = await RequestApi(pathUrl);
            return json;
        }
        #endregion

        #region CommentsToAnAnswer
        /// <summary>
        /// Obtient tous les commentaires à une réponse
        /// </summary>
        /// <param name="idAnswer"></param>
        /// <returns></returns>
        public async Task<string> CommentsToAnAnswer(int idAnswer)
        {
            string pathUrl = $"/answers/{idAnswer}/comments?filter=withbody";
            string json = await RequestApi(pathUrl);
            return json;
        }
        #endregion

        #region QuestionById
        public async Task<string> QuestionById(int idQuestion)
        {
            string pathUrl = $"/questions/{idQuestion}?filter=withbody";

            string json = await RequestApi(pathUrl);
            return json;
        }
        #endregion

        #region RequestApi (private)
        private async Task<String> RequestApi(string pathUrl)
        {
            if (pathUrl == null)
            {
                pathUrl = string.Empty;
            }

            if (!pathUrl.Contains("?"))
            {
                pathUrl += "?";
            }
            else
            {
                pathUrl += "&";
            }
            pathUrl += $"site={_stackExchange.Site}&key={_stackExchange.Key}";

            using (HttpClient client = GetClient(_stackExchange))
            {
                HttpResponseMessage message = await client.GetAsync(pathUrl);

                if (message.IsSuccessStatusCode)
                {
                    string json = await message.Content.ReadAsStringAsync();
                    return json;
                }

                throw new InvalidOperationException(message.ReasonPhrase);
            }
        } 
        #endregion

        #region GetClient (private)
        /// <summary>
        /// Obtient un client HttpClient
        /// </summary>
        /// <returns></returns>
        private HttpClient GetClient(StackExchange stackExchange)
        {
            HttpClient client = new HttpClient();

            string host = Constantes.Endpoints.StackExchange + stackExchange.Version;
            client.BaseAddress = new Uri(host);

            return client;
        }
        #endregion
    }
}

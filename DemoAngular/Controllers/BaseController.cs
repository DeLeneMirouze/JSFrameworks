#region using
using MainModule.Builder;
using MainModule.Tools;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
#endregion

namespace DemoAngular.Controllers
{
    /// <summary>
    /// Classe de base des contrôleurs
    /// </summary>
    public abstract class BaseController : Controller
    {
        #region Constructeur
        protected readonly IStackExchangeViewModelBuilder StackExchangeViewModelBuilder;

        public BaseController(IOptions<StackExchange> stackExchange, IStackExchangeViewModelBuilder stackExchangeViewModelBuilder)
        {
            StackExchange = stackExchange.Value;
            StackExchangeViewModelBuilder = stackExchangeViewModelBuilder;
        } 
        #endregion

        protected StackExchange StackExchange { get; set; }
    }
}



namespace MainModule.Domain
{
    public class SearchContext
    {
        public int? ToDate { get; set; }
        public int? FromDate { get; set; }
        public string Text { get; set; }

        #region Hasvalue
        public bool Hasvalue()
        {
            bool testResult = false;

            if (!string.IsNullOrWhiteSpace(Text))
            {
                testResult = true;
            }
            if (ToDate.HasValue && ToDate.Value > 0)
            {
                testResult = true;
            }
            if (FromDate.HasValue && FromDate.Value > 0)
            {
                testResult = true;
            }

            return testResult;
        } 
        #endregion
    }
}

using System.Diagnostics;

namespace MainModule.Domain
{
    [DebuggerDisplay("{Title}")]
    public sealed class DetailedQuestion : Question
    {
        public string Body { get; set; }
        public int Score { get; set; }
    }
}

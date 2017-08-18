using Newtonsoft.Json;

namespace MainModule.Domain
{
    public class Quota
    {
        [JsonProperty(PropertyName = "quota_max")]
        public int Max { get; set; }

        [JsonProperty(PropertyName = "quota_remaining")]
        public int Remaining { get; set; }
        public bool has_more { get; set; }
    }
}

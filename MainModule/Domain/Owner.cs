using Newtonsoft.Json;
using System.Diagnostics;

namespace MainModule.Domain
{
    [DebuggerDisplay("{Name}")]
    public class Owner
    {
        [JsonProperty(PropertyName = "user_id")]
        public int Id { get; set; }

        [JsonProperty(PropertyName = "profile_image")]
        public string AvatarUrl { get; set; }

        [JsonProperty(PropertyName = "display_name")]
        public string Name { get; set; }

        public int Reputation { get; set; }
    }
}

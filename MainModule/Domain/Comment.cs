using MainModule.Tools;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MainModule.Domain
{
    public class Comment
    {
        [JsonProperty(PropertyName = "comment_id")]
        public int Id { get; set; }

        [JsonProperty(PropertyName = "post_id")]
        public int QuestionId { get; set; }

        public Owner Owner { get; set; }

        [JsonProperty(PropertyName = "reply_to_user")]
        public Owner Replyer { get; set; }

        [JsonProperty(PropertyName = "creation_date")]
        [JsonConverter(typeof(MicrosecondEpochConverter))]
        public DateTime CreationDate { get; set; }

        public string Body { get; set; }
    }
}

using MainModule.Tools;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace MainModule.Domain
{
    public class Answer
    {
        #region Constructor
        public Answer()
        {
            Comments = new List<Comment>();
        } 
        #endregion

        [JsonProperty(PropertyName = "answer_id")]
        public int Id { get; set; }

        [JsonProperty(PropertyName = "question_id")]
        public int IdQuestion { get; set; }

        public string Body { get; set; }

        public Owner Owner { get; set; }

        [JsonProperty(PropertyName = "is_accepted")]
        public bool IsAccepted { get; set; }

        [JsonProperty(PropertyName = "creation_date")]
        [JsonConverter(typeof(MicrosecondEpochConverter))]
        public DateTime CreationDate { get; set; }

        public int Score { get; set; }

        public List<Comment> Comments { get; set; }
    }
}

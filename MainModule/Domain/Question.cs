#region using
using MainModule.Tools;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
#endregion

namespace MainModule.Domain
{
    [DebuggerDisplay("{Title}")]
    public class Question
    {
        #region Constructor
        public Question()
        {
            Comments = new List<Comment>();
        } 
        #endregion

        [JsonProperty(PropertyName = "question_id")]
        public int Id { get; set; }

        public string[] Tags { get; set; }

        public Owner Owner { get; set; }
        public int Score { get; set; }

        public int? Accepted_answer_id { get; set; }
        public string Title { get; set; }

        [JsonProperty(PropertyName = "is_answered")]
        public bool IsAnswered { get; set; }

        [JsonProperty(PropertyName = "view_count")]
        public int Views { get; set; }

        [JsonProperty(PropertyName = "answer_count")]
        public int Answers { get; set; }

        [JsonProperty(PropertyName = "creation_date")]
        [JsonConverter(typeof(MicrosecondEpochConverter))]
        public DateTime CreationDate { get; set; }

        [JsonProperty(PropertyName = "last_activity_date")]
        [JsonConverter(typeof(MicrosecondEpochConverter))]
        public DateTime LastActivity { get; set; }

        public List<Comment> Comments { get; set; }
    }
}

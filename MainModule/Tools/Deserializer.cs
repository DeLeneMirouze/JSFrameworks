#region using
using MainModule.Domain;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic; 
#endregion

namespace MainModule.Tools
{
    /// <summary>
    /// Utilitaires de désérialisation
    /// </summary>
    public static class Deserializer
    {
        #region DeserializeList
        /// <summary>
        /// Désérialise une liste de T
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static List<T> DeserializeList<T>(string json)  where T:new()
        {
            List<T> items = new List<T>();

            JArray jarray = (JArray)(JObject.Parse(json))["items"];
            foreach (JToken arrayItem in jarray)
            {
                T item = JsonConvert.DeserializeObject<T>(arrayItem.ToString());

                items.Add(item);
            }

            return items;
        }
        #endregion

        #region DeserializeQuota
        public static Quota DeserializeQuota(string json)
        {
            JObject jobject = JObject.Parse(json);

            Quota quota = new Quota();
            quota.Max = jobject["quota_max"].Value<int>();
            quota.Remaining = jobject["quota_remaining"].Value<int>();

            return quota;
        }
        #endregion
    }
}

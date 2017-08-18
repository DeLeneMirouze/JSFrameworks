using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;

namespace MainModule.Tools
{
    /*
     * https://stackoverflow.com/questions/19971494/how-to-deserialize-a-unix-timestamp-%ce%bcs-to-a-datetime
     * */

    public class MicrosecondEpochConverter: DateTimeConverterBase
    {
        private static readonly DateTime _epoch = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);

        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            writer.WriteRawValue(((DateTime)value - _epoch).TotalMilliseconds + "000");
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            if (reader.Value == null) { return null; }
            return _epoch.AddMilliseconds((long)reader.Value / 1000d);
        }
    }
}

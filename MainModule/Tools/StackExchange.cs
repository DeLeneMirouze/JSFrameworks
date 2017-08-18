namespace MainModule.Tools
{
    public sealed class StackExchange
    {
        /// <summary>
        /// Clef d'authentification
        /// </summary>
        public string Key { get; set; }

        /// <summary>
        /// Site requêté
        /// </summary>
        public string Site { get; set; }

        /// <summary>
        /// Version de l'Api StackExchange
        /// </summary>
        public string Version { get; set; }
    }
}

namespace VuePlanning.Models
{
    public class PokerMessage
    {
        public PokerMessage(string connectionId, string message)
        {
            ConnectionId = connectionId;
            Message = message;
        }
        public string ConnectionId { get; }
        public string Message { get; }
    }
}
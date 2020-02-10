using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VuePlanning.Models
{
    public class UserDetails
    {
        public UserDetails(string connectionId, string name, string groupId)
        {
            ConnectionId = connectionId;
            Name = name;
            GroupId = groupId;
            Host = false;
        }
        public bool Host { get; set; }
        public string ConnectionId { get; set; }
        public string Name { get; set; }
        public string GroupId { get; set; }
    }

    public class UserAnswer
    {
        public string ConnectionId { get; set; }
        public string Answer { get; set; }
    }
}

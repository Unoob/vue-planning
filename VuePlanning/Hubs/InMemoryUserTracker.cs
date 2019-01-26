using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using VuePlanning.Models;

namespace VuePlanning.Hubs
{

    public class InMemoryUserTracker<THub> : IUserTracker<THub>
    {
        private readonly ConcurrentDictionary<string, UserDetails> _usersOnline = new ConcurrentDictionary<string, UserDetails>();

        public event Action<UserDetails[]> UsersJoined;
        public event Action<UserDetails[]> UsersLeft;

        public Task<IEnumerable<UserDetails>> UsersOnline() => Task.FromResult(_usersOnline.Values.AsEnumerable());

        public Task<IEnumerable<UserDetails>> UsersOnline(string groupId)
        {
            return Task.FromResult(_usersOnline.Values.Where(u => u.GroupId == groupId).AsEnumerable());
        }

        public Task<UserDetails> GetGroupHost(string groupId)
        {
            var user = _usersOnline.Values.FirstOrDefault(s => s.GroupId == groupId && s.Host);
            if (user == null)
            {
                user = new UserDetails(string.Empty, string.Empty, groupId);
            }
            return Task.FromResult(user);
        }
        public Task<UserDetails> GetUser(string connectionId)
        {
            var user = _usersOnline.Values.FirstOrDefault(u => u.ConnectionId == connectionId);

            if (user == null)
            {
                user = new UserDetails(connectionId, string.Empty, string.Empty);
            }

            return Task.FromResult(user);
        }

        public Task AddUser(string connectionId, UserDetails userDetails)
        {
            _usersOnline.TryAdd(connectionId, userDetails);
            UsersJoined(new[] { userDetails });

            return Task.CompletedTask;
        }

        public Task UpdateUser(string connectionId, UserDetails userDetails)
        {
            _usersOnline.AddOrUpdate(connectionId, userDetails, (oldKey, oldValue) => userDetails);

            return Task.CompletedTask;
        }

        public Task RemoveUser(string connectionId)
        {
            if (_usersOnline.TryRemove(connectionId, out var userDetails))
            {
                UsersLeft(new[] { userDetails });
            }

            return Task.CompletedTask;
        }

    }
}

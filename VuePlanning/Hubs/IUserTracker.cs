using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using VuePlanning.Models;

namespace VuePlanning.Hubs
{
    public interface IUserTracker<out THub>
    {
        Task<IEnumerable<UserDetails>> UsersOnline();
        Task<UserDetails> GetUser(string connectionId);
        Task AddUser(string connectionId, UserDetails userDetails);
        Task UpdateUser(string connectionId, UserDetails userDetails);
        Task RemoveUser(string connectionId);

        event Action<UserDetails[]> UsersJoined;
        event Action<UserDetails[]> UsersLeft;
    }
}
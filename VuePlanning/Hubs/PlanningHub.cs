﻿using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using VuePlanning.Models;

namespace VuePlanning.Hubs
{
    public class PlanningHub : HubWithPresence
    {
        // tutaj będą metody typowo związane z glosowaniem w planning pokera
        public PlanningHub(IUserTracker<PlanningHub> userTracker) : base(userTracker)
        {
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            var user = await _userTracker.GetUser(Context.ConnectionId);

            await Groups.RemoveFromGroupAsync(Context.ConnectionId, user.GroupId);

            var host = await _userTracker.GetGroupHost(user.GroupId);

            await Clients.Client(host.ConnectionId).SendAsync(HubEvents.LeaveGroup, user);

            await base.OnDisconnectedAsync(exception);
        }

        public override async Task OnConnectedAsync()
        {
            await base.OnConnectedAsync();
        }

        public override async Task OnUsersLeft(UserDetails[] users)
        {
            var user = await _userTracker.GetUser(Context.ConnectionId);

            var host = await _userTracker.GetGroupHost(user.GroupId);

            await Clients.Client(host.ConnectionId).SendAsync(HubEvents.Disconnected, user);

            await base.OnUsersLeft(users);
        }
        public async Task CreateGroup(GroupMessage groupMessage)
        {
            var user = await _userTracker.GetUser(Context.ConnectionId);
            user.Name = groupMessage.PlayerName;
            user.Host = true;
            var groupId = groupMessage?.GroupId ?? user.GroupId;
            user.GroupId = groupId;

            await _userTracker.UpdateUser(Context.ConnectionId, user);
            await Clients.Client(Context.ConnectionId).SendAsync(HubEvents.UpdateUser, user);
        }
        public async Task SendAnswer(string message)
        {
            var user = await _userTracker.GetUser(Context.ConnectionId);

            var groupId = user.GroupId;

            var host = await _userTracker.GetGroupHost(groupId);

            await Clients.Client(host.ConnectionId).SendAsync(HubEvents.SendAnswer, new UserAnswer
            {
                ConnectionId = user.ConnectionId,
                Answer = message
            });
        }

        public async Task NewGame(string question)
        {
            var user = await _userTracker.GetUser(Context.ConnectionId);
            await Clients.Group(user.GroupId).SendAsync(HubEvents.NewGame, question);
        }

        public async Task JoinGroup(GroupMessage groupMessage)
        {
            var user = await _userTracker.GetUser(Context.ConnectionId);
            user.Name = groupMessage.PlayerName;

            var groupId = groupMessage?.GroupId ?? user.GroupId;
            user.GroupId = groupId;

            await _userTracker.UpdateUser(Context.ConnectionId, user);
            await Groups.AddToGroupAsync(Context.ConnectionId, groupId);

            await Clients.Client(Context.ConnectionId).SendAsync(HubEvents.UpdateUser, user);

            var host = await _userTracker.GetGroupHost(groupId);

            await Clients.Client(host.ConnectionId).SendAsync(HubEvents.UsersJoined, user);
        }

        public async Task LeaveGroup()
        {
            var user = await _userTracker.GetUser(Context.ConnectionId);

            await Groups.RemoveFromGroupAsync(Context.ConnectionId, user.GroupId);

            var host = await _userTracker.GetGroupHost(user.GroupId);

            await Clients.Client(host.ConnectionId).SendAsync(HubEvents.LeaveGroup, user);

            await _userTracker.RemoveUser(Context.ConnectionId);
        }
    }
}

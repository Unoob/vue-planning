using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using System.Collections.Concurrent;

namespace VuePlanning.Hubs
{
    public class UserDetail
    {
        string ConnetionId { get; set; }
        string Nick { get; set; }
        int ChannelId { get; set; } // kanal do ktorego dolaczyl - kilka zespolow moze planować równoczesnie. Pytanie czy skorzystać tu z SIgnalRowego GroupId ??
        //string Email { get; set; } - dla potrzeb ankiety na KGD.
    }

    /// <summary>
    /// Klasa bazowa dla hubow, gdzie bedziemy obslugiwać polaczenia i rozlaczenia z listy uzytkownikow i przylaczenia do kanalow.
    /// </summary>
    public class BaseHub : Hub
    {
        // Dictionary< connectionId, Uzytkownik >
        ConcurrentDictionary<string, UserDetail> memoryUserOnline;

        public IEnumerable<UserDetail> GetAllUsers()
        {
            return memoryUserOnline.Values;
        }

        public override Task OnConnectedAsync()
        {
            // dodanie do slownika uzytkownika i powiadomienie wszystkich, że nowy się pojawił. (toster?)
            Clients.All.SendAsync("onConnectNewUser", Context.UserIdentifier);
            return base.OnConnectedAsync();            
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            //TODO: wykreślenie z kolekcji memoryUserList uzytkownika oraz rozeslanie nowej listy do wszystkich.
            return base.OnDisconnectedAsync(exception);
        }
    }


    public class PlanningHub : BaseHub
    {
        // tutaj będą metody typowo związane z glosowaniem w planning pokera
    }

    //public class AnkietaHub : BaseHub
}

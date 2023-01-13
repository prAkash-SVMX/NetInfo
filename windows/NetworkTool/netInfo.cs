using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Text;
using System.Threading.Tasks;
using Microsoft.ReactNative.Managed;
namespace NetworkTool
{
    [ReactModule]
    public class NetInfo
    {
        [ReactMethod("getNetInfo")]
        public bool GetNetInfo()
        {
            bool isInternetConnected = NetworkInterface.GetIsNetworkAvailable();
            AddEvent(isInternetConnected);
            return isInternetConnected;
        }

        [ReactEvent]
        public Action<bool> AddEvent { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Text;
using System.Threading.Tasks;
using Microsoft.ReactNative.Managed;
using Windows.Networking.Connectivity;

namespace NetworkTool
{
    [ReactModule]
    public class NetInfo
    {
        [ReactMethod("getNetInfo")]
        public string GetNetInfo()
        {
            bool isInternetConnected = NetworkInterface.GetIsNetworkAvailable();
            ConnectionProfile InternetConnectionProfile = NetworkInformation.GetInternetConnectionProfile();
            bool isWLANConnection = (InternetConnectionProfile == null) ? false : InternetConnectionProfile.IsWlanConnectionProfile;


            string wifi = "" + isWLANConnection;
            string isInternet = "" + isInternetConnected;


            bool ismobile = (InternetConnectionProfile == null) ? false : InternetConnectionProfile.IsWwanConnectionProfile;
            string mobile = "" + ismobile;

            var connectionCost = NetworkInformation.GetInternetConnectionProfile().GetConnectionCost();
            string connection = "" + connectionCost.NetworkCostType;
            internetetInfo internetetInfo = new internetetInfo(isInternet, wifi, connection);

            if (connectionCost.NetworkCostType == NetworkCostType.Unknown
        || connectionCost.NetworkCostType == NetworkCostType.Unrestricted) {
                //Connection cost is unknown/unrestricted
            }
            else {
                //Metered Network
            }


            AddEvent(internetetInfo);
            return "\n     "+internetetInfo.isInternetConnected+ "\n     " + internetetInfo.isWifi+ "\n     " + internetetInfo.connectCost;
        }

        [ReactEvent]
        public Action<object> AddEvent { get; set; }
    }
}

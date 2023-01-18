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
    internal partial class NetworkInfo
    {


        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1009:DeclareEventHandlersCorrectly", Justification = "API matches Windows.Networking.Connectivity.NetworkingInformation.")]
        public event NetworkStatusChangedEventHandler networkStatusCallback;
        public NetworkInfo()
        {
            networkStatusCallback = new NetworkStatusChangedEventHandler(OnNetworkStatusChanged);
            NetworkInformation.NetworkStatusChanged += networkStatusCallback;
        }



        [ReactEvent("networkStatusDidChange")]
        public Action<JSValue> NetworkStatusChanged { get; set; }


        public void OnNetworkStatusChanged(object ignored)
        {
            try {
                var connectivity = CreateConnectivityEventMap();

                NetworkStatusChanged?.Invoke(connectivity);
            }
            catch (Exception ex) {

            }

        }

        [ReactMethod("getCurrentState")]
        public void getCurrentState(ReactPromise<JSValue> promise)
        {
            promise.Resolve(CreateConnectivityEventMap());
        }

        public bool GetIsConnected()
        {
            var profile = NetworkInformation.GetInternetConnectionProfile();

            if (profile != null) {
                return profile.GetNetworkConnectivityLevel() != NetworkConnectivityLevel.None;
            }
            else {
                return false;
            }
        }
        private JSValueObject CreateConnectivityEventMap()
        {
            var eventMap = new JSValueObject();
            try {
                // Add the connection type information


                // Add the connection state information
                var isConnected = GetIsConnected();
                eventMap.Add("isConnected", isConnected);

                // Add the details, if there are any

            }
            catch (Exception ex) {

            }

            return eventMap;
        }

    }
}

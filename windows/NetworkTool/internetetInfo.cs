namespace NetworkTool
{
    internal class internetetInfo
    {
       public string isInternetConnected;
       public string isWifi;
       public string connectCost;

      public internetetInfo(string isInternetConnected,string isWifi,string connectCost)
        {
            this.isInternetConnected = isInternetConnected;
            this.isWifi = isWifi;
            this.connectCost = connectCost;
        }

    }
}
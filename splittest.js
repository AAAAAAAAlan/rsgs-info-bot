//Rank#70Player count80/80Address212.109.217.39:7787 (Game Port) 212.109.217.39:27165 (Query Port)StatusonlineDistance1 kmCountryUptime7 Days: 80%, 30 Days: 93%Downtime HistoryMapNarva AAS v1Game ModeAASLicensed ServerTrue, Licensed

var parsedinfo = "Rank#70Player count80/80Address212.109.217.39:7787 (Game Port) 212.109.217.39:27165 (Query Port)StatusonlineDistance1 kmCountryUptime7 Days: 80%, 30 Days: 93%Downtime HistoryMapNarva AAS v1Game ModeAASLicensed ServerTrue, Licensed";

var status = parsedinfo.split("Status")[1].split("Distance")[0];
console.log(status);
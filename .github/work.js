var yahoo=['NSE%3ANIFTY-INDEX','NSE%3ANIFTYBANK','NSE%3AFINIFTY-INDEX','MCX:CRUDEOIL23OCTFUT'];
 
  
  
  var chart=['NSE%3AFINNIFTY23SEPFUT','NSE%3ABANKNIFTY23SEPFUT','NSE%3ANIFTY23SEPFUT',"MCX-CRUDEOILMV2023"];
  
  
 var csv= ["bank", "finance", "pharma", "auto", "commodities", "fmcg", "infra", "it", "realty", "media", "mnc", "energy", "metal"];
  
  
  
  
  var indices = ["NSE%3ANIFTY","NSE%3ABANKNIFTY","NSE%3ACNXFINANCE","MCX:CRUDEOILMV2023"];
  
  
  var sensibull = ["NIFTY","BANKNIFTY","FINNIFTY","Crude-Oil"];
  
  
 var week = ['AUTO','BANK','CONSUMER DURABLES','FINANCIAL SERVICES','FINANCIAL SERVICES 25/50','FMCG','HEALTHCARE INDEX','IT','MEDIA','METAL','OIL & GAS','PHARMA','PRIVATE BANK','PSU BANK','REALTY'];
  
  var week2=["cnx-auto","bank-nifty", "cnx-finance","cnx-fmcg", "cnx-commodities","cnx-it", "cnx-media","cnx-metal","cnx-mnc", "cnx-pharma","nifty-private-bank","cnx-psu-bank","cnx-realty","cnx-energy"];
  
  
 let amazon='https://www.nseindia.com/market-data/live-equity-market?symbol=NIFTY%20';
let bigbasket='https://www.niftyindices.com/market-data/index-movers?Iname=NIFTY%20';
let flipkart='https://in.investing.com/indices/';
let flipkartg='https://www.tradingview.com/chart/?symbol=';
let flipkarth='https://archives.nseindia.com/content/indices/ind_nifty';
  
  let flipkarti='https://trade.fyers.in/popout_chart/index.html?symbol=';
 
 $.each(week.slice(), function(i, data) {
                  var ul_data = [

             '<tr><td><a href="https://web.sensibull.com/option-chain?tradingsymbol='+sensibull[i]+'"target="_blank">'+sensibull[i]+'</a></td>'+'<td><a href="'+flipkarti+chart[i]+'&resolution=5&theme=light"target="_blank">'+sensibull[i]+'</a></td>'+'<td><a href="'+flipkartg+indices[i]+'"target="_blank">'+sensibull[i]+'</a></td>'+'<td><a href="'+amazon+week[i]+'"target="_blank">'+week[i]+'</a></td>'+'<td><a href="'+bigbasket+week[i]+'"target="_blank">'+week[i]+'</a></td>'+'<td><a href="'+flipkart+week2[i]+'-components"target="_blank">'+week2[i]+'</a></td>'+'<td><a href="'+flipkarth+csv[i]+'list.csv"target="_blank">'+csv[i]+'</a></td></tr>'


 ];

            $("#custo").append(ul_data);

        });

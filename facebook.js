'use strict';

// See the Send API reference
// https://developers.facebook.com/docs/messenger-platform/send-api-reference
const request = require('request');
const Config = require('./const.js');

const fbReq = request.defaults({
  uri: 'https://graph.facebook.com/me/messages',
  method: 'POST',
  json: true,
  qs: {
    access_token: Config.FB_PAGE_TOKEN
  },
  headers: {
    'Content-Type': 'application/json'
  },
});


const fbMessage = (recipientId, msg, cb) => {
 
 var domingo = false;


function formatDatem(date) {
  var monthNames = [
    "Enero", "Feb", "Mar",
    "Abril", "Mayo", "Junio", "Julio",
    "Ago", "Sept", "Oct",
    "Nov", "Dic"
  ];

var monthIndex = date.getMonth();

if (date.getDate()<30)
{
  if (monthNames[monthIndex] == 'Feb' && date.getDate()>27)
  {
      var monthIndex = date.getMonth() + 1;
      var day = 1;
  }
  else
  {
    var day = date.getDate() + 1;
    var monthIndex = date.getMonth();
  }
  
}
else
{
  var monthIndex = date.getMonth();
  if (monthNames[monthIndex] == 'Enero' || monthNames[monthIndex] =='Mar' || monthNames[monthIndex] =='Mayo' || monthNames[monthIndex] =='Julio' || monthNames[monthIndex] =='Ago' || monthNames[monthIndex] =='Oct' || monthNames[monthIndex] =='Dic')
  {
    if (date.getDate()==30)
    {
      var day = date.getDate() + 1;
    }
    else
    {
      if (monthNames[monthIndex] == 'Dic')
      {
        var monthIndex = 0;
        var day = 1;
        //console.log('4')
      }
      else
      {
        var monthIndex = date.getMonth() + 1;
        var day = 1;
        //console.log('5')
      }
    }
    
  }
  else
  {
    if (date.getDate()==29)
    {
      var day = date.getDate() + 1;
      //console.log('6')
    }
    else
    {
        var monthIndex = date.getMonth() + 1;
        var day = 1;
        //console.log('7')
    }
  }

}

if ((monthNames[monthIndex] == 'Nov' && (day == 5 || day == 12 || day == 19 || day == 26)) || (monthNames[monthIndex] == 'Dic' && (day == 3 || day ==10 || day ==17 || day ==24 || day ==31)) || (monthNames[monthIndex] == 'Enero' && (day == 7 || day ==14 || day ==21 || day ==28)) || (monthNames[monthIndex] == 'Feb' && (day == 4 || day ==11 || day ==18 || day ==25)) || (monthNames[monthIndex] == 'Mar' && (day== 4 || day ==11 || day ==18 || day ==25)) || (monthNames[monthIndex] == 'Abril' && (day == 1 || day ==8 || day ==15 || day ==22 || day ==29)) || (monthNames[monthIndex] == 'Mayo' && (day == 6 || day ==13 || day ==20 || day == 27)) || (monthNames[monthIndex] == 'Junio' && (day == 3 || day ==10 || day ==17 || day ==24)) || (monthNames[monthIndex] == 'Julio' && (day == 1 || day == 8 || day ==15 || day ==22 || day ==29)) || (monthNames[monthIndex] == 'Ago' && (day == 5 || day ==12 || day ==19 || day ==26)) || (monthNames[monthIndex] == 'Sept' && (day == 2 || day ==9 || day ==16 || day ==23 || day ==30)) || (monthNames[monthIndex] == 'Oct' && (day == 7 || day ==14 || day ==21 || day ==28) ))
{

  var day = day + 1;
  var domingo = true;
  //console.log('8')
}  

  return day + ' ' + monthNames[monthIndex];

}

function formatDatep(date) {
  var monthNames = [
    "Enero", "Feb", "Mar",
    "Abril", "Mayo", "Junio", "Julio",
    "Ago", "Sept", "Oct",
    "Nov", "Dic"
  ];
var monthIndex = date.getMonth();

if (date.getDate()<29)
{
  if (monthNames[monthIndex] == 'Feb' && date.getDate()>26)
  {
      var monthIndex = date.getMonth() + 1;
      var day = 1;
      //console.log('9')
  }
  else
  {
    var day = date.getDate() + 2;
    var monthIndex = date.getMonth();
    //console.log('10')
  }
  
}
else
{
  var monthIndex = date.getMonth();
  if (monthNames[monthIndex] == 'Enero' || monthNames[monthIndex] =='Mar' || monthNames[monthIndex] == 'Mayo' || monthNames[monthIndex] =='Julio' || monthNames[monthIndex] =='Ago' || monthNames[monthIndex] =='Oct' || monthNames[monthIndex] =='Dic')
  {
    if (date.getDate()==29)
    {
      var day = date.getDate() + 2;
      //console.log('11')
    }
    else
    {
      if (monthNames[monthIndex] == 'Dic')
      {
        if (date.getDate()==30)
        {
          var monthIndex = 0;
          var day = 1;
          //console.log('12')
        }
        else
        {
          var monthIndex = 0;
          var day = 2;
          //console.log('13')
        }
        
      }
      else
      {
        if (date.getDate()==30)
        {
          var monthIndex = date.getMonth() + 1;
          var day = 1;
          //console.log('14')
        }
        else
        {
          var monthIndex = date.getMonth() + 1;
          var day = 2;
          //console.log('15')
        }
        
      }
    }
    
  }
  else
  {
    if (date.getDate()==29)
    {
        var monthIndex = date.getMonth() + 1;
        var day = 1;
        //console.log('16')
    }
    else
    {
        var monthIndex = date.getMonth() + 1;
        var day = 2;
        //console.log('17')
    }
  }
  
}

if ((monthNames[monthIndex] == 'Nov' && (day == 5 || day == 12 || day == 19 || day == 26)) || (monthNames[monthIndex] == 'Dic' && (day == 3 || day ==10 || day ==17 || day ==24 || day ==31)) || (monthNames[monthIndex] == 'Enero' && (day == 7 || day ==14 || day ==21 || day ==28)) || (monthNames[monthIndex] == 'Feb' && (day == 4 || day ==11 || day ==18 || day ==25)) || (monthNames[monthIndex] == 'Mar' && (day== 4 || day ==11 || day ==18 || day ==25)) || (monthNames[monthIndex] == 'Abril' && (day == 1 || day ==8 || day ==15 || day ==22 || day ==29)) || (monthNames[monthIndex] == 'Mayo' && (day == 6 || day ==13 || day ==20 || day == 27)) || (monthNames[monthIndex] == 'Junio' && (day == 3 || day ==10 || day ==17 || day ==24)) || (monthNames[monthIndex] == 'Julio' && (day == 1 || day == 8 || day ==15 || day ==22 || day ==29)) || (monthNames[monthIndex] == 'Ago' && (day == 5 || day ==12 || day ==19 || day ==26)) || (monthNames[monthIndex] == 'Sept' && (day == 2 || day ==9 || day ==16 || day ==23 || day ==30)) || (monthNames[monthIndex] == 'Oct' && (day == 7 || day ==14 || day ==21 || day ==28) ))
{
  var day = day + 1;
  //console.log('18')
} 
if (domingo == true)
{
  var day = day + 1;
  //console.log('19')
}
  

  return day + ' ' + monthNames[monthIndex];
}


var mañana = formatDatem(new Date());
var pasado = formatDatep(new Date());


 if (msg == 'Gracias, nos gustaría agendar una cita contigo en Pentafon, ¿Cual de estos horarios te conviene?')
 {
 const opts = 
  {
    form:
    {
      recipient: 
        {
        id: recipientId,
        },
    message: {
    // attachment: {
    //   type: "template",
    //   payload: {
    //     template_type: "list",
    //     top_element_style: "compact",
    //     elements: [
    //       {
    //         title: "Classic T-Shirt Collection",
    //         subtitle: "See all our colors",
    //         image_url: "https://i.ytimg.com/vi/UnsSNeORPo8/maxresdefault.jpg",          
    //         buttons: [
    //           {
    //             title: "View",
    //             type: "web_url",
    //             url: "https://i.ytimg.com/vi/UnsSNeORPo8/maxresdefault.jpg",
    //             messenger_extensions: false,
    //             webview_height_ratio: "tall",
    //             fallback_url: "https://i.ytimg.com/vi/UnsSNeORPo8/maxresdefault.jpg"            
    //           }
    //         ]
    //       },
    //       {
    //         title: "Classic White T-Shirt",
    //         subtitle: "See all our colors",
    //         default_action: {
    //           type: "web_url",
    //           url: "https://i.ytimg.com/vi/UnsSNeORPo8/maxresdefault.jpg",
    //           messenger_extensions: false,
    //           webview_height_ratio: "tall",
    //           fallback_url: "https://i.ytimg.com/vi/UnsSNeORPo8/maxresdefault.jpg"
    //         }
    //       },
    //       {
    //         title: "Classic Blue T-Shirt",
    //         image_url: "https://i.ytimg.com/vi/UnsSNeORPo8/maxresdefault.jpg",
    //         subtitle: "100% Cotton, 200% Comfortable",
    //         default_action: {
    //           type: "web_url",
    //           url: "https://i.ytimg.com/vi/UnsSNeORPo8/maxresdefault.jpg",
    //           messenger_extensions: false,
    //           webview_height_ratio: "tall",
    //           fallback_url: "https://i.ytimg.com/vi/UnsSNeORPo8/maxresdefault.jpg"
    //         },
    //         buttons: [
    //           {
    //             title: "Shop Now",
    //             type: "web_url",
    //             url: "https://i.ytimg.com/vi/UnsSNeORPo8/maxresdefault.jpg",
    //             messenger_extensions: false,
    //             webview_height_ratio: "tall",
    //             fallback_url: "https://i.ytimg.com/vi/UnsSNeORPo8/maxresdefault.jpg"            
    //           }
    //         ]        
    //       }
    //     ],
    //      buttons: [
    //       {
    //         title: "View More",
    //         type: "postback",
    //         payload: "payload"            
    //       }
    //     ]  
    //   }
    // }

    text: msg,
    quick_replies:[
      {
        "content_type":"text",
        "title": mañana + ' 10:00 am',
        "image_url":"https://i.kinja-img.com/gawker-media/image/upload/s--XkYSDzxz--/c_scale,fl_progressive,q_80,w_800/hflvykipmc5g22mc3m0m.jpg",
        "payload":"red"
      },
      {
        content_type:"text",
        title: mañana + ' 4:00 pm',
        "image_url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Libya_%281977-2011%29.svg/300px-Flag_of_Libya_%281977-2011%29.svg.png",
        payload:"green"
      },
      {
        content_type:"text",
        title: pasado + ' 10:00 am',
        "image_url": "http://jonvilma.com/images/blue-2.jpg",
        payload:"blue"
      }
    ]
  }
        },
  };

  fbReq(opts, (err, resp, data) => {
    if (cb) {
      cb(err || data.error && data.error.message, data);
    }
  });

 }
 else 
 {

  const opts = 
  {
    form:
    {
      recipient: 
        {
        id: recipientId,
        },
      message: 
        {
        text: msg,
        },
      },
  };

  fbReq(opts, (err, resp, data) => {
    if (cb) {
      cb(err || data.error && data.error.message, data);
    }
  });

 } 


  
};


// See the Webhook reference
// https://developers.facebook.com/docs/messenger-platform/webhook-reference
const getFirstMessagingEntry = (body) => {
  const val = body.object === 'page' &&
    body.entry &&
    Array.isArray(body.entry) &&
    body.entry.length > 0 &&
    body.entry[0] &&
    body.entry[0].messaging &&
    Array.isArray(body.entry[0].messaging) &&
    body.entry[0].messaging.length > 0 &&
    body.entry[0].messaging[0];

  return val || null;
};


module.exports = {
  getFirstMessagingEntry: getFirstMessagingEntry,
  fbMessage: fbMessage,
  fbReq: fbReq
};
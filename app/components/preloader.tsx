import React, { useState, useEffect } from 'react';

const Preloader: React.FC = () => {
  const strings: string[] = [
    "Initialzing request",
    "Resolving internet address 127.0.0.1",
    "Requesting access to server",
    "Entering credentials",
    "Login denied",
    "Re-entering credentials",
    "Access granted",
    "Finding CTF backend services",
    "Services found on port 80",
    "Starting mcstausd",
  ];

  const [count, setCount] = useState<number>(0);
  const [delay, setDelay] = useState<number>(1000);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, delay);

    return clearTimeout(timer);
  }, [count, delay]);

  return (
    <div id="preloader">
      {strings.slice(0, count).map((message: string, index: number) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  );
}

export default Preloader;

/* var preloader = document.getElementById('preloader');
var delay = 1000;
var count = 0;
var repeat = 0;

function addLog() {
  var row = createLog('ok', count);
  preloader.appendChild(row);
  
  goScrollToBottom();
  
  count++;
  
  if (repeat == 0) {
    if (count > 3) {
      delay = 300;
    }
    
    if (count > 6) {
      delay = 100;
    }
    
    if (count > 8) {
      delay = 50;
    }
    
    if (count > 10) {
      delay = 10;
    }
  } else {
    if (count > 3) {
      delay = 10;
    }
  }
  
  if (count < strings.length) {
    setTimeout(function() {
      return addLog();
    }, delay);
  } else {
    setTimeout(function() {
      delay = 1000;
      return createLog("ok");
    }, 1000);
  }
}

function createLog(type, index) {
  var row = document.createElement('div');
  
  var spanStatus = document.createElement('span');
  spanStatus.className = type;
  spanStatus.innerHTML = type.toUpperCase();
  
  var message = (index != null) 
              ? strings[index] 
              : 'kernel: Initializing...';

  if(index == null) 
  {
    var preloader = $('#preloader');
    jQuery(preloader).fadeOut("slow");
    jQuery("#main").fadeIn("slow");
  }
  
  var spanMessage = document.createElement('span');
  spanMessage.innerHTML = message;
  
  row.appendChild(spanStatus);
  row.appendChild(spanMessage);
  
  return row;
}

function goScrollToBottom() {
  $(document).scrollTop($(document).height()); 
}

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// below method reference https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript/25490531#25490531
function getCookie(a) {
  var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
}

function checkCookie() {
  var user=getCookie("visited"); 
  if (user == 1) {   
    setCookie("visited", 1, 30); //this will update the cookie      
    jQuery("#main").fadeIn("slow"); 
  } else {  
    addLog();      
    setCookie("visited", 1, 30);   

  }
}

checkCookie(); */
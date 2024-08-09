'use client'
import { useState, useEffect, useCallback, useMemo } from 'react';

/*
The following code has been referenced from this CTF template. I had an initial vision for how the preloader would look 
and while looking for CTFs to participate in I found this template site which matched my vision. The code is in JS and 
has been modified for TypeScript and Next.JS App Router.

(https://github.com/ashawe/CTF-Website-Template-2020/blob/master/js/preloader.js
*/

function Preloader() {
  const [count, setCount] = useState<number>(0);
  const [delay, setDelay] = useState<number>(1000);
  const [repeat, setRepeat] = useState<number>(0);
  const strings = useMemo(() => [
    "Initialzing request",
    "Resolving internet address 127.0.0.1",
    "Requesting access to server",
    "Entering credentials",
    "Login denied",
    "Re-entering credentials",
    "Access granted",
    "Finding backend services",
    "Services found on port 80",
    "Starting mcstausd",
    "Starting portmap",
    "Starting setroubleshootd",
    "Starting RPC idmapd",
    "Starting mdmonitor",
    "Starting system message bus",
    "Starting Bluetooth services",
    "Starting other filesystems",
    "Starting PC/SC smart card daemon (pcscd)",
    "Starting hidd",
    "Enabling /etc/fstab swaps",
    "INIT: Entering runlevel 3",
    "Entering non-interactive startup",
    "Applying INTEL CPU microcode update",
    "Checking for hardware changes",
    "Bringing up interface eth0",
    "Determining IP information for eth0... done.",
    "Starting mcstausd",
    "Starting portmap",
    "Starting setroubleshootd",
    "Starting RPC idmapd",
    "Starting mdmonitor",
    "Starting system message bus",
    "Starting Bluetooth services",
    "Starting other filesystems",
    "Starting PC/SC smart card daemon (pcscd)",
    "Starting hidd",
    "Enabling /etc/fstab swaps",
    "INIT: Entering runlevel 3",
    "Entering non-interactive startup",
    "Applying INTEL CPU microcode update",
    "Checking for hardware changes",
    "Bringing up interface eth0",
    "Determining IP information for eth0... done.",
    "Connecting to backend service",
    "Connected to backend service",
    "Finding database services",
    "Services found on port 3306",
    "Establishing connection to the database",
    "Connection established",
    "Logging into the database server",
    "Login successful",
    "Reading database",
    "Fetching data from database",
    "Data acquired",
    "Finding other resources",
    "Fetching resources",
    "Processing DOM",
    "Loading images",
    "Loading content",
    "Page rendered",
    "Starting display manager",
    "WELCOME TO AARASAWA.DEV",
    "Initializing..."
  ], []);

  useEffect(() => {
    const CreateRepeatLog = () => {
      if (repeat === 0) {
        if (count > 3) setDelay(250);
        if (count > 6) setDelay(100);
        if (count > 8) setDelay(50);
        if (count > 10) setDelay(10);
      } else {
        if (count > 3) setDelay(10);
      }
    };

    CreateRepeatLog();
  }, [count, repeat]);

  const CreateLog = useCallback((type: string, index?: number): HTMLDivElement | null => {
    const doc = typeof document !== 'undefined' ? document : null;
    if (!doc) return null;
  
    const row = doc.createElement('div');
    const spanStatus = doc.createElement('span');
    const formattedStatus = GetFormattedStatus(type);
    spanStatus.innerHTML = formattedStatus;
    spanStatus.className = GetTypeClass(type);

    const spanStartBracket = doc.createElement('span');
    const spanEndBracket = doc.createElement('span');
    spanStartBracket.innerHTML = '&emsp;[';
    spanEndBracket.innerHTML = ']&emsp;';
    spanStartBracket.className = 'bracket-color';
    spanEndBracket.className = 'bracket-color';

    const message: string = (index != null) ? strings[index] : 'kernel: Initializing...';

    const spanMessage = doc.createElement('span');
    spanMessage.innerHTML = message;

    row.appendChild(spanStartBracket);
    row.appendChild(spanStatus);
    row.appendChild(spanEndBracket);
    row.appendChild(spanMessage);

    return row;
  }, [strings]);

  const AddLog = useCallback(() => {
    const status = 'OK';
    const row = CreateLog(status, count);
    if (row) {
      document.getElementById('preloader')?.appendChild(row);
      GoScrollToBottom();
      setCount(prevCount => prevCount + 1);
    }
  }, [count, CreateLog]);

  const GetTypeClass = (type: string): string => {
    const TypeColorMap: Record<string, string> = {
      'OK': 'text-green-500',
    };
  
    return TypeColorMap[type] || 'text-gray-500';
  };
  
  const GetFormattedStatus = (type: string): string => {
    return `${type.toUpperCase()}`; 
  };

  const GoScrollToBottom = (): void => {
    if (typeof window !== 'undefined') window.scrollTo(0, document.body.scrollHeight);
  };

  useEffect(() => {
    const handleCount = () => {
      if (count === strings.length) {
        setTimeout(() => {
          window.location.href = '/home';
        }, 2000);
      }
      if (count < strings.length) {
        const timeout = setTimeout(() => {
          AddLog();
        }, delay);

        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setDelay(1000);
          CreateLog("OK");
        }, 1000);
      }
    };

    handleCount();
  }, [count, delay, AddLog, CreateLog, strings.length]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div id="preloader" className="text-xl">
      </div>
    </div>
  );
};

export default Preloader;
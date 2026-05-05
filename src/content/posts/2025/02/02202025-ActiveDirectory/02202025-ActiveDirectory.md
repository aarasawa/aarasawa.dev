---
title: Finish Installing Windows Server in Hyper-V
published: 2025-02-20
description: 'Part 3: Finish installing Windows Server'
image: ''
tags: ['Active Directory', 'Networks', 'Domain Controller']
category: 'Active Directory'
draft: false 
lang: 'en'
---

## Installing Windows Server
I am going to start the VM and boot from the Windows Server to start the installation. Click <b>Connect</b> and then initiate the boot sequence. 

![WS-DC Options](./images/wsdcOptions.png)

When prompted to choose the Windows Server Edition, select <b>Windows Server Standard (Desktop Experience)</b> it includes the GUI for the operating system. Continuing through you will notice that the partition available for choosing where to install the OS is the VHD created prior.

## Starting Windows Server
After choosing to install, the processes will show an installation progress bar. Once the VM goes black, restart it. It will then ask for an administrator password. For the home lab, it can be simple. 

## Log In
After logging in is done, the Server Dashboard will open automatically. At this point, Windows Server is finished installing. 
---
title: Setting up a Domain Controller
published: 2025-03-19
description: 'Next part to setting up a home lab for AD.'
image: ''
tags: ['Active Directory', 'Domain Controller']
category: 'Active Directory'
draft: false 
lang: 'en'
---

## Step-by-Step
The process for setting up a domain controller follows directly after deploying the evaluation image of the Windows Server to a VM. In Server Manager, click <code>Add Roles and Features</code> and choose <b>Role-based Server Selection</b>. 

:::Note
For emulating an enterprise-level home lab a separate VM is used for DHCP, if your computer can't handle that then add that to your Features in the next step. 
:::

### Features
The default features for a domain controller are:

* Group Policy Management
* Remote Server Administration Tools
  * AD DS Tools
  * AD LDS Tools
  * DNS Server Tools
  * DHCP Server Tools (optional)
* .NET Framework 4.8 Features
* Windows Process Activation Service (if planning Exchange, ADFS, web-based apps)
* Windows Server Backup
* Failover Clustering (multi-DC replication or redundancy)
* BitLocker Drive Encryption


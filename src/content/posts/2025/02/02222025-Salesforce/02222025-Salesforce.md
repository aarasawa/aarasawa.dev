---
title: Notes on Lightning Experience Customization
published: 2025-02-22
description: 'Experience customization using Lightning'
image: ''
tags: ['Lightning Web Components']
category: 'Salesforce'
draft: false 
lang: 'en'
---

## Compact Layouts
<b>Compact layouts</b> help to highlight information users need to see at a glance. They can be used for displaying information in the highlight panel, expanded lookup cards, or details section of an activity.
Compact layouts are considered custom objects in Salesforce. System default compact layouts have only one field on it, the <em>object name</em>.

## Record Pages
<b>Lightning Pages</b> can be created and updated using Lightning App Builder (LAB). Each page is a collection of components that can either provided by Salesforce or custom made. LAB allows for customization of lightning pages for buttons, lists, records, etc. 

## Page Activation
Short for making the page available to specified parts of the org and members of the org. There are four options for activation: 

<ul>
  <li>Org default for the object
  <li>Page becomes default object record page for specific Lightning apps
  <li>Assign page to a combination of Lightning apps, record types, and profiles
  <li>Assign page to a form factor (e.g. desktop, phone)
</ul>

## Dynamic Forms
As the name suggests, allows for more detailed customization on a page layout. Dynamic forms allows you to place fields and sections where desired. There is additional granularity in visibility rules for hiding fields and sections. 

The Fields Section component is added when Dynamic Forms are enabled. This is done in one of two ways:

<ol>
  <li>Create a fresh Lightning record page, then click Fields tab in LAB component pane
  <li>Open an existing record page and migrate its record details using Dynamic Forms migration wizard
</ol>
---
title: Looking at Apex Triggers
published: 2025-03-11
description: 'Basics of Apex Triggers in Salesforce'
image: ''
tags: ['Salesforce', 'Apex']
category: 'Salesforce'
draft: false 
lang: 'en'
---

## Overview on Apex Triggers
<b>Apex triggers</b> perform custom actions before or after events to records in Salesforce. They can perform actions that can be done in Apex including calling methods, executing SOQL, etc. Triggers are used to perform tasks beyond basic point-and-click tools supplied by Salesforce. 

## Syntax
Trigger definition starts with the keyword <code>trigger</code> followed by the name, Salesforce object it is associated with, then conditions it works under. Multiple trigger events can be specified in a comma-separated list. <code>before insert</code>, <code>before update</code>, <code>before delete</code>, <code>after insert</code>, <code>after update</code>, <code>after delete</code>, and <code>after undelete</code>

```apex
trigger TriggerName on ObjectName (trigger_events) {
  code_block
}
```

## Types of Triggers
<b>Before triggers</b> update or validate record values BEFORE they're saved to the database.</br>
<b>After triggers</b> access field values that are set by the system and affect changes in other records, records that fire this trigger are read-only. 

## Context Variables
<code>Context variables</code> give a way to access records that caused a trigger to happen. Say a trigger goes off because one or multiple records were updated via API or Apex. A context variable such as <code>Trigger.old</code> provides a single or list of sObjects as they were BEFORE the trigger happened. 

| Variable | Usage |
|----------|-------|
| isExecuting | Returns true if the current context for code is a trigger, not anything else. |
| isInsert | Returns true if this trigger is fired due to an insert operation. |
| isUpdate | Returns true if this trigger is fired due to an update operation. |
| isDelete | Returns true if this trigger is fired ude to a delete operation. |
| isBefore | Returns true if this trigger is fired before any record was saved. |
| isAfter | Returns true if this trigger is fired after all records were saved. |
| isUndelete | Returns true if this trigger is fired after a record is recovered from Recycle Bin. |
| new | Returns a list of the new versions of the sObject records. |
| newMap | A map of IDs to new versions of the sObject records. |
| old | Returns a list of the old versions of the sObject records. |
| oldMap | A map of IDs to old versions of the sObject records. |
| operationType | Returns an enum of type System.TriggerOperation corresponding to the current operation. |
| size | Total number of records in trigger invocation both old and new. |

## Calling a Class Method from Trigger
It is possible to call public utility methods from a trigger. Example below:

```apex
trigger ExampleTrigger on Contact (after insert, after delete) {
  if (Trigger.isInsert) {
    Integer recordCount = Trigger.new.size();
    EmailManager.sendMail('email-address', 'Trailhead Trigger Tutorial', recordCount + ' contact(s) were inserted. ');
  } else if (Trigger.isDelete) {
    // Process on delete
  }
}
```

## Adding Related Records
Triggers are often used to access and manage records related to records that caused the trigger to happen. Example below:

```apex
trigger AddRelatedRecord on Account (after insert, after update) {
  List<Opportunity> oppList = new List<Opportunity>();
  
  for (Account a : Trigger.new) {
    // Do stuff
  }
  if (oppList.size() > 0) {
    insert oppList;
  }
}
```

## Trigger Exceptions
Exceptions are stuff like preventing records from being saved under certain conditions. <code>addError()</code> throws a fatal error inside a trigger. The error message displays in the UI and is logged. 

```apex
Trigger.oldMap.get(a.Id).addError(
  'Cannot delete account with related opportunities.');
```

## Callouts
<code>Callouts</code> allow for calls and integration with external web services in Apex. To make a callout from a trigger, call a class method that executes asynchronously, referred to as <em>future method</em>. 

```apex
public class CalloutClass {
  @future(callout=true)
  public static void makeCallout() {...}
  ...
}

trigger CallouTrigger on Account (before insert, before update) {
  CalloutClass.makeCallout();
}

```
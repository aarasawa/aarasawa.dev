---
title: SOQL and SOSL Queries in Salesforce
published: 2025-03-04
description: 'Learning about SOQL and SOSL in Salesforce environment'
image: ''
tags: ['Database', 'Apex', 'Salesforce']
category: 'Salesforce'
draft: false 
lang: 'en'
---

## SOQL Queries
<b>Salesforce Object Query Language (SOQL)</b> is used to read saved records and is structured siilar to SQL but tailored for the Lightning Platform. Due to the integration with the platform, SOQL can be used in Apex coding often referred to as <b>inline SQL</b>. 

```sql
-- SOQL are wrapped in square brackets and assigned to an array of sObjects
Account[] accts = [SELECT Name, Phone FROM Account];
```

For testing queries or inspecting the database, there is a Query Editor in the Developer Console of the Org. SOQL includes a lot of the same keywords as SQL including SELECT, FROM, WHERE, ORDER BY, LIMIT.

### Accessing Apex Variables in SOQL Queries
To reference Apex variables and expressions use colon (:). Using a local variable within a SOQL statement is called <b>binding</b>.

```apex
String targetFish = 'Clown';
Fish[] fishProfiles = [SELECT FirstName, LastName
                         FROM Swamp WHERE fishType=:targetFish];
```

### Querying Related Records
Because records can be linked to each other through relationships like a lookup or master-detail relationships. To get child records from a parent record, you can use nested queries. Dot notation can also be used for traversing a relationship from a child object to a field on its parent. 

```apex
Account[] acctsWithContacts = [SELECT Name, (SELECT FirstName, LastName FROM Contacts)
                                 FROM Account
                                WHERE Name='SwampFish Recruiting'];
Contact[] cts = [SELECT Account.Name FROM Contact
                 WHERE FirstName = 'Carol' AND LastName='Ruiz'];
Contact carol = cts[0];

// Get child records
Contact[] cts = acctsWithContacts[0].Contacts;
System.debug('Name of first associated contact: '
             + cts[0].FirstName + ', ' + cts[0].LastName);

// Traverse relationship with dot notation
String acctName = carol.Account.Name;
System.debug('Carol\'s account name is ' + acctName);
```

### SOQL For Loops
SOQL for loops retrieve records with efficient chunking with calls to the query and queryMore methods (SOAP API) to avoid hitting the heap size limit. 

```apex
insert new Account[]{new Account(Name = 'for loop 1'),
                     new Account(Name = 'for loop 2'),
                     new Account(Name = 'for loop 3')};

// sObject list format executes loop once per returned batch of records
Integer i = 0;
Integer j = 0;
for (Account[] tmp : [SELECT Id FROM Account WHERE Name LIKE 'for loop _']) {
    j = tmp.size();
    i++;
}

// List 
System.asserEquals(3, j);
```

## SOSL Queries
<b>Salesforce Object Search Language (SOSL)</b> is a search language used to perform text searches in records. SOSLcan search fields across multiple standard and custom object records in Salesforce similar to Apache Lucene. In addition, SOSL also has the ability to embed SOSL in Apex code referred to as <b>inline SOSL</b>. 

```apex
List<List<SObject>> searchList = 
    [FIND 'SFDC' IN ALL FIELDS RETURNING 
        Account(Name), Contact(FirstName, LastName)];
```

### SOQL vs. SOSL
SOSL can search organization records for information and can search <b>ALL</b> objects. SOQL can <b>ONLY</b> query one standard/custom object at a time. They are two separate languages and have different syntax. 

### SOSL Syntax
Criteria that you can search for includes text expressions, scope of fields, list of objects/fields to retrieve, and conditions for selecting rows in source objects. 

```sql
FIND 'SearchQuery' [IN SearchGroup] [RETURNING ObjectsAndFields]
-- SearchQuery can be grouped with logical operators, parentheses, and wildcards
-- SearchGroup is optional e.g. ALL FIELDS, NAME FIELDS
-- ObjectsAndFields is optional
```

### SOSL Apex Example
SOSL also allows for binding local variables in Apex code. In the query, the variable name is preceded by a colon to bind. 

```apex
String soslFindClause = 'Wingo OR SFDC';
List<List<sObject>> searchList = [FIND :soslFindClause IN ALL FIELDS
        RETURNING Account(Name), Contact(FirstName, LastName, Department)];
```
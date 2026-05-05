---
title: Creating an ETL Pipeline
published: 2026-04-04
description: 'Working on an ETL pipeline for a personal project'
image: ''
tags: ['ETL', 'Database']
category: 'Backend Development'
draft: false 
lang: 'en'
---

# What is an ETL pipeline?
A workflow for transforming data from some source and ingesting it into a usable format into a destination data store for use by some application. That is a general definition based on my experience. However, if you break it down by what ETL stands for, then it is easier to think of each discrete step. `Extract` data from a sounce, `Transform` into a usable format, and `Load` said data into a destination for use like in querying or analysis. 

# What for?
To lay into concrete steps: 
<ol>
  <li> <b>Extract</b>: download source data
  <li> <b>Archive</b>: keep original .zip for audit
  <li> <b>Parse</b>: unpack files and load into staging
  <li> <b>Transform</b>: clean data into usable format
  <li> <b>Load</b>: write only useful data into final production tables
</ol>

The tools for most of this process I used before were Python. s
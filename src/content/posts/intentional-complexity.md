---
title: "The Architecture of Deep Phosphor"
description: "Exploring the technical stack and philosophy behind civic-tech application development."
date: "2026-04-12"
author: "Alex Arasawa"
tags: ["Architecture", "Civic Tech", "Engineering"]
---

# Intentional Complexity

When I started **Deep Phosphor**, the goal wasn't to build another "move fast and break things" agency. It was to build tools that *last*. 

Most software projects die due to **unmanaged complexity**. In the nonprofit sector, where maintenance budgets are thin, this is fatal.

## The Stack

I prefer what I call the **Pragmatic Core**:

- **FastAPI** for high-performance, strictly typed backends.
- **React + Vite** for reliable, testable frontends.
- **PostgreSQL** because state should be solid.

### Example System Loop

```python
def process_pesticide_data(raw_csv):
    """
    Cleans and validates CA pesticide reports.
    Returns GeoJSON for the frontend.
    """
    cleaned = validate_schema(raw_csv)
    return convert_to_geojson(cleaned)
```

## Extended MDX Features

By combining components with content, we can create more interactive logs.

> "A thin slice of working software is worth more than a hundred pages of theoretical requirements."

1. **Iterative Delivery**
2. **Type Safety**
3. **User-Centric Design**

## Mathematical Modeling

Civic tech often involves statistical analysis. For instance, calculating the weighted impact of a policy change:

$$
I = \sum_{i=1}^{n} w_i \cdot p_i
$$

Where $w_i$ is the weight of the $i$-th demographic and $p_i$ is the predicted outcome.

Check out my other projects in the source tree!

---
title: Neural Network Training
published: 2026-03-25
description: 'Choosing activation functions and multiclass classification'
image: ''
tags: ['Coursera', 'ML', 'Neural Networks']
category: 'Machine Learning'
draft: false 
lang: 'en'
---

# Activation Functions
The bulk of what makes layering in neural networks capable are the activation functions used for computing a result. The ones introduced have been linear and sigmoid. For this, the rectified linear unit is introduced for handling cases were `y >= 0`. 

## Choosing an Activation Function
Depending on the needs of `y`, you can pick an activation function:
| Expression | Use Case  | Regression Type |
| - | :- | -: |
| y = 0 OR y = 1 | Binary Classification | Sigmoid |
| y = + OR y = - | Value Prediction | Linear |
| y = 0 AND y > 0 | Positive Value Prediction | Rectified Linear |

# Multiclass Classification
For the purposes of classifying for more than 2 possible values, softmax regression is being used. This is a more generalized regression, where logistic regression is softmax where N = 2. The generalized <b>softmax function</b> is below:

``` math
Z_j = \vec{W}_j \cdot \vec{X} + b_j \text{  for  } j = 1,\cdots,N \\
a_j = \frac{e^{Z_j}}{\sum^{N}_{k=1}{e^{Z_k}}} = P(y = j | \vec{X}) \\

loss(a_1,...,a_N,y) =
    \begin{cases}
        -log(a_1) \text{  if y = 1} \\
        -log(a_2) \text{  if y = 2} \\
        \vdots \\
        -log(a_N) \text{  if y = N} \\
    \end{cases}
```
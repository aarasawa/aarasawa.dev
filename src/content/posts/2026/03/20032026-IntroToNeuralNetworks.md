---
title: Introduction to Neural Networks
published: 2026-03-20
description: 'Learning about advanced learning algorithms'
image: ''
tags: ['Coursera', 'ML', 'Neural Networks']
category: 'Machine Learning'
draft: false 
lang: 'en'
---

# Overview of Neural Networks
Inputs are propogated through layers. Outputs from a layer are referred to as activation vectors.

## Activation Vectors
Notation for activation vectors is a superscript with square brackets. Below is the general notation for the resulting activation vector for some activation vector, `a`, on layer `l`, with parameters `w` and `b`.
```math
\vec{a}_j^{[l]} = w_j^{[l]} \cdot \vec{a}^{[l-1]} + b_j^{[l]}
```
Slightly different notation between numpy and tensorflow. 
```py
#numpy
x = np.array([[100.0, 10.0]])
layer_1 = Dense(units=3, activation='sigmoid')
a1 = layer_1(x) # results for this will be outputs from layer 1
a1.numpy() # cmd for converting tensors into numpy array

# tensorflow
tf.Tensor([[0.1, 0.2, 0.3]], shape=(1,3), dtype=float32)
```

## Building Neural Network Architecture
For models with multiple layers in the neural network you can string together layers using `Sequential`.
```py
model = Sequential([layer_1, layer_2])
```

Example
```py
import numpy as np
import tensorflow as tf
import tensorflow.keras.models import Sequential
import tensorflow.keras.layers import Dense

X, Y = load_data()

# Tensorflow Model
model = Sequential(
    [
        tf.keras.Input(shape(2,)),
        Dense(3, activation='sigmoid', name='layer1'),
        Dense(1, activation='sigmoid', name='layer2')
    ]
)

# L1 params = 9, L2 params = 4
W1, b1 = model.get_layer("layer1").get_weights()
W2, b2 = model.get_layer("layer2").get_weights()

# Define loss function and specifies compile optimization
model.compile(
    loss = tf.keras.losses.BinaryCrossentropy(),
    optimizer = tf.keras.optimizers.Adam(learning_rate=0.01),
)

# Run gradient descent and fits the weights to the data
model.fit(
    # Epochs specifies the number of times entire data set is applied during training
    Xt,Yt,
    epochs=10,
)

# After fitting, weights are updated
W1, b1 = model.get_layer("layer1").get_weights()
W2, b2 = model.get_layer("layer2").get_weights()

# Replace weights from trained model with new
model.get_layer("layer1").set_weights([W1,b1])
model.get_layer("layer2").set_weights([W2,b2])

# Input prediction data
X_test = [...] 
X_testn = norm_l(X_test)
predictions = model.predict(X_testn)

# Apply threshold to make a decision
yhat = np.zeros_like(predictions)
for i in range(len(predictions)):
    if predictions[i] >= 0.5:
        yhat[i] = 1
    else:
        yhat[i] = 0
```
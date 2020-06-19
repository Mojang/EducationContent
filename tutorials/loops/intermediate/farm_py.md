# Farm: Python

## Step 1
Code an ``||player:on chat||`` command and name it **farm**.

```python
def on_chat():
    pass
player.on_chat("farm", on_chat)
```

## Step 2
Code the ``||agent||`` to set **carrots** at the count of **64** in slot **1**. 

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
player.on_chat("farm", on_chat)
```

## Step 3
Code a ``|loops:for||`` loop that repeats **3** times. 

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(3):
        pass
player.on_chat("farm", on_chat)
```

## Step 4
Inside the ``||loops:for||`` loop, code the ``||agent||`` to move **back by 5**.

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(3):
        agent.move(BACK, 5)
player.on_chat("farm", on_chat)
```

## Step 5
After the ``||agent:move||`` **back**, code the ``||agent||`` to move **right by 2**.

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(3):
        agent.move(BACK, 5)
        agent.move(RIGHT, 2)
player.on_chat("farm", on_chat)
```

## Step 6
Code a ``||loops:for||`` loop that repeats **5** times. Place it inside the first ``||loops:for||`` loop but above the ``||agent:move||`` move back code.

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(3):
        for index2 in range(5):
            pass
        agent.move(BACK, 5)
        agent.move(RIGHT, 2)
player.on_chat("farm", on_chat)
```

## Step 7
Inside the inner ``||loops:for||`` loop, code a ``||agent:till||`` to till **forward**. 

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(3):
        for index2 in range(5):
            agent.till(FORWARD)
        agent.move(BACK, 5)
        agent.move(RIGHT, 2)
player.on_chat("farm", on_chat)
```

## Step 8
After the ``||agent:till||``, code the ``||agent||`` to move **forward by 1** .

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(3):
        for index2 in range(5):
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
        agent.move(BACK, 5)
        agent.move(RIGHT, 2)
player.on_chat("farm", on_chat)
```

## Step 9
After the ``||agent:move||`` forward, code to have the ``||agent:place||`` forward. 

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(3):
        for index2 in range(5):
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
            agent.place(FORWARD)
        agent.move(BACK, 5)
        agent.move(RIGHT, 2)
player.on_chat("farm", on_chat)
```

## Step 10
Go into Minecraft and test out all the events.

### Full Code: 

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(3):
        for index2 in range(5):
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
            agent.place(FORWARD)
        agent.move(BACK, 5)
        agent.move(RIGHT, 2)
player.on_chat("farm", on_chat)
```


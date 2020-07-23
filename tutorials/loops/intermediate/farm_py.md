# Farm: Python

## Step 1
Code an ``||player: on chat||`` command and name it **tp**. Code the agent ``||agent:to teleport to player||``. 

```python
def on_chat():
    agent.teleport_to_player()
player.on_chat("tp", on_chat)
```

## Step 2
Code an ``||player:on chat||`` command and name it **farm**.

```python
def on_chat():
    pass
player.on_chat("farm", on_chat)
```

## Step 3
Code the ``||agent:agent||`` to set **carrots** at the count of **64** in slot **1**. 

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
player.on_chat("farm", on_chat)
```

## Step 4
Code a ``|loops:for||`` loop that repeats **2** times. 

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(2):
        pass
player.on_chat("farm", on_chat)
```

## Step 5
Inside the ``||loops:for||`` loop, code the ``||agent:agent||`` to move **back by 7**.

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(2):
        agent.move(BACK, 7)
player.on_chat("farm", on_chat)
```

## Step 6
After the ``||agent:agent move||`` **back**, code the ``||agent||`` to move **right by 4**.

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(2):
        agent.move(BACK, 7)
        agent.move(RIGHT, 4)
player.on_chat("farm", on_chat)
```

## Step 7
Code a ``||loops:for||`` loop that repeats **7** times. Place it inside the first ``||loops:for||`` loop but above the ``||agent:agent move||`` move back code.

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(2):
        for index2 in range(7):
            pass
        agent.move(BACK, 7)
        agent.move(RIGHT, 4)
player.on_chat("farm", on_chat)
```

## Step 8
Inside the inner ``||loops:for||`` loop, code a ``||agent:till||`` to till **forward**. 

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(2):
        for index2 in range(7):
            agent.till(FORWARD)
        agent.move(BACK, 7)
        agent.move(RIGHT, 4)
player.on_chat("farm", on_chat)
```

## Step 9
After the ``||agent:till||``, code the ``||agent||`` to move **forward by 1** .

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(2):
        for index2 in range(7):
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
        agent.move(BACK, 7)
        agent.move(RIGHT, 4)
player.on_chat("farm", on_chat)
```

## Step 10
After the ``||agent:move||`` forward, code to have the ``||agent:place||`` forward. 

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(2):
        for index2 in range(7):
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
            agent.place(FORWARD)
        agent.move(BACK, 7)
        agent.move(RIGHT, 4)
player.on_chat("farm", on_chat)
```

## Step 11
Press the **Play** button, go into Minecraft and test out all the events.

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


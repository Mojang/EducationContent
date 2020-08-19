# Chopping Trees: Python

## Step 1

Create an ``||player:on chat||`` command and name it **"tp"**.

```python
def on_chat():
    pass
player.on_chat("tp", on_chat)
```

## Step 2

Inside the ``||player:chat||`` command, code the agent to ``||agent:teleport||`` to the player.

```python
def on_chat2():
    agent.teleport_to_player()
player.on_chat("tp", on_chat)
```

## Step 3

Create another ``||player:chat||`` command and name it **"chop"**.

```python
def on_chat3():
    pass
player.on_chat("chop", on_chat)
```

## Step 4

Create a new ``||variable:variable||``, name it **height**, and set it to **0**.

```python
height = 0
def on_chat():
    agent.turn(LEFT_TURN)
player.on_chat("lt", on_chat)
def on_chat2():
    agent.teleport_to_player()
player.on_chat("tp", on_chat2)
def on_chat3():
    height = 0
player.on_chat("chop", on_chat3)
```

## Step 5

Inside the **chop** ``||player:on chat||`` command—directly under the **height** variable—create a ``||loops:while||`` loop that begins with: **while the agent detects a block forward**.

```python
def on_chat3():
    height = 0
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        pass
player.on_chat("chop", on_chat3)
```

## Step 6

Add a ``||loops:while||`` loop to change the **height** ``||variable:variable||`` to the value of **height plus 1**.

```python
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        height += 1
player.on_chat("chop", on_chat3)
```

## Step 7

In the ``||loops:while||`` loop—under the change variable **height**—code the agent to  **destroy up**. 

Also, add a line to have the **agent move up by 1**.

```python
        height += 1
        agent.destroy(UP)
        agent.move(UP, 1)
player.on_chat("chop", on_chat3)
```

## Step 8

Add a ``||loops:for||`` loop after the ``||loops:while||`` loop. Insert the **height** variable into the **times** argument of the ``||loops:repeat||`` loop.

```python
    for index in range(height):
```

## Step 9

Inside the ``||loops:for||`` loop,  add a line for **agent move down by 1** and **agent destroy forward**.

```python
    for index in range(height):
        agent.move(DOWN, 1)
        agent.destroy(FORWARD)
    player.on_chat("chop", on_chat3)
```

## Step 10

After the ``||loops:for||`` loop , code the agent to ``||agent:collect all||`` .

```python
    for index in range(height):
        agent.move(DOWN, 1)
        agent.destroy(FORWARD)
    agent.collect_all()
player.on_chat("chop", on_chat3)
```

## Step 11

Go into Minecraft, type **t** and test out the **tp**, and **chop** chat commands. 

```python
def on_chat(): 

    agent.set_item(CARROTS, 64, 1) 

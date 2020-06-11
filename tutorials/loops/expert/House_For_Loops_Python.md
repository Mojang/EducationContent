# House for Loops: Python

## Step 1
Code an ``||player:on chat||`` command that makes the ``||agent:teleport to player||``. Name it **tp**. 

```python
def on_chat():
    agent.teleport_to_player()
player.on_chat("tp", on_chat)
```

## Step 2
Code another ``||player:on chat||`` command and name it **walls**.

```python
def on_chat2():
    pass
player.on_chat("walls", on_chat2)

```

## Step 3
Code a ``||agent:set block or item||`` of **acacia wood planks** at a count of **64** in slot **1** inside the **walls** ``||player: on chat||`` command.

```python
def on_chat2():
    agent.set_item(PLANKS_ACACIA, 64, 1)
player.on_chat("walls", on_chat2)
```

## Step 4
Inside the **walls** ``||player:on chat||`` command, code a ``||loops:for||`` loop that repeats **3** times the ``||agent:move||`` **up by 1** step.

```python
 def on_chat2():
    agent.set_item(PLANKS_ACACIA, 64, 1)
    for index in range(3):
        agent.move(UP, 1)
player.on_chat("walls", on_chat2)
```

## Step 5
Inside the first ``||loops:for||`` loop and under the ``||agent:move||`` code, code another ``||loops:for||`` loop that ``||agent:turn right||`` step that repeats **4** times.

```python
def on_chat2():
    agent.set_item(PLANKS_ACACIA, 64, 1)
    for index in range(3):
        agent.move(UP, 1)
        for index2 in range(4):
            agent.turn(RIGHT_TURN)
player.on_chat("walls", on_chat2)
```

## Step 6
Inside the second ``||loops:for||`` loop but above the ``||agent:turn right||`` code, code a third ``||loops:for||`` loop that repeats **4** times the steps of ``||agent:place||`` down and ``||agent:move||`` **forward by 1**.

```python
def on_chat2():
    agent.set_item(PLANKS_ACACIA, 64, 1)
    for index in range(3):
        agent.move(UP, 1)
        for index2 in range(4):
            for index3 in range(4):
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            agent.turn(RIGHT_TURN)
player.on_chat("walls", on_chat2)
```

## Step 7
Code a new ``||player:on chat||`` command and name it **roof**.   

```python
def on_chat3():
    pass
player.on_chat("roof", on_chat3)
```

## Step 8
Code the ``||agent:set block or item||`` to set a **Bricks slab** at a count of **1** in slot **1** and then code the agent to ``||agent:move||`` **up by 1**.

```python
def on_chat3():
    agent.set_item(BRICKS_SLAB, 1, 1)
    agent.move(UP, 1)
player.on_chat("roof", on_chat3)
```

## Step 9
Inside the **roof** ``||player:on chat||`` command, code a ``||loops:for||`` loop to repeat **4** times the steps of ``||agent:move||`` **back by 4** ``||agent:move||`` **right by 1**.  
	
```python
def on_chat3():
    agent.set_item(BRICKS_SLAB, 1, 1)
    agent.move(UP, 1)
    for index4 in range(4):
        agent.move(BACK, 1)
        agent.move(RIGHT, 1)
player.on_chat("roof", on_chat3)
```

## Step 10
Inside the previous ``||loops:for||`` loop—above the ``||agent:move||`` **back** step—code another ``||loops:for||`` loop to repeat **4** times the steps of  ``||agent:place down||`` and ``||agent:move||`` **forward by 1**.

```python
def on_chat3():
    agent.set_item(BRICKS_SLAB, 1, 1)
    agent.move(UP, 1)
    for index4 in range(4):
        for index5 in range(4):
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        agent.move(BACK, 1)
        agent.move(RIGHT, 1)
player.on_chat("roof", on_chat3)
```

## Step 11
Go into Minecraft and test out all the events.

### Full Code: 

```python
def on_chat():
    agent.teleport_to_player()
player.on_chat("tp", on_chat)
def on_chat2():
    agent.set_item(PLANKS_ACACIA, 64, 1)
    for index in range(3):
        agent.move(UP, 1)
        for index2 in range(4):
            for index3 in range(4):
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            agent.turn(RIGHT_TURN)
player.on_chat("walls", on_chat2)
def on_chat3():
    agent.set_item(BRICKS_SLAB, 1, 1)
    agent.move(UP, 1)
    for index4 in range(4):
        for index5 in range(4):
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        agent.move(BACK, 1)
        agent.move(RIGHT, 1)
player.on_chat("roof", on_chat3)
```


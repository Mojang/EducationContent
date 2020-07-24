# Agent Maze: Python

## Step 1
Code an ``||player:on chat||`` command, name it **tp**, and code the agent to ``||agent:teleport to player||``.

```python
def on_chat():
    pass
player.on_chat("fence", on_chat)
```

## Step 2

Code another ``||player:on chat||`` command, name it **side1**, then code the agent to  ``||agent:place on move||`` and set it to **true**.

```python
def on_chat():
    builder.teleport_to(world(-18, 4, -50))
    builder.face(WEST)
player.on_chat("1", on_chat)
```

## Step 3

Code the agent to ``||agent:move forward||`` by **4** and then **turn left**.  

```python
def on_chat2(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
    agent.move(FORWARD, 4) 
    agent.turn(LEFT_TURN) 
player.on_chat("side1", on_chat2)
```

## Step 4

Code the agent to ``||agent:move forward||`` by **5**, ``||agent:turn||`` **right**, and then ``||agent:move||`` **forward by 5** again.

```python
def on_chat2(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
    agent.move(FORWARD, 4) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
    agent.move(FORWARD, 5) 
 player.on_chat("side1", on_chat2)
```

## Step 5

Code the agent to ``||agent:place on move||`` and set it to **false**. 

```python
def on_chat2(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
    agent.move(FORWARD, 4) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
    agent.move(FORWARD, 5) 
    agent.set_assist(PLACE_ON_MOVE, False) 
 player.on_chat("side1", on_chat2)
```

## Step 6

Code the agent to ``||agent:turn||`` **left**, ``||agent:move||`` **forward by 2**, and then ``||agent:turn||`` **left** again.

```python
def on_chat2(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
    agent.move(FORWARD, 4) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
    agent.move(FORWARD, 5) 
    agent.set_assist(PLACE_ON_MOVE, False) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 2) 
    agent.turn(LEFT_TURN) 
player.on_chat("side1", on_chat2)
```

## Step 7

Code a new ``||player:on chat||`` command and name it **side2**. Code the agent to ``||agent:place on move||`` to **true**.

```python
def on_chat3(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
 player.on_chat("side2", on_chat3)
```

## Step 8

Code the agent to ``||agent:move||`` **forward by 7** and then ``||agent:turn||`` **left**.

```python
def on_chat3(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
    agent.move(FORWARD, 7) 
    agent.turn(LEFT_TURN) 
player.on_chat("side2", on_chat3)
```

## Step 9

Code the agent to ``||agent:move||`` **forward by 5** and then ``||agent:turn||`` **right**.

```python
def on_chat3(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
    agent.move(FORWARD, 7) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
player.on_chat("side2", on_chat3)
```

## Step 10

Finally, code the agent to ``||agent:move||`` **forward by 3**.

```python
def on_chat3(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
    agent.move(FORWARD, 7) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
    agent.move(FORWARD, 3) 
player.on_chat("side2", on_chat3)
```

## Step 11

Return to Minecraft, type **tp**, then type **side2** into the chat line to see the agent build your second wall.

### Full Code: 

```python
def on_chat(): 
    agent.teleport_to_player() 
player.on_chat("tp", on_chat) 
def on_chat2(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
    agent.move(FORWARD, 4) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
    agent.move(FORWARD, 5) 
    agent.set_assist(PLACE_ON_MOVE, False) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 2) 
    agent.turn(LEFT_TURN) 
player.on_chat("side1", on_chat2) 
def on_chat3(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
    agent.move(FORWARD, 7) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
    agent.move(FORWARD, 3) 
player.on_chat("side2", on_chat3)
```


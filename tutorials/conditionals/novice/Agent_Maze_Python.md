# Agent Maze: Python


## Step 1
Create a new ``||on chat||`` command and name it **“it”**.

```python
def on_chat():
    pass
player.on_chat("lt", on_chat)
```

## Step 2

Inside the ``||on chat||`` command,  Code the agent to ``||turn left||``.

```python
def on_chat():
    agent.turn(LEFT_TURN)
player.on_chat("lt", on_chat)
```

## Step 3

Create an ``||if-statement||`` that evaluates whether an agent detects a block in front. If it evaluates to true, then turn left.

```python
if agent.detect(AgentDetection.BLOCK, FORWARD):
    agent.turn(LEFT_TURN)
```

## Step 4

Add an ``||else||`` to the ``||if-statement||``, that includes an instruction to have the``||agent:move||`` **forward by 1**.  **NOTE:** The full statement then becomes an if-else statement).

```python
        agent.turn(LEFT_TURN)
    else:
        agent.move(FORWARD, 1)
```

## Step 5

Place the ``||if-else statement||`` within a ``||forever loop||``—so that these steps will continue until you stop them.

```python
def on_forever():
    if agent.detect(AgentDetection.BLOCK, FORWARD):
        agent.turn(LEFT_TURN)
    else:
        agent.move(FORWARD, 1)
loops.forever(on_forever)
```

## Step 6

Create a new ``||agent:on chat||`` command and name it **“tp”**.

```python
def on_chat2():
    pass
player.on_chat("tp", on_chat2)
```

## Step 7

Add an ``||agent teleport||`` to player inside the ``||chat||`` command.

```python
def on_chat2():
    agent.teleport_to_player()
player.on_chat("tp", on_chat2)
```

### Full Code: 

```python
def on_chat():
    agent.turn(LEFT_TURN)
player.on_chat("lt", on_chat)
def on_forever():
    if agent.detect(AgentDetection.BLOCK, FORWARD):
        agent.turn(LEFT_TURN)
    else:
        agent.move(FORWARD, 1)
loops.forever(on_forever)
def on_chat2():
    agent.teleport_to_player()
player.on_chat("tp", on_chat2)
```


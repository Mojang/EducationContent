# Agent Maze: Python


## Step 1

Create an ``||logic: if then||`` statement that evaluates whether an agent detects a block in front. If it evaluates to **true**, then turn left.

```python
if agent.detect(AgentDetection.BLOCK, FORWARD):
    agent.turn(LEFT_TURN)
```

## Step 2

Add an ``||logic: else||`` to the ``||logic: if||`` statement, that includes an instruction to have the ``||agent:agent move||`` **forward by 1** command.  

**NOTE:** The full statement then becomes an ``||logic: if-else||`` statement.

```python
        agent.turn(LEFT_TURN)
    else:
        agent.move(FORWARD, 1)
```

## Step 3

Place the ``||logic: if-else||`` statement within a ``||loops: forever||`` loop—so that these steps will continue until you stop them.

```python
def on_forever():
    if agent.detect(AgentDetection.BLOCK, FORWARD):
        agent.turn(LEFT_TURN)
    else:
        agent.move(FORWARD, 1)
loops.forever(on_forever)
```
## Step 5
Press the **Play** button and try out your code in Minecraft. 

```ghost
agent.teleportToPlayer()
```
```python
def on_forever():
    if agent.detect(AgentDetection.BLOCK, FORWARD):
        agent.turn(LEFT_TURN)
    else:
        agent.move(FORWARD, 1)
loops.forever(on_forever)
```

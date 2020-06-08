
# Spiral Activity: Python

## Step 1
Code a ``||chat||`` command and name it **“spiral”**.

```python
def on_chat():
    pass
player.on_chat("spiral", on_chat)
```

## Step 2

Code a ``||while loop||`` that begins with: while the ``||agent inspects||`` a block **forward** is not equal to a block of **gold**.

```python
def on_chat():
    while agent.inspect(AgentInspection.BLOCK, FORWARD) != GOLD_BLOCK:
        pass
player.on_chat("spiral", on_chat)
```

## Step 3

Code an ``||if/else statement||`` to go inside the ``||while loop||`` that starts with: if the agent ``||does NOT detect||`` a block **forward** then ``||agent moves||`` **forward** by **1**. 

```python
def on_chat():
    while agent.inspect(AgentInspection.BLOCK, FORWARD) != GOLD_BLOCK:
        if not (agent.detect(AgentDetection.BLOCK, FORWARD)):
            agent.move(FORWARD, 1)
        else:
            pass
player.on_chat("spiral", on_chat)
```

## Step 4

In the ``||else||`` clause of the ``||if/else statement||``, write that the ``||agent turns||`` **left**. 

```python
def on_chat():
    while agent.inspect(AgentInspection.BLOCK, FORWARD) != GOLD_BLOCK:
        if not (agent.detect(AgentDetection.BLOCK, FORWARD)):
            agent.move(FORWARD, 1)
        else:
            agent.turn(LEFT_TURN)
player.on_chat("spiral", on_chat)
```

## Step 5

Outside of the ``||while loop||``, code the agent to ``||move up||`` by **3** .

```python
def on_chat():
    while agent.inspect(AgentInspection.BLOCK, FORWARD) != GOLD_BLOCK:
        if not (agent.detect(AgentDetection.BLOCK, FORWARD)):
            agent.move(FORWARD, 1)
        else:
            agent.turn(LEFT_TURN)
    agent.move(UP, 3)
player.on_chat("spiral", on_chat)
```

## Step 6

Code the ``||while loop||`` to be repeated **2** times by adding a ``||for loop||`` around it. 

```python
def on_chat():
    for index in range(2):
        while agent.inspect(AgentInspection.BLOCK, FORWARD) != GOLD_BLOCK:
            if not (agent.detect(AgentDetection.BLOCK, FORWARD)):
                agent.move(FORWARD, 1)
            else:
                agent.turn(LEFT_TURN)
        agent.move(UP, 3)
player.on_chat("spiral", on_chat)
```

### Full Code: 

```python
def on_chat():
    for index in range(2):
        while agent.inspect(AgentInspection.BLOCK, FORWARD) != GOLD_BLOCK:
            if not (agent.detect(AgentDetection.BLOCK, FORWARD)):
                agent.move(FORWARD, 1)
            else:
                agent.turn(LEFT_TURN)
        agent.move(UP, 3)
player.on_chat("spiral", on_chat)
```


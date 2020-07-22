
# Spiral Activity: Python

## Step 1
Code an ``||player:on chat||`` command and name it **“spiral”**.

```python
def on_chat():
    pass
player.on_chat("spiral", on_chat)
```

## Step 2

Code a ``||loops:while||`` loop that begins with: while the ``||agent: agent inspects||`` a block **forward** is not equal to a block of **gold**.

```python
def on_chat():
    while agent.inspect(AgentInspection.BLOCK, FORWARD) != GOLD_BLOCK:
        pass
player.on_chat("spiral", on_chat)
```

## Step 3

Code an ``||logic:if-else||`` statement to go inside the ``||loops:while||`` loop that starts with: if the agent ``||agent: does NOT detect||`` a block **forward** then ``||agent:moves||`` **forward** by **1**. 

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

In the ``||logic:else||`` clause of the ``||logic:if-else||`` statement, write that the ``||agent:agent turns||`` **left**. 

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
Press the **Play** button, go to Minecraft, type **t** and try out **spiral**. 

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
```ghost
agent.teleportToPlayer()
```


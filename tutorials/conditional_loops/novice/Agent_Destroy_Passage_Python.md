
# Agent Destroy Passage: Python


## Step 1
Code an ``||player:chat||`` command and name it **“destroy”**.

```python
player.onChat("destroy", function () {
def on_chat():
    pass
player.on_chat("destroy", on_chat)
```

## Step 2
Add a ``||loops:while loop||`` inside the ``||player:chat ||`` command that continues as long as the agent ``||detects||`` a block **forward**. 

```python
def on_chat():
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        pass
player.on_chat("destroy", on_chat)
```

## Step 3
Code the agent to ``||destroy||`` **forward** inside the ``||while loop||``.

```python
def on_chat():
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        agent.destroy(FORWARD)
player.on_chat("destroy", on_chat)
```

## Step 4

Code the agent to ``||move forward||`` by **one** after the ``||destroy forward||`` code inside the ``||while loop||``.

```python
def on_chat():
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
player.on_chat("destroy", on_chat)
```

## Step 5

Code the agent to ``||destroy||`` **up** after it ``||moves forward||`` , then **end** the ``||while loop||``.

```python
def on_chat():
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.destroy(UP)
player.on_chat("destroy", on_chat)
```

### Full Code: 

```python
def on_chat():
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.destroy(UP)
player.on_chat("destroy", on_chat)
```


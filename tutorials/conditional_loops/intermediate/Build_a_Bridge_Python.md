
# Build a Bridge: Python


## Step 1
Code a ``||player:on chat||`` command and name it **“build”**.

```python
def on_chat():
    pass
player.on_chat("build", on_chat)
```

## Step 2
Code the agent to ``||agent:set a block||`` of **oak wood planks**, count of **64**, in slot **1** inside the ``||player:on chat||`` command.

```python
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
}def on_chat():
    agent.set_item(PLANKS_OAK, 64, 1)
player.on_chat("build", on_chat)
)
```

## Step 3
Code the agent to ``||agent:move forward||`` by **1** .

```python
def on_chat():
    agent.set_item(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
player.on_chat("build", on_chat)
```

## Step 4

Inside the ``||player:on chat||``  command, code a ``||loops:while||`` loop that starts with checking if the agent does ``||agent:not detect a block||``  **down**.

```python
def on_chat():
    agent.set_item(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while not (agent.detect(AgentDetection.BLOCK, DOWN)):
        pass
player.on_chat("build", on_chat)
```

## Step 5

Inside the ``||loops:while||`` loop , code for the ``||agent:to place||`` **down**.

```python
def on_chat():
    agent.set_item(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while not (agent.detect(AgentDetection.BLOCK, DOWN)):
        agent.place(DOWN)
player.on_chat("build", on_chat)
```

## Step 6

After the ``||agent:place down||`` , code for the ``||agent:to move||`` **forward by 1**. Then end the ``||loops:while||`` loop.

```python
def on_chat():
    agent.set_item(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while not (agent.detect(AgentDetection.BLOCK, DOWN)):
        agent.place(DOWN)
        agent.move(FORWARD, 1)
player.on_chat("build", on_chat)
```

### Full Code: 

```python
def on_chat():
    agent.set_item(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while not (agent.detect(AgentDetection.BLOCK, DOWN)):
        agent.place(DOWN)
        agent.move(FORWARD, 1)
player.on_chat("build", on_chat)
```


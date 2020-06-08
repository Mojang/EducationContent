
# Build a Bridge: Python


## Step 1
Code a ``||chat||`` command and name it **“build”**.

```python
def on_chat():
    pass
player.on_chat("build", on_chat)
```

## Step 2
Code the agent to ``||set a block||`` of **oak wood planks**, count of **64**, in slot **1** inside the ``||chat||`` command.

```python
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
}def on_chat():
    agent.set_item(PLANKS_OAK, 64, 1)
player.on_chat("build", on_chat)
)
```

## Step 3
Code the agent to ``||move forward||`` by **1** .

```python
def on_chat():
    agent.set_item(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
player.on_chat("build", on_chat)
```

## Step 4

Inside the ``||chat||``  command, code a ``||while loop||`` that starts with checking if the agent does ``||not detect a block||``  **down**.

```python
def on_chat():
    agent.set_item(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while not (agent.detect(AgentDetection.BLOCK, DOWN)):
        pass
player.on_chat("build", on_chat)
```

## Step 5

Inside the ``||while loop||`` , code for the ``||agent to place||`` **down**.

```python
def on_chat():
    agent.set_item(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while not (agent.detect(AgentDetection.BLOCK, DOWN)):
        agent.place(DOWN)
player.on_chat("build", on_chat)
```

## Step 6

After the ``||place down||`` , code for the ``||agent to move||`` **forward by 1**. Then end the``||while loop||``.

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


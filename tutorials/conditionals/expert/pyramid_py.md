# Agent Pyramid: Python


## Step 1
Create a ``||player:on chat||`` command, name it **“pyramid”**, and set the second argument to **function (size)**.

```python
def on_chat(size):
    pass
player.on_chat("pyramid", on_chat)
```

## Step 2

Add an ``||logic:if||`` statement that evaluates whether **size** is greater than 0.

```python
def on_chat(size):
    if size > 0:
        pass
player.on_chat("pyramid", on_chat)
```

## Step 3

Inside the ``||logic:if||`` statement, code the agent to ``||agent:set block or item||`` of **sandstone** to be the value of the **size** variable multiplied by **size**—in slot 1.

```python
if size > 0:
        agent.set_item(SANDSTONE, size * size, 1)
player.on_chat("pyramid", on_chat)
```

## Step 4

Code the agent to ``||agent:set the active slot||`` as the 1 slot.

```python
agent.set_item(SANDSTONE, size * size, 1)
        agent.set_slot(1)
player.on_chat("pyramid", on_chat)
```

## Step 5

Next, set the agent ``||agent:place on move||`` to **true**.

```python
agent.set_slot(1)
        agent.set_assist(PLACE_ON_MOVE, True)
player.on_chat("pyramid", on_chat)
```

## Step 6

Add a ``||loops:for||`` loop that says the variable **i** from 0 to 4 minus 1.

```python
    agent.set_assist(PLACE_ON_MOVE, True)
        i = 0
        while i <= 0 - 0:
            i += 1
player.on_chat("pyramid", on_chat)
```

## Step 7

 Code the agent to ``||agent:move forward||`` by the value of the **size** variable.

```blocks
        i = 0
        while i <= 0 - 0:
            agent.move(FORWARD, size)
            i += 1
```

## Step 8

Code the agent to ``||turn left||`` and end of the ``||loops:for||`` loop. 

```python
while i <= 0 - 0:
            agent.move(FORWARD, size)
            agent.turn(LEFT_TURN)
            i += 1
```

## Step 9

After the ``||loops:for||`` loop, but still inside the ``||logic:if||`` statement, code the agent to **move up by 1**. 

```python
  i += 1
        agent.move(UP, 1)
```

## Step 10

 Code the agent ``||agent:place on move||`` to be **false**. 

```python
  agent.move(UP, 1)
        agent.set_assist(PLACE_ON_MOVE, False)
```

## Step 11

Place a ``||player:run chat||`` command to join the **pyramid** chat plus the value of the **size** variable minus 2.

```python
        agent.set_assist(PLACE_ON_MOVE, False)
        player.run_chat_command("pyramid" + ("" + str((size - 2))))
player.on_chat("pyramid", on_chat)
```

## Step 12

Go into Minecraft and test the **pyramid** chat command.

### Full Code: 

```python
def on_chat(size):
    if size > 0:
        agent.set_item(SANDSTONE, size * size, 1)
        agent.set_slot(1)
        agent.set_assist(PLACE_ON_MOVE, True)
        i = 0
        while i <= 0 - 0:
            agent.move(FORWARD, size)
            agent.turn(LEFT_TURN)
            i += 1
        agent.move(UP, 1)
        agent.set_assist(PLACE_ON_MOVE, False)
        player.run_chat_command("pyramid" + str((size - 2)))
player.on_chat("pyramid", on_chat)
```


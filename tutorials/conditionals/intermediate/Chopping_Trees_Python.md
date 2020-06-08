# Chopping Trees: Python


## Step 1
Create an ``||chat||`` command and name it **“it”**.

```python
def on_chat():
    pass
player.on_chat("lt", on_chat)
```

## Step 2

Inside the ``||chat||`` command, code the agent to ``||turn left||``.

```python
def on_chat():
    agent.turn(LEFT_TURN)
player.on_chat("lt", on_chat)
```

## Step 3

Create another ``||chat||`` command and name it **“tp”**.

```python
def on_chat():
    pass
player.on_chat("tp", on_chat)
```

## Step 4

Inside the ``||chat||`` command, code the agent to ``||teleport||`` to the player.

```python
def on_chat2():
    agent.teleport_to_player()
player.on_chat("tp", on_chat)
```

## Step 5

Create a third ``||chat||`` command and name it **“chop”**.

```python
def on_chat3():
    pass
player.on_chat("chop", on_chat)
```

## Step 6

Create a new ``||variable||``, name it **height**, and set it to **0**.

```python
height = 0
def on_chat():
    agent.turn(LEFT_TURN)
player.on_chat("lt", on_chat)
def on_chat2():
    agent.teleport_to_player()
player.on_chat("tp", on_chat2)
def on_chat3():
    height = 0
player.on_chat("chop", on_chat3)
```

## Step 7

Inside the **chop** ``||agent:on chat||`` command—directly under the **height** variable—create a ``||while loop||`` that begins with: ``||while the agent detects a block forward||``.

```python
def on_chat3():
    height = 0
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        pass
player.on_chat("chop", on_chat3)
```

## Step 8

Add a ``||while loop||`` to change the **height** ``||variable||`` to the value of **height plus 1**.

```python
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        height += 1
player.on_chat("chop", on_chat3)
```

## Step 9

In the ``||while loop||``—under the change variable **height**—code the agent to  ``||destroy up||``. 

Also, add a line to have the ``||agent move up by 1||``.

```python
        height += 1
        agent.destroy(UP)
        agent.move(UP, 1)
player.on_chat("chop", on_chat3)
```

## Step 10

Add a ``||for loop||`` after the ``||while loop||``. Insert the **height** variable into the **times** argument of the ``||repeat loop||``.

```python
    for index in range(height):
```

## Step 11

Inside the ``||for loop||``,  add a line for ``||agent move down by 1||`` and ``||agent destroy forward||``.

```python
    for index in range(height):
        agent.move(DOWN, 1)
        agent.destroy(FORWARD)
    player.on_chat("chop", on_chat3)
```

## Step 12

After the ``||for loop||``, code the agent to ``||collect all||`` .

```python
    for index in range(height):
        agent.move(DOWN, 1)
        agent.destroy(FORWARD)
    agent.collect_all()
player.on_chat("chop", on_chat3)
```

## Step 13

Go into Minecraft and test out the **it**, **tp**, and **chop** chat commands.

### Full Code: 

```python
height = 0
def on_chat():
    agent.turn(LEFT_TURN)
player.on_chat("lt", on_chat)
def on_chat2():
    agent.teleport_to_player()
player.on_chat("tp", on_chat2)
def on_chat3():
    height = 0
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        height += 1
        agent.destroy(UP)
        agent.move(UP, 1)
    for index in range(height):
        agent.move(DOWN, 1)
        agent.destroy(FORWARD)
    agent.collect_all()
player.on_chat("chop", on_chat3)
```


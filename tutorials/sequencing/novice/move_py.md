# Agent Move: Python

## Step 1
Code an ``||player:on chat||`` command and name it **“tp”**.

```python
def on_chat():
    pass
player.on_chat("tp", on_chat)
```

## Step 2

Inside the **tp**  ``||player:on chat||`` command, code the agent to ``||agent:teleport to player||`` .

```python
def on_chat():
    agent.teleport_to_player()
player.on_chat("tp", on_chat)
```

## Step 3

Code another ``||player:on chat||`` command and name it **“fd”**.

```python
def on_chat2():
    pass
player.on_chat("fd", on_chat)
```

## Step 4

Inside the  ``||player:on chat||`` **fd** command , code the agent to ``||agent:move||`` and set it to **forward by 5**. 

```python
def on_chat2():
    agent.move(FORWARD, 5)
player.on_chat("fd", on_chat2)
```

## Step 5

Code another ``||player:on chat||`` command and name it **“lt”**.

```python
def on_chat3():
        pass
player.on_chat("lt", on_chat3)
```

## Step 6

Inside the ``||player:on chat||`` **lt** command, code the agent to ``||agent:turn||`` and set it to **turn left**.

```python
def on_chat3():
        agent.turn(LEFT_TURN)
player.on_chat("lt", on_chat3)
```

## Step 7

Create yet another ``||player:on chat||`` command and name it **rt**.

```python
def on_chat4():
        pass
player.on_chat("rt", on_chat4)
```

## Step 8

Inside the **rt** chat command, code the ``||agent||`` to **turn right**.

```python
def on_chat4():
        agent.turn(RIGHT_TURN)
player.on_chat("rt", on_chat4)
```

## Step 9

Return to Minecraft, press **t** to open the chat and type the commands **tp**, **rt**, **lt**, **fd**—one at a time—to see what happens.

### Full Code: 

```python
def on_chat():
        agent.teleport_to_player()
player.on_chat("tp", on_chat)
def on_chat2():
    agent.move(FORWARD, 5)
player.on_chat("fd", on_chat2)
def on_chat3():
        agent.turn(LEFT_TURN)
player.on_chat("lt", on_chat3)
def on_chat4():
        agent.turn(RIGHT_TURN)
player.on_chat("rt", on_chat4)
```


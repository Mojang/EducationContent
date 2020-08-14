# Linked Walls: Python

## Step 1

Code an ``||player:on chat||`` command and name it “**position**”.

```python
def on_chat():
    pass
player.on_chat("position", on_chat)
```

## Step 2
Create a variable **PlayerPosition** and set it to the ``||positions:world||`` position. 

```python
PlayerPosition: Position = None
def on_chat():
    PlayerPosition = player.position()
player.on_chat("position", on_chat)
```

## Step 3
Inside the ``||player:on chat||`` command,  create a variable **from_position** and set it equal to **PlayerPosition** plus (**6,0,0**).
	
```python
PlayerPosition: Position = None
from_position: Position = None
def on_chat():
    PlayerPosition = player.position()
    from_position = positions.add(PlayerPosition, pos(6, 0, 0))
player.on_chat("position", on_chat)
```

## Step 4
Inside the ``||player:on chat||`` command,  create a variable **to_position** and set it equal to the variable **PlayerPosition** plus (**-6,13,0**). 

```python
PlayerPosition: Position = None
from_position: Position = None
to_position: Position = None
def on_chat():
    PlayerPosition = player.position()
    from_position = positions.add(PlayerPosition, pos(6, 0, 0))
    to_position = positions.add(PlayerPosition, pos(-6, 13, 0))
player.on_chat("position", on_chat)
```

## Step 5
Code another ``||player:on chat||`` command and name it “**wall**”.

```python
def on_chat():
    pass
player.on_chat("wall", on_chat)
```

## Step 6
Inside the **wall** ``||player:on chat||`` command, code a ``||blocks:fill and replace||`` and set it to **glass** from the **from_position** variable to the **to_position** variable. 

```python
def on_chat():
    blocks.fill(GLASS, from_position, to_position, FillOperation.REPLACE)
player.on_chat("wall", on_chat)
```

## Step 7
Using ``||blocks: on block broken||``, code an event such that when a **glass** block is broken, a **diamond** block is ``||blocks:placed||`` at a ``||positions: pick random position||`` in the range beginning with the **from_position** variable to the **to_position** variable. 

```python
def block_broken_glass():
    blocks.place(DIAMOND_BLOCK, randpos(from_position, to_position))
blocks.on_block_broken(GLASS, block_broken_glass)
```

## Step 8
Using ``||blocks: on block broken||``, code an event such that when a **diamond** block is broken, an **orange wool** block is ``||blocks:placed||`` at a ``||positions: random position||`` in the range beginning with the **from_position** variable to the **to_position** variable. 

```python
def block_broken_diamond():
    blocks.place(ORANGE_WOOL, randpos(from_position, to_position))
blocks.on_block_broken(DIAMOND_BLOCK, block_broken_diamond)
```

## Step 9
Press the **Play** button, go into Minecraft and test out all the events. Start with **position**, then **wall**. Break a **glass block** and see what happens.

```python
from_position: Position = None
to_position: Position = None
PlayerPosition: Position = None
def block_broken_glass():
    blocks.place(DIAMOND_BLOCK, randpos(from_position, to_position))
blocks.on_block_broken(GLASS, block_broken_glass)
def on_chat():
    blocks.fill(GLASS, from_position, to_position, FillOperation.REPLACE)
player.on_chat("wall", on_chat)
def on_chat2():
    PlayerPosition = player.position()
    from_position = positions.add(PlayerPosition, pos(6, 0, 0))
    to_position = positions.add(PlayerPosition, pos(-6, 13, 0))
player.on_chat("position", on_chat2)
def block_broken_diamond():
    blocks.place(ORANGE_WOOL, randpos(from_position, to_position))
blocks.on_block_broken(DIAMOND_BLOCK, block_broken_diamond)
```

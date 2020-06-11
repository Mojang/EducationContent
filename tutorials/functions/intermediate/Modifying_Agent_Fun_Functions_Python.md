# Modifying Agent Fun Functions: Python

## Step 1
You are given an ``||player:on chat||`` command **carrot**, the ``||player:on chat||`` command **chicken** and the ``||player:on chat||`` command **snowball**.

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(3):
        for index2 in range(5):
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
            agent.place(FORWARD)
        agent.move(BACK, 5)
        agent.move(RIGHT, 2)
player.on_chat("carrot", on_chat)
def on_chat2():
    for index3 in range(15):
        mobs.spawn(CHICKEN, pos(0, 0, 0))
player.on_chat("chicken", on_chat2)
def on_chat3():
    for index4 in range(15):
        mobs.spawn(SNOWBALL_PROJECTILE_MOB, pos(0, 10, 0))
player.on_chat("snowball", on_chat3)
def item_interacted_blaze_rod():
    player.run_chat_command("carrot")
    player.run_chat_command("chicken")
    player.run_chat_command("snowball")
player.on_item_interacted(BLAZE_ROD, item_interacted_blaze_rod)
```

## Step 2
Rename the given **carrot** ``||player:on chat||`` command to **torches**.  Modify the ``||agent:set block or item||`` to **Torch** at the count of **32** in slot **1**.

```python
def on_chat():
    agent.set_item(TORCH, 32, 1)
player.on_chat("torches", on_chat)
```

## Step 3

Modify the existing ``||loops:for||`` loops to complete 12 planting cycles.

**NOTE:**: This can be accomplished by either (4x3) or (3x4) loops.

```python
def on_chat():
    agent.set_item(TORCH, 32, 1)
    for index in range(3):
        for index2 in range(4):
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
            agent.place(FORWARD)
        agent.move(BACK, 5)
        agent.move(RIGHT, 2)
player.on_chat("torches", on_chat)
```

## Step 4
Modify the code when a blaze rod is ``||player:on item used||`` such that all three ``||player:on chat||`` commands—**carrot**, **chicken**, and **snowball**—will now run the **torches** ``||player:on chat|`` command instead of the **carrot** chat command. 

```python
def item_interacted_blaze_rod():
    player.run_chat_command("torches")
    player.run_chat_command("chicken")
    player.run_chat_command("snowball")
player.on_item_interacted(BLAZE_ROD, item_interacted_blaze_rod)
```

## Step 5
Return to Minecraft and type the commands **torches**, **chicken**, **snowball** into the chat to see what happens. 

## Step 6
Return to your coding and modify the other given ``||player:on chat||`` commands **chicken** and **snowball**.

## Step 7
Return to Minecraft and type the **chicken** and **snowball** commands into the chat to see what happens. 

### Full Code: 

```python
def on_chat():
    agent.set_item(TORCH, 32, 1)
    for index in range(3):
        for index2 in range(4):
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
            agent.place(FORWARD)
        agent.move(BACK, 5)
        agent.move(RIGHT, 2)
player.on_chat("torches", on_chat)
def on_chat2():
    for index3 in range(15):
        mobs.spawn(CHICKEN, pos(0, 0, 0))
player.on_chat("chicken", on_chat2)
def on_chat3():
    for index4 in range(15):
        mobs.spawn(SNOWBALL_PROJECTILE_MOB, pos(0, 10, 0))
player.on_chat("snowball", on_chat3)
def item_interacted_blaze_rod():
    player.run_chat_command("torches")
    player.run_chat_command("chicken")
    player.run_chat_command("snowball")
player.on_item_interacted(BLAZE_ROD, item_interacted_blaze_rod)
```


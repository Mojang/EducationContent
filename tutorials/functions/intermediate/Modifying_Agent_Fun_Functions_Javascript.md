# Modifying Agent Fun Functions: Javascript

## Step 1
You are given an ``||player:on chat||`` command **carrot**, the ``||player:on chat||`` command **chicken** and the ``||player:on chat||`` command **snowball**.

```javascript
player.onChat("carrot", function () {
    agent.setItem(CARROTS, 64, 1)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 5; index++) {
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
            agent.place(FORWARD)
        }
        agent.move(BACK, 5)
        agent.move(RIGHT, 2)
    }
})
player.onChat("chicken", function () {
    for (let index = 0; index < 15; index++) {
        mobs.spawn(CHICKEN, pos(0, 0, 0))
    }
})
player.onChat("snowball", function () {
    for (let index = 0; index < 15; index++) {
        mobs.spawn(SNOWBALL_PROJECTILE_MOB, pos(0, 10, 0))
    }
})
```

## Step 2
Rename the given **carrot** ``||player:on chat||`` command to **torches**.  Modify the ``||agent:set block or item||`` to **Torch** at the count of **32** in slot **1**.

```javascript
player.onChat("torches", function () {
    agent.setItem(TORCHES, 32, 1)
})
```

## Step 3

Modify the existing ``||loops:for||`` loops to complete 12 planting cycles.

**NOTE:**: This can be accomplished by either (4x3) or (3x4) loops.

```javascript
player.onChat("torches", function () {
    agent.setItem(TORCHES, 32, 1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 3; index++) {
        	
        }
        agent.move(BACK, 5)
        agent.move(RIGHT, 2)
    }
})
```

## Step 4
Modify the code when a blaze rod is ``||player:on item used||`` such that all three ``||player:on chat||`` commands—**carrot**, **chicken**, and **snowball**—will now run the **torches** ``||player:on chat|`` command instead of the **carrot** chat command. 

```javascript
player.onItemInteracted(BLAZE_ROD, function () { 
    player.runChatCommand("torches") 
    player.runChatCommand("chicken") 
    player.runChatCommand("snowball") 
})
```

## Step 5
Return to Minecraft and type the commands **torches**, **chicken**, **snowball** into the chat to see what happens. 

## Step 6
Return to your coding and modify the other given ``||player:on chat||`` commands **chicken** and **snowball**.

## Step 7
Return to Minecraft and type the **chicken** and **snowball** commands into the chat to see what happens. 

### Full Code: 

```javascript
player.onChat("torches", function () {
    agent.setItem(TORCH, 32, 1)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 4; index++) {
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
            agent.place(FORWARD)
        }
        agent.move(BACK, 5)
        agent.move(RIGHT, 2)
    }
})
player.onChat("chicken", function () {
    for (let index = 0; index < 15; index++) {
        mobs.spawn(CHICKEN, pos(0, 0, 0))
    }
})
player.onChat("snowball", function () {
    for (let index = 0; index < 15; index++) {
        mobs.spawn(SNOWBALL_PROJECTILE_MOB, pos(0, 10, 0))
    }
})
player.onItemInteracted(BLAZE_ROD, function () {
    player.runChatCommand("torches")
    player.runChatCommand("chicken")
    player.runChatCommand("snowball")
})
```


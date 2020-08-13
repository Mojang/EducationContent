# Modifying Agent Fun Functions: Blocks

## Step 1
You are given the following ``||player:on chat||`` commands **carrot**, **chicken** and **snowball**.

```template
player.onChat("carrot", function () {
    agent.setItem(CARROTS, 64, 1)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 5; index++) {
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
            agent.place(DOWN)
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

```blocks
player.onChat("torches", function () {
    agent.setItem(TORCHES, 32, 1)
})
```

## Step 3

Modify the existing ``||loops:repeat||`` loops to complete 12 planting cycles.

**NOTE:**: This can be accomplished by either (4x3) or (3x4) loops.

```blocks
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
Get a new ``||player:on item used||`` command and select **trident**.  Add a ``||player:run chat||`` command named **torches**. Add another ``||player:run chat||``  command and name it **chicken**. Add another ``||player:run chat||``  command and name it **snowball**. 

```blocks
player.onItemInteracted(BLAZE_ROD, function () { 
    player.runChatCommand("torches") 
    player.runChatCommand("chicken") 
    player.runChatCommand("snowball") 
})
```

## Step 5
Press the **Play** button, return to Minecraft and type the commands **torches**, **chicken**, **snowball** into the chat to see what happens. 

## Step 6
Modify the other given ``||player:on chat||`` commands **chicken** and **snowball**. You can select a different effect for this coding experience. 

## Step 7
Press the **Play** button, return to Minecraft and type the **chicken** and **snowball** commands into the chat to see what happens. 


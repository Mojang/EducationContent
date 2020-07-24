# Agent Fun Functions: Blocks

## Step 1
You are given an ``||player:on chat||`` command **carrot**, the ``||player:on chat||`` command **chicken** and the ``||player:on chat||`` command **snowball**.

```template
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
Get a new ``||player:on item used||`` and select **Blaze Rod**.  Add a ``||player:run chat||`` command and name it **carrot**, get another ``||player:run chat||`` command and name it **chicken**, and get a third ``||player:run chat||`` command and name it **snowball**.

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
    player.runChatCommand("carrot")
    player.runChatCommand("chicken")
    player.runChatCommand("snowball")
})
```

## Step 3

Press the **Play** button, return to Minecraft and type the commands **carrot**, **chicken**, **snowball** into the chat to see what happens.


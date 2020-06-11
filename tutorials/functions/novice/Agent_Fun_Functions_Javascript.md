# Agent Fun Functions: Blocks

## Step 1
You are given the following code for “carrots,” “chicken,” and “snowball” chat commands.

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
Code when a blaze rod is ``||player:on item used||`` that the **carrot**, **chicken**, and **snowball** ``||player:on chat||`` commands run. 

```javascript
player.onItemInteracted(BLAZE_ROD, function () {
    player.runChatCommand("carrot")
    player.runChatCommand("chicken")
    player.runChatCommand("snowball")
})
```

## Step 3
Return to Minecraft and type the commands **carrot**, **chicken**, **snowball** into the chat to see what happens.

### Full Code: 

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
player.onItemInteracted(BLAZE_ROD, function () {
    player.runChatCommand("carrot")
    player.runChatCommand("chicken")
    player.runChatCommand("snowball")
})
```


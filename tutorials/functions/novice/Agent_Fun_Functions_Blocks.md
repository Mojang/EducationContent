# Agent Fun Functions: Blocks

## Step 1
You are given an on chat command “carrot”, the on chat command “chicken” and the on chat command “snowball.”


## Step 2
Get a new ``||player:on item used||`` and select **Blaze Rod**.  Add a ``||player:run chat||`` and name it **carrot**, get another ``||player:run chat||`` and name it **chicken**, and get a third ``||player:run chat||`` and name it **snowball**

```blocks
player.onChat("lt", function () {
    agent.turn(LEFT_TURN)
})
```

## Step 3

Return to Minecraft and type the commands **carrot**, **chicken**, **snowball** into the chat to see what happens.

### Full Code: 

```blocks
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
```


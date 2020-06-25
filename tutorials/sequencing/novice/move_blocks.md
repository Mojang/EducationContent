# Agent Move: Blocks

## Step 1
Create an ``||player:on chat||`` command and name it **“tp”**.

```blocks
player.onChat("tp", function () {
})
```

## Step 2

Get a ``||agent:teleport to player||`` and drag it inside the **tp**  ``||player:on chat||`` command.

```blocks
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## Step 3

Get another ``||player:on chat||`` command and name it **“fd”**.

```blocks
player.onChat("fd", function () {
})
```

## Step 4

Get an ``||agent:move||`` and set it to **forward by 5**. 

```blocks
player.onChat("fd", function () {
    agent.move(FORWARD, 5)
})
```

## Step 5

Get another ``||player:on chat||`` command and name it **“it”**.

```blocks
player.onChat("lt", function () {
})
```

## Step 6

Get a ``||agent:turn||`` and set it to **turn left**. Drag it into the ``||player:on chat||`` **it** command.

```blocks
player.onChat("lt", function () {
    agent.turn(LEFT_TURN)
})
```

## Step 7

Get another ``||player:on chat||`` command and name it **“rt”**.

```blocks
player.onChat("rt", function () {
    agent.turn(RIGHT_TURN)
})
```

## Step 8

Get another ``||agent:turn||``, set it to **turn right**, and then drag the ``||agent||`` **turn right** into the ``||player:on chat||`` **rt** command.

```blocks
player.onChat("rt", function () {
    agent.turn(RIGHT_TURN)
})
```


## Step 9

Return to Minecraft, press **t** to open the chat and type the commands **tp**, **rt**, **lt**, **fd**—one at a time—to see what happens.

### Full Code: 

```blocks
player.onChat("lt", function () {
    agent.turn(LEFT_TURN)
})
player.onChat("fd", function () {
    agent.move(FORWARD, 5)
})
player.onChat("tp", function () {
    agent.teleportToPlayer()
player.onChat("rt", function () { 
    agent.turn(RIGHT_TURN) 

})
```


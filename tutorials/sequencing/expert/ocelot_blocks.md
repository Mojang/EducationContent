# Ocelot Enclosure: Blocks

## Step 1
Create an ``||player:on chat||`` command and name it **fence**.

```blocks
player.onChat("fence", function () {
})
```

## Step 2

Go to the **advanced** section of the toolbox and find ``||builder: builder||``. Get a ``||builder:teleport||`` and drag it to the ``||player: on chat||`` **fence** command. Get ``||positions: world coordinates||`` and set coordinates to: **-695, 9, 880**. Add a ``||builder:face||`` command and set it to **West (negative X)**,  then drag it into the ``||player:on chat||`` **fence** command below the ``||builder:teleport||`` block.

```blocks
player.onChat("1", function () {
    builder.teleportTo(positions.createWorld(-695, 9, 880)))
    builder.face(WEST)
})
```

## Step 3

Get a ``||builder:move||`` and set it to **forward by 21**. Drag it into the ``||player:on chat||`` **fence** command below the ``||builder:face||`` **West**.

```blocks
player.onChat("side1", function () {
})
```

## Step 4

Add a ``||builder:turn||`` and set it to **turn right**. Drag it into the ``||player:on chat|`` **fence** command below the ``||builder:move||`` forward.

```blocks
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    
})
```

## Step 5

Get another ``||builder:move||`` block and set it to **forward by 9**. Drag it into the ``||player:on chat||`` **fence**  below the ``||builder:turn||`` **right** block. Add another ``||builder:turn||`` command and set it to turn **right**. 

Drag the ``||builder: turn||`` into the ``||player:on chat||`` **fence** command below the ``||builder:move||`` **forward** command.

```blocks
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
    builder.turn(RIGHT_TURN)
    })
```

## Step 6

Add another ``||builder:builder move||`` command and set it to **forward by 21**. Add a ``||builder:builder turn||`` block and set it to **turn right**. Get another ``||builder:builder move||`` block and set it to **forward by 9**. Drag both of these into the ``||player:on chat||`` **fence** command below the last ``||builder:builder turn||`` **right**.

```blocks
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
})
```

## Step 7

To place fencing along the perimeter of the rectangle, add a ``||builder:builder trace path from mark with||`` block and set it to **Oak Fence**. Drag it into the ``||player:on chat||`` **fence** command below the last ``||builder:move||`` **forward**.

```blocks
    builder.move(FORWARD, 9)
    builder.tracePath(OAK_FENCE)
})
```

## Step 8

After completing the fence, get a ``||mobs:spawn animal||`` and select **ocelot**. Add a ``||math:pick random position||``, set it to these coordinates inside the fence: from **(-20, 4, -58)** to **(-37, 4, -50)**, then insert it into the ``||mobs:spawn animal||`` **ocelot** position. Drag the **ocelot** into the ``||player:on chat||`` **fence** command below the ``||builder:builder trace path from mark||`` **Oak Fence**.

```blocks
    builder.tracePath(OAK_FENCE)
    mobs.spawn(OCELOT, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
})
```

## Step 9

To spawn a second ocelot into the fence, duplicate the entire ``||mobs:spawn animal||`` **ocelot**. Drag it into the ``||player:on chat||`` **fence** command below the existing **ocelot**.

```blocks
    mobs.spawn(OCELOT, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
    mobs.spawn(OCELOT, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
})
```

## Step 10

Duplicate the entire **ocelot** and change the animal to **wolf**. Duplicate the **wolf** to spawn two more wolves into the fence. Drag both wolves into the ``||player:on chat||`` **fence** command below the last **ocelot**.

```blocks
    mobs.spawn(OCELOT, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
    mobs.spawn(WOLF, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
    mobs.spawn(WOLF, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
})
```

## Step 11

Return to Minecraft and test your code.

```blocks
player.onChat("fence", function () {
    builder.teleportTo(positions.createWorld(-695, 9, 880))
    builder.face(WEST)
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
    builder.tracePath(OAK_FENCE)
    mobs.spawn(OCELOT, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
    mobs.spawn(OCELOT, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
    mobs.spawn(WOLF, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
    mobs.spawn(WOLF, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
})
```


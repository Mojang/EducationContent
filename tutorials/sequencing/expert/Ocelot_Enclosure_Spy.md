# Ocelot Enclosure: Spy

## Step 1
Code an ``||player:on chat||`` command and name it **fence**.

```spy
player.onChat("fence", function () {
})
```

## Step 2

Code a ``||builder:teleport||`` world position **-18, 4, -50**, facing **West**.

```blocks
player.onChat("1", function () {
    builder.teleportTo(positions.createWorld(-18, 4, -50))
    builder.face(WEST)
})
```

## Step 3

``||builder:move||`` the builder **forward by 21**. 

```blocks
player.onChat("side1", function () {
})
```

## Step 4

``||builder:turn||`` the builder to the **right**.

```blocks
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    
})
```

## Step 5

``||builder:move||`` the builder **forward by 9** and ``||builder:turn||`` **right**. 

```blocks
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
    builder.turn(RIGHT_TURN)
    })
```

## Step 6

``||builder:move||`` the builder **forward by 21**, ``||builder:turn||`` **right**, and ``||builder:move||`` **forward by 9**.

```blocks
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
})
```

## Step 7

To place fencing along the perimeter of the rectangle, code the builder to ``||builder:trace||`` his former path while building with **Oak Fence** .

```blocks
    builder.move(FORWARD, 9)
    builder.tracePath(OAK_FENCE)
})
```

## Step 8

Randomly ``||mobs:spawn||`` one **ocelot** inside the fence that was just built.

```blocks
    builder.tracePath(OAK_FENCE)
    mobs.spawn(OCELOT, randpos(
    world(-20, 4, -58),
    world(-37, 4, -50)
    ))
})
```

## Step 9

Randomly ``||mobs:spawn||`` another **ocelot** inside the fence that was just built.

```blocks
    mobs.spawn(OCELOT, randpos(
    world(-20, 4, -58),
    world(-37, 4, -50)
    ))
    mobs.spawn(OCELOT, randpos(
    world(-20, 4, -58),
    world(-37, 4, -50)
    ))
})
```

## Step 10

Randomly ``||mobs:spawn||`` two wolves inside the fence that was just built.

```blocks
    mobs.spawn(OCELOT, randpos(
    world(-20, 4, -58),
    world(-37, 4, -50)
    ))
    mobs.spawn(WOLF, randpos(
    world(-20, 4, -58),
    world(-37, 4, -50)
    ))
    mobs.spawn(WOLF, randpos(
    world(-20, 4, -58),
    world(-37, 4, -50)
    ))
})
```

## Step 11

Return to Minecraft and test your code.

### Full Code: 

```blocks
player.onChat("1", function () {
    builder.teleportTo(positions.createWorld(-18, 4, -50))
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
    world(-20, 4, -58),
    world(-37, 4, -50)
    ))
    mobs.spawn(OCELOT, randpos(
    world(-20, 4, -58),
    world(-37, 4, -50)
    ))
    mobs.spawn(WOLF, randpos(
    world(-20, 4, -58),
    world(-37, 4, -50)
    ))
    mobs.spawn(WOLF, randpos(
    world(-20, 4, -58),
    world(-37, 4, -50)
    ))
})
```


# Ocelot Enclosure: JavaScript

## Step 1
Code an ``||player:on chat||`` command and name it **fence**.

```javascript
player.onChat("fence", function () {
})
```

## Step 2

Code a ``||builder:builder teleport||`` at the world position **-695, 9, 880**, facing **West**.

```javascript
player.onChat("1", function () {
    builder.teleportTo(positions.createWorld(-18, 4, -50))
    builder.face(WEST)
})
```

## Step 3

``||builder:Move||`` the builder **forward by 21**. 

```javascript
player.onChat("side1", function () {
})
```

## Step 4

``||builder:Turn||`` the builder to the **right**.

```javascript
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    
})
```

## Step 5

``||builder:Move||`` the builder **forward by 9** and ``||builder:turn||`` **right**. 

```javascript
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
    builder.turn(RIGHT_TURN)
    })
```

## Step 6

``||builder:Move||`` the builder **forward by 21**, ``||builder:turn||`` **right**, and ``||builder:move||`` **forward by 9**.

```javascript
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 21)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 9)
})
```

## Step 7

To place fencing along the perimeter of the rectangle, code the builder to ``||builder:trace||`` his former path while building with **Oak Fence** .

```javascript
    builder.move(FORWARD, 9)
    builder.tracePath(OAK_FENCE)
})
```

## Step 8

Randomly ``||mobs:spawn||`` one **ocelot** inside the fence that was just built.

```javascript
    builder.tracePath(OAK_FENCE)
    mobs.spawn(OCELOT, randpos(
    world(-698, 9, 870),
    world(-715, 9, 880)
    ))
})
```

## Step 9

Randomly ``||mobs:spawn||`` another **ocelot** inside the fence that was just built.

```javascript
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

Randomly ``||mobs:spawn||`` two wolves inside the fence that was just built.

```javascript
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

```javascript
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


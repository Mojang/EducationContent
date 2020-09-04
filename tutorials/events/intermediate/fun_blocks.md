
# Fun with Events: Blocks

## Step 1
Get an ``||player: on player walk||`` block and a ``||mobs:spawn||`` block and drag them to the workspace. Drag a ``||mobs: projectile||`` block into the **animal parameter** of the ``||mobs:spawn||`` block and select **fireworks rocket**.

```blocks
player.onTravelled(WALK, function () { 
    mobs.spawn(FIREWORKS_ROCKET, pos(0, 0, 0)) 
}) 
```
## Step 2

Change the (y) coordinate of the position to **10 blocks** above the players position (0, **10**, 0).

```blocks
player.onTravelled(WALK, function () { 
    mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0)) 
}) 
```
## Step 3
Drag a ``||loops:repeat||`` loop into the ``||player:on player walk||`` and set it to **25 times**. The ``||mobs:spawn||`` block should be inside the ``||loops:repeat||`` loop.

```blocks
player.onTravelled(WALK, function () {
    for (let index = 0; index < 25; index++) {
        mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0))
    }
})
```

## Step 4
Get an ``||blocks:on broken||`` block and drag it into the workspace, then select the **oak wood** block.

## Step 5
Add a ``||mobs:spawn||`` block, set it to **chicken** and change the (y) coordinate of the position to **10 blocks** above the player's position (0, **10**, 0).

```blocks
blocks.onBlockBroken(PLANKS_OAK, function () { 
    mobs.spawn(CHICKEN, pos(0, 10, 0)) 
}) 
```

## Step 6
Add a ``||loops:repeat||`` loop into the ``||blocks:on broken||`` block around the ``||mobs:spawn||`` block, set the ``||loops:repeat||`` loop to **25 times**.

```blocks
blocks.onBlockBroken(PLANKS_OAK, function () { 
    for (let index = 0; index < 25; index++) { 
        mobs.spawn(CHICKEN, pos(0, 10, 0)) 
    } 
}) 
```

## Step 7

Get an ``||player:on item used||`` and drag it into the workspace, set it to **Golden Apple**.

## Step 8

Get an ``||mobs: apply to||`` block, drag it into the workspace, select **levitation**, set the duration to **10** and the amplifier to **5**.

## Step 9

Get an ``||mobs:all animal||`` block, set it to **chicken** and drag it into the **to** argument of the ``||mobs: apply to||``, then drag the completed ``||mobs:apply to||`` block into the ``||player: on item used||``.  

```blocks
player.onItemInteracted(GOLDEN_APPLE, function () { 
    mobs.applyEffect(LEVITATION, mobs.entitiesByType(CHICKEN), 10, 5) 
}) 
```
## Step 10
Press the **Play** button, go into Minecraft and test out all the events.


```blocks
player.onTravelled(WALK, function () { 
    for (let index = 0; index < 25; index++) { 
        mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0)) 
    } 
}) 
 
blocks.onBlockBroken(PLANKS_OAK, function () { 
    for (let index = 0; index < 25; index++) { 
        mobs.spawn(CHICKEN, pos(0, 10, 0)) 
    } 
}) 
player.onItemInteracted(GOLDEN_APPLE, function () { 
    mobs.applyEffect(LEVITATION, mobs.entitiesByType(CHICKEN), 10, 5) 
}) 
```


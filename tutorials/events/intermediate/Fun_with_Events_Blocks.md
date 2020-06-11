
# Fun with Events: Blocks

## Step 1
Get an ``||on player||`` and set it **walk**. Get a ``||mobs:spawn||`` drag it into the workspace, and set it to **animal**. Drag a ``||projectile||`` into the **animal parameter** of the spawn animal and select **fireworks rocket**.

Change the (y) coordinate of the position to **10 blocks** above the players position (0, 10, 0).

```blocks
player.onTravelled(WALK, function () { 
    mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0)) 
}) 
```

## Step 2
Drag a ``||loops:repeat||`` loop into the ``||on player||`` walk and set it to **25 times**. Drag the ``||spawn:animal||`` into the ``||loops:repeat||`` loop.

```blocks
player.onChat("destroy", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
    	
    }
})
```

## Step 3
Get an ``||on broken||`` block and drag it into the workspace, then select the **oak wood** block.

Add a ``||mobs:spawn||``, set it to **chicken** and change the (y) coordinate of the position to **10 blocks** above the players position (0, 10, 0).

```blocks
blocks.onBlockBroken(PLANKS_OAK, function () { 
    mobs.spawn(CHICKEN, pos(0, 10, 0)) 
}) 
```

## Step 4
Add a ``||loops:repeat||`` loop into the ``||on broken||`` block around the ``||mobs:spawn (animal)||``, set the ``||loops:repeat||`` loop to **25 times**.

```blocks
blocks.onBlockBroken(PLANKS_OAK, function () { 
    for (let index = 0; index < 25; index++) { 
        mobs.spawn(CHICKEN, pos(0, 10, 0)) 
    } 
}) 
```

## Step 5

Get an ``||on item: used||`` and drag it into the workspace, set it to **Golden Apple**.

Get an ``||apply to||``, drag it into the workspace, select **levitation**, set the duration to **10** and the amplifier to **5**.

Get an ``||all animal||``, set it to **chicken** and drag it into the **to** argument of the ``||apply to||``, then drag the completed ``||apply to||`` into the ``||on item:Golden Apple||``.  

```blocks
player.onItemInteracted(GOLDEN_APPLE, function () { 
    mobs.applyEffect(LEVITATION, mobs.entitiesByType(CHICKEN), 10, 5) 
}) 
```
## Step 6
Go into Minecraft and test out all the events.

### Full Code: 

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


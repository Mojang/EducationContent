# Loops: Blocks

## Step 1
Get an ``||player:on item used||`` command and choose **Bone**.

```blocks
player.onItemInteracted(BONE, function () { 
 
}) 
```

## Step 2
Get a ``||loops:repeat||`` loop, drag it into the **Bone** ``||player:on item used||`` and set it to repeat **6** times.

```blocks
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
      
    } 
}) 
```

## Step 3
Get a ``||mobs:spawn animal at||`` block and drag it into the ``||loops:repeat||`` loop. Select **Zombie Horse** and set the  position to (0,0,0). 

**NOTE:** This will repeat 6 times inside the loop.

```blocks
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0)) 
    } 
}) 
```

## Step 4
Get another ``||loops:repeat||`` loop, drag it into the **Stone Ax** ``||player: on item used||`` and set it to repeat **4** times.

```blocks
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0)) 
    } 
    for (let index = 0; index < 4; index++) { 
      
    } 
}) 
```

## Step 5
Get another  ``||mobs:spawn animal at||`` block and drag it into the new ``||loops:repeat||`` loop. Select **Skeleton Horse** and set the position to (0,0,0). 

**NOTE:** This will repeat **4** times inside the loop.

```blocks
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0)) 
    } 
    for (let index = 0; index < 4; index++) { 
        mobs.spawn(SKELETON_HORSE, pos(0, 0, 0)) 
    } 
}) 
```

## Step 6
Press the **Play** button, go into Minecraft and test out all the events. Check out the items that you have in the chest. 

```blocks
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0)) 
    } 
    for (let index = 0; index < 4; index++) { 
        mobs.spawn(SKELETON_HORSE, pos(0, 0, 0)) 
    } 
}) 
```


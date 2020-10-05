### @explicitHints 1

# Last Stand at the Alamo 

## Step 1
Respond to a mob killed event: From the ``||Mobs:MOBS||`` Toolbox drawer, drag a ``||Mobs:on killed||`` block into the coding Workspace.

### ~ tutorialhint
```blocks
mobs.onMobKilled(CHICKEN, function () {
})
```

## Step 2
See whether it was a monster: from the ``||Mobs:MOBS||`` Toolbox drawer, drag a ``||Mobs:monster||`` drop-down block out to replace the default, **animal**. Using the drop-down menu in the ``||Mobs:monster||`` block, select the **zombie** spawn egg.

## Step 3
Get set up to spawn new zombies! From the ``||Mobs:MOBS||`` Toolbox drawer, drag a ``||Mobs:spawn animal||`` block under the ``||Mobs:on killed||`` event handler block.

### ~ tutorialhint
```blocks
mobs.onMobKilled(mobs.monster(ZOMBIE), function () {
mobs.spawn(CHICKEN, pos(0, 0, 0))
})
```

## Step 4
Select the zombie egg. Similar to what you did in step 2, here you need to replace the default **animal** setting with zombie in the spawn block.

### ~ tutorialhint
```blocks
mobs.onMobKilled(mobs.monster(ZOMBIE), function () {
mobs.spawn(mobs.monster(ZOMBIE), pos(0, 0, 0))
})
```

## Step 5
Two zombies are better than one. You want to spawn two zombies for every one you kill, so from the ``||Loops:Loops||`` Toolbox drawer, drag a ``||Loops:repeat||`` loop onto the work area. This ``||Loops:repeat||`` loop should be inside the ``||Mobs:on killed||`` event, and your ``||Mobs:spawn||`` block should be inside the ``||Loops:repeat||`` loop.

In the ``||Blocks:repeat||`` loop, enter the number **2**. 

### ~ tutorialhint
```blocks
mobs.onMobKilled(mobs.monster(ZOMBIE), function () {
    for (let index = 0; index < 2; index++) {
        mobs.spawn(mobs.monster(ZOMBIE), pos(0, 0, 0))
    }
})
```

## Step 6
Where to spawn the zombies? Replace the default **(~0 ~0 ~0)** with a ``||Positions:pick random position||`` block.

## Step 7
Set the random position range: in the ``||Blocks:pick random position||`` block, enter the **from** coordinates as **(~10 ~0 ~10)** and the **to** coordinates as **(~-10 ~0 ~-10)**.

### ~ tutorialhint
```blocks
mobs.onMobKilled(mobs.monster(ZOMBIE), function () {
    for (let i = 0; i < 2; i++) {
        mobs.spawn(mobs.monster(ZOMBIE), randpos(
            pos(10, 0, 10),
            pos(-10, 0, -10)
        ))
    }
})
```

## Step 8

Try it out in game!

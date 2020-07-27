### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Lava swim

## Step 1
Your challenge is to ``||player:swim||`` across the lava lake. Try ``||mobs:applying fire resistance||`` to the **nearest player**. Think about **duration** and **amplifier**. 



```ghost
player.onTravelled(SWIM_LAVA, function () {
    mobs.applyEffect(FIRE_RESISTANCE, mobs.target(NEAREST_PLAYER), 10, 1)
})
```
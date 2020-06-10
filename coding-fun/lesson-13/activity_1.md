
### @hideIteration true 
### @explicitHints 1


# Lava swim

## Step 1
Your challenge is to swim across the lava lake. Try **applying fire resistance** to the **nearest player** with duration set at **10** and amplifier set to **1**.



```ghost
player.onTravelled(SWIM_LAVA, function () {
    mobs.applyEffect(FIRE_RESISTANCE, mobs.target(NEAREST_PLAYER), 10, 1)
})
```
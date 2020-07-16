### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Power the portal!

## Step 1
You need to make the lightning strike while you are standing on the gold plates. First, you need to set the ``||gameplay: weather||`` to rain. Then try using ``||logic: if||``, ``||blocks: test for||`` and ``||mobs: spawn a ligtning bolt||``. 

### ~ tutorialHint
The gold plates are beneath you at **0, -1, 0** coordinates. 

```ghost
player.onTravelled(WALK, function () {
    if (blocks.testForBlock(GOLD_BLOCK, pos(0, -1, 0))) {
        mobs.spawn(LIGHTNING_BOLT, pos(0, 0, 0))
    }
})
gameplay.setWeather(RAIN)
```
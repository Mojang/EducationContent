### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# The Climb

## Step 1
Your challenge is to jump really high to climb up to the inaccessible area. Try **applying jump boost** to the **nearest player** with duration set to **10**.


```ghost
loops.forever(function () {
    mobs.applyEffect(JUMP_BOOST, mobs.target(NEAREST_PLAYER), 10, 1)
})
```

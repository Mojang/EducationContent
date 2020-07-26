### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# The Climb

## Step 1
Your challenge is to **jump really high** to climb up to the inaccessible area. Think about **duration** and **amplifier**.


```ghost
loops.forever(function () {
    mobs.applyEffect(JUMP_BOOST, mobs.target(NEAREST_PLAYER), 10, 1)
})
```

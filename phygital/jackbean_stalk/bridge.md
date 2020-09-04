# Jack and the Beanstalk

## Step 1
Repair the bridge

```template
player.onChat("bridge", function () {
blocks.fill(
SPRUCE_WOOD_SLAB,
world(-442, 68, -839),
world(-440, 68, -839),
FillOperation.Replace
)
loops.pause(1000)
blocks.fill(
    SPRUCE_WOOD_SLAB,
    world(-442, 68, -838),
    world(-440, 68, -838),
    FillOperation.Replace
    )
    loops.pause(1000)
    blocks.fill(
    SPRUCE_WOOD_SLAB,
    world(-442, 68, -837),
    world(-440, 68, -837),
    FillOperation.Replace
    )
    loops.pause(1000)
    blocks.fill(
    SPRUCE_WOOD_SLAB,
    world(-442, 68, -836),
    world(-440, 68, -836),
    FillOperation.Replace
    )
    loops.pause(1000)
    blocks.fill(
    SPRUCE_WOOD_SLAB,
    world(-442, 68, -835),
    world(-440, 68, -835),
    FillOperation.Replace
    )
    loops.pause(1000)
    blocks.fill(
    SPRUCE_WOOD_SLAB,
    world(-442, 68, -834),
    world(-440, 68, -834),
    FillOperation.Replace
    )
})
```
## Step 2 
Run this code to build the bridge. Then return to your code and change the bridge build materials to stone, and change how many blocks wide the bridge will be. 

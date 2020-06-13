# Test

## Step 1
Get rid of the witch! 


```template
player.onChat("witch_hunters", function () {
    mobs.kill(
    mobs.entitiesByType(mobs.monster(WITCH))
    )
    blocks.fill(
    AIR,
    world(120, 70, -609),
    world(146, 97, -591),
    FillOperation.Replace
    )
    blocks.replace(
    AIR,
    NETHERRACK,
    world(120, 68, -609),
    world(146, 97, -591)
    )
    blocks.replace(
    AIR,
    FIRE,
    world(120, 68, -609),
    world(146, 97, -591)
    )
    loops.pause(1000)
    for (let index = 0; index < 40; index++) {
        blocks.place(CAKE, randpos(
        world(123, 70, -610),
        world(139, 70, -591)
        ))
        blocks.place(WHITE_TULIP, randpos(
        world(123, 70, -610),
        world(139, 70, -591)
        ))
    }
})
```

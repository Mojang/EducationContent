# Pompeii Eruption

## Step 1
Make the volcano erupt and watch what happens as the heat rises and the ash falls. This takes a bit of time! Be patient and watch carefully.

```template
player.onChat("eruption", function () { 
    blocks.place(Block.Air, positions.createWorld(-163, 120, -172)) 
    blocks.place(Block.Air, positions.createWorld(-163, 120, -170)) 
    blocks.place(Block.Air, positions.createWorld(-163, 120, -166)) 
    blocks.place(Block.Air, positions.createWorld(-157, 120, -161)) 
    blocks.place(Block.Air, positions.createWorld(-154, 120, -161)) 
    blocks.place(Block.Air, positions.createWorld(-147, 120, -161)) 
    blocks.place(Block.Air, positions.createWorld(-144, 120, -165)) 
    blocks.place(Block.Air, positions.createWorld(-144, 120, -167)) 
    blocks.place(Block.Air, positions.createWorld(-144, 120, -171)) 
    blocks.place(Block.Air, positions.createWorld(-144, 120, -175)) 
    for (let i = 0; i < 1000; i++) { 
        blocks.place(Block.GrayConcretePowder, positions.random( 
            positions.createWorld(-46, 162, -25), 
            positions.createWorld(-274, 162, -208) 
        )) 
    } 
    player.say("80F = Average day in Pompeii") 
    blocks.place(Block.Fire, positions.createWorld(-79, 73, -137)) 
    for (let i = 0; i < 800; i++) { 
        blocks.place(Block.GrayConcretePowder, positions.random( 
            positions.createWorld(-46, 162, -25), 
            positions.createWorld(-274, 162, -208) 
        )) 
    } 
    player.say("120F = Heat rising") 
    blocks.place(Block.Fire, positions.createWorld(-173, 72, -93)) 
    for (let i = 0; i < 600; i++) { 
        blocks.place(Block.GrayConcretePowder, positions.random( 
            positions.createWorld(-46, 162, -25), 
            positions.createWorld(-274, 162, -208) 
        )) 
    } 
    player.say("160F = People begin to experience skin burns") 
    blocks.place(Block.Fire, positions.createWorld(-198, 68, -69)) 
    for (let i = 0; i < 400; i++) { 
        blocks.place(Block.GrayConcretePowder, positions.random( 
            positions.createWorld(-46, 162, -25), 
            positions.createWorld(-274, 162, -208) 
        )) 
    } 
    player.say("200F = Mass confusion sets in, brain damage due to heat") 
    blocks.place(Block.Fire, positions.createWorld(-223, 74, -160)) 
    for (let i = 0; i < 300; i++) { 
        blocks.place(Block.GrayConcretePowder, positions.random( 
            positions.createWorld(-46, 162, -25), 
            positions.createWorld(-274, 162, -208) 
        )) 
    } 
    blocks.place(Block.Fire, positions.createWorld(-193, 71, -48)) 
    player.say("300F = People begin to die of heat exposure") 
    blocks.place(Block.Fire, positions.createWorld(-104, 73, -137)) 
    for (let i = 0; i < 60; i++) { 
        mobs.spawn(mobs.monster(MonsterMob.ZombieVillager), positions.random( 
            positions.createWorld(-131, 59, -38), 
            positions.createWorld(-248, 61, -103) 
        )) 
    } 
    player.say("482F = Heat blasts (pyroclastic flows) travel up to 6 miles from the volcano") 
}) 
```
## Step 2 
Once you've run this code, come back and check the code to see how it works. Make modifications to the code if you wish, and try it again in a new version of this world.

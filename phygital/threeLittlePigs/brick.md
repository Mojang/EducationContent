# Storytime - Three Little Pigs

## Blow the Brick house down

```block
player.onChat("brick_huff_puff", function () {
    player.say("Woooooooooooossssssssssshhhhhhhh")
    for (let index = 0; index < 350; index++) {
        if (blocks.testForBlock(BRICKS, randpos(
        world(-355, 64, -985),
        world(-345, 70, -978)
        ))) {
            mobs.applyEffect(NAUSEA, mobs.target(NEAREST_PLAYER), 10, 1)
            mobs.applyEffect(WEAKNESS, mobs.target(NEAREST_PLAYER), 10, 1)
        }
    }
})
```
## Take a look at the code for this activity. You've just gotten ill, and the house didn't disappear! Use the coding you learned from the hay house and the wood house to make the brick houes blow down too. Good luck!

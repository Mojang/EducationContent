# Storytime - Three Little Pigs

## Blow the Hay house down

```block
player.onChat("hay_huff_puff", function () {
    player.say("Woooooooooooossssssssssshhhhhhhh")
    for (let index = 0; index < 350; index++) {
        if (blocks.testForBlock(HAY_BLOCK, randpos(
        world(-254, 71, -919),
        world(-260, 76, -910)
        ))) {
            blocks.replace(
            AIR,
            HAY_BLOCK,
            randpos(
            world(-254, 71, -919),
            world(-260, 76, -910)
            ),
            randpos(
            world(-254, 71, -919),
            world(-260, 76, -910)
            )
            )
        }
    }
})
```
## Whoa! What just happened? Take a look at the code after you run it once. How were the hay blocks removed? You'll need this knowledge soon... continue in the story for now.

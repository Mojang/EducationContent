# Storytime - Three Little Pigs

## Step 1 
Blow the Wood house down

```block
player.onChat("wood_huff_puff", function () {
    player.say("Woooooooooooossssssssssshhhhhhhh")
    for (let index = 0; index < 350; index++) {
        if (blocks.testForBlock(PLANKS_OAK, randpos(
        world(-293, 69, -962),
        world(-298, 74, -952)
        ))) {
            blocks.replace(
            AIR,
            PLANKS_OAK,
            randpos(
            world(-293, 69, -962),
            world(-298, 74, -952)
            ),
            randpos(
            world(-293, 69, -962),
            world(-298, 74, -952)
            )
            )
        }
    }
})
```
## Step 2
Run this code to see what happens. Then compare this code to the code from the hay house. What is different? What remains the same? Be thinking about how you can use this type of code very soon... 

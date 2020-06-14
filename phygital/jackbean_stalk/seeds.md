# Storytime - Jack and the Beanstalk

## Step 1 
Plant Seeds to create the Beanstalk

```block
loops.forever(function () {
    if (blocks.testForBlock(MELON_STEM, world(-441, 68, -860))) {
        blocks.clone(
        world(-441, 90, -1018),
        world(-465, 25, -995),
        world(-451, 68, -874),
        CloneMask.Replace,
        CloneMode.Normal
        )
        player.say("Ooooooops")
    }
})
```
## Step 2 
This code clones an object from somewhere else in the world to appear, as if by magic! Run the code to watch what happens. Then return here and choose something else to clone. 
Map the coordinates of the object you wish to clone and determine what kind of materials are used. Update the code file to clone something else in your world! Don't you wish you could do this in the real world too? 

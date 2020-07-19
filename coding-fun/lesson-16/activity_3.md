### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @explicitHints 1


# Build a Town Hall!

## Step 1
Use ``||agent: agent move||``, ``||agent:agent collect||``, ``||agent:agent destroy||`` blocks.

```template
player.onChat("build-advanced", function (length, width, height) {
    for (let index = 0; index < height; index++) {
        for (let index = 0; index < 2; index++) {
            for (let index = 0; index < length; index++) {
                agent.setItem(STONE, 1, 1)
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.turn(RIGHT_TURN)
            for (let index = 0; index < width; index++) {
                agent.setItem(STONE, 1, 1)
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.turn(RIGHT_TURN)
        }
        agent.move(UP, 1)
    }
})
```

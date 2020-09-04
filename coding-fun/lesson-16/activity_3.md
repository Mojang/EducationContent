### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Build a Town Hall!

## Step 1
Use **stone** as your building material, create **3** ``||variable: variables||`` and name them **width**, **length** and **height**; set the ``||variable: variables||`` to the correct parameters. Don't forget to add your variables to the ``||player: on chat||`` command.

```ghost
player.onChat("town_hall", function (length, width, height) {
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

### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Build a starter house!

## Step 1
Use the provided sample code to place 1 row of blocks. Then Agent needs to repeat the same procedure **4 times**, then ``||agent: move up||`` and **repeat** it more. Get the ``||variable: height||`` and add it to the ``||loops: repeat||`` block. This code will allow you to build **1** house. 


### ~ tutorialHint
Don't forget to input your numbers in the in-game chat when typing in the command, for example **house 2 5**. 

```template    
 player.onChat("house", function (height, size) {
    for (let index = 0; index < size; index++) {
        agent.setItem(STONE, 1, 1)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.turn(RIGHT_TURN)
})
```

```ghost
player.onChat("build-simple", function (size, height) {
    for (let index = 0; index < height; index++) {
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < size; index++) {
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




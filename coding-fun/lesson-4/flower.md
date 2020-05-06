### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true
### @explicitHints 1


# Make the area pretty!

## Step 1
You need to plant **14 dandelions** along **4** sides of the hideaway. The Agent can plant **14** dandelions on one side. 

#### ~ tutorialhint 
Don't forget to select a count for ``||agent:agent set block||`` command. 


```ghost
player.onChat("flower", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 14; index++) {
            agent.setItem(YELLOW_FLOWER, 64, 1)
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.turn(RIGHT_TURN)
    }
})

``` 

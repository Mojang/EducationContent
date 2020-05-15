### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Bamboo Border

## Step 1
There is a starter code that we prepared for you.  Try running it first. The final goal is to plant bamboo along **4** sides of the panda's plot. 

```template
player.onChat("bamboo", function () {
    agent.setItem(BAMBOO, 64, 1)
    for (let index = 0; index < 16; index++) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.turn(LEFT_TURN)
})
```

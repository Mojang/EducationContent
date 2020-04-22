### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# Bamboo Border

## Step 1
You need to plant bamboo along **4** sides of the fence. There is a starter code that we prepared for you. It works for 1 side of the fence.   

```template
player.onChat("border", function () {
    agent.setItem(BAMBOO, 64, 1)
    for (let index = 0; index < 16; index++) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.turn(RIGHT_TURN)
```



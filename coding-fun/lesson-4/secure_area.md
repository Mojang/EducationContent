### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# Secure the Area

## Step 1
Program the Agent to construct an **oak fence**. The agent needs to place, destroy obstacles and move forward. The fence should be **17 blocks** long. 

#### ~ tutorialhint
You can try your code as many times as you want to. Don't try to get it right from the first attempt. 

```blocks
player.onChat("fence", function () {
    agent.setItem(OAK_FENCE, 64, 1)
    for (let index = 0; index < 17; index++) {
            }
})
```
```ghost
player.onChat("fence", function () {
    agent.setItem(OAK_FENCE, 64, 1)
    for (let index = 0; index < 17; index++) {
        agent.place(RIGHT)
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
    }
})
``` 


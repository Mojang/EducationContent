### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# Program the Agent to move up to the gold plate!

## Step 1
Program the Agent to reach the gold plate. You need to stay on your gold plate, while the Agent needs to stay on the other one. When done, press the **Play** buton to compile the code. Go to Minecraft to run your code.


```ghost
player.onChat("last", function () {
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
})
```  
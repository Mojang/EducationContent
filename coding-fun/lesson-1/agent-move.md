### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# Move the Agent to the gold plate!

## Step 1

Program the Agent to move to the gold plate. Use ``||agent: agent move||`` block. 



```ghost
player.onChat("run", function () {
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
})

``` 
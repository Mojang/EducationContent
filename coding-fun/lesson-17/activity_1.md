### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Plant a Seed!

## Step 1
First, interact with the Agent to open its inventory and give it the seeds. Then create ``||player: on chat||`` command and add ``||agent: till forward||`` and ``||agent: place||``. 

```ghost
player.onChat("plantSeed", function () {
    agent.till(FORWARD)
    agent.place(FORWARD)
})
```

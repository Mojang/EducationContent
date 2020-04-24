### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# Clear the Foliage!

## Step 1
The Agent needs to destroy **8** blocks of foliage moving **forward**. Then the Agent needs to ``||agent:agent turn around||`` and continue destroying the foliage. There are **8** rows that need to be destroyed. There will be a lot of ``||loops:repeat||`` commands in the end.

```ghost
player.onChat("foliage", function () {
    for (let index = 0; index < 8; index++) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        for (let index = 0; index < 2; index++) {
            agent.move(FORWARD, 1)
            agent.turn(RIGHT_TURN)
        }
    }
})
``` 

### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Clear the Foliage!

## Step 1
The Agent needs to destroy **8** blocks of foliage moving **forward**. Then the Agent needs to ``||agent:agent turn||`` and continue destroying the foliage. There are **16** rows that need to be destroyed. Think how you can nest some ``||loops:repeat||`` blocks inside other ``||loops:repeat||`` blocks. 

#### ~ tutorialhint 
```blocks
player.onChat("foliage", function () {
    for (let index = 0; index < 8; index++) {
        for (let index = 0; index < 8; index++) {
        	
        }
        for (let index = 0; index < 2; index++) {
        	
        }
        for (let index = 0; index < 8; index++) {
        	
        }
        for (let index = 0; index < 2; index++) {
        	
        }
    }
})
```

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

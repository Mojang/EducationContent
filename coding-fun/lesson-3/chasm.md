### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# The great chasm!

## Step 1
Step 1 is to ensure that the Agent has the necessary materials in the inventory. Use ``||agent:set block or item||``. Select the **building material** & its **amount**. 

#### ~ tutorialhint
It's a good practice to provide **64** blocks for the Agent for each item. 

## Step 2
Step 2 is to program the Agent to **build a bridge** across the chasm in the ice. Use ``||loops:While||``, ``||agent:agent detect block down||`` blocks.


#### ~ tutorialhint 
Don't forget to use **not** in your **while** loop. 

```blocks
player.onChat("chasm", function () {
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
    	
    }
})
```

## Step 3
Step 3 is to ensure that the Agent places blocks & moves forward. Add ``||agent:place||`` and ``||agent:move forward||`` blocks.

#### ~ tutorialhint 
Where should the Agent place blocks? **Down** or **Forward**? 

## Step 4
When done, press the **Play** buton to compile the code. Don't forget to run your code in Minecraft. 

```ghost

        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.destroy(UP)
    }
})

``` 


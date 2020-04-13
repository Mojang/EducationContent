### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# Make the area pretty!

## Step 1
Use your usual blocks, but don't forget to select **flowers** for the ``||agent:agent set block||`` command. There are **14** flowers that the Agent can plant on one side. 

## Step 2
Add  `||agent: agent turn||`` and ``||loops: repeat||`` commands. 

#### ~ tutorialhint 
There should be **4** sides ready with the flowers.


```ghost
player.onChat("4", function () {
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

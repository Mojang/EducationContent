### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Chicken Coup

## Step 1
The Agent needs to place **2** layers of **9** blocks of **iron bars**. There are **4** sides that need to have **iron bars**. Use 2 ``||agent:agent set block||`` coding commands and set them to **iron bars** and set the count to **64**, so that the Agent can place more than 64 blocks. Don't forget to use ``||agent:agent move up||``to build the second level.

#### ~ tutorialhint
At the end you will have **3** ``||loops:repeat|`` commands nested inside each other. 

```ghost
player.onChat("chicken", function () {
    for (let index = 0; index < 2; index++) {
        agent.setItem(IRON_BARS, 1, 1)
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < 9; index++) {
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.turn(RIGHT_TURN)
        }
        agent.move(UP, 1)
    }
})

``` 

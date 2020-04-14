### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# Chicken Coup

## Step 1
Make sure you have ``||agent:agent place down||`` and ``||agent: agent move||`` blocks. Set the ``||agent:agent set block||`` to **iron bars** and set the count to **64**.

## Step 2
The Agent needs to place **9** blocks of **iron bars** and ``||agent: agent turn right||``. There are **4** sides that need to have **iron bars**. 

## Step 3
The Agent needs to ``||agent:agent move up||`` and build the second level.

#### ~ tutorialhint
At the end you will have **3** ``||loops:repeat|`` commands nested inside each other. 

```blocks
player.onChat("run", function () {
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

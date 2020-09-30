### @explicitHints 1
# Activity: Maze Generation

## Step 1
Use the starter code presented. 

```template
let dirs: number[] = []
let index2 = 0
let index = 0
let right = 0
let left = 0
let forward = 0
let temp = 0
let moves: string[] = []
let tempArray: number[] = []
player.onChat("maze", function () {
    blocks.fill(
    blocks.block(Block.Stone),
    positions.create(-5, 0, -5),
    positions.create(5, 0, 5),
    FillOperation.Replace
    )
    agent.teleportToPlayer()
    blocks.place(blocks.block(Block.Air), positions.create(0, 0, 0))
    agent.setAssist(AgentAssist.DestroyObstacles, false)
    player.teleport(positions.create(0, 5, 0))
    player.say("let's dig that maze!")
    dig()
})
function shuffle() {
    tempArray = [forward, left, right]
    for (let i = 0; i < 3; i++) {
        index = Math.randomRange(0, 2)
        index2 = Math.randomRange(0, 2)
        temp = tempArray[index]
        tempArray[index] = tempArray[index2]
        tempArray[index2] = temp
    }
    for (let k = 0; k <= 3 - 1; k++) {
        dirs.push(tempArray[k])
    }
}
function dig() {
    player.say("dig deeper")
    shuffle()
    for (let i = 0; i < 3; i++) {
        player.say("try " + moves[dirs[dirs.length - 1]])
        // turn towards the new direction
        if (dirs[dirs.length - 1] == left) {
            agent.turn(TurnDirection.Left)
        } else if (dirs[dirs.length - 1] == right) {
            agent.turn(TurnDirection.Right)
        }
        // is this a wall?
        if (agent.detect(AgentDetection.Block, SixDirection.Forward)) {
            // dig once
            agent.destroy(SixDirection.Forward)
            agent.move(SixDirection.Forward, 1)
            // did we dig through a wall?
            if (!(agent.detect(AgentDetection.Block, SixDirection.Forward))) {
                player.say("oops, that was a wall")
                // move back and put the wall back
                agent.move(SixDirection.Back, 1)
                agent.place(SixDirection.Forward)
            } else {
                // yay! keep digging
                agent.destroy(SixDirection.Forward)
                agent.move(SixDirection.Forward, 1)
                // did we reach the end of the maze?
                if (!(agent.detect(AgentDetection.Block, SixDirection.Forward))) {
                    // go back and place wall
                    player.say("oops, too far")
                    agent.move(SixDirection.Back, 1)
                    agent.place(SixDirection.Forward)
                    agent.move(SixDirection.Back, 1)
                } else {
                    dig()
                    // start roll back
                    agent.move(SixDirection.Back, 2)
                }
            }
        }
        // turn back to the original direction
        if (dirs[dirs.length - 1] == left) {
            agent.turn(TurnDirection.Right)
        } else if (dirs[dirs.length - 1] == right) {
            agent.turn(TurnDirection.Left)
        }
        temp = dirs.pop()
    }
}
moves = ["forward", "left", "right"]
temp = 1
forward = 0
left = 1
right = 2
```

## Step 2
The agent will need materials to patch holes it makes in the maze. Because the agent is “learning” as it goes, it may accidently break a block of the maze wall only to later realize we need that block. Thus, the agent then patches the hole it made by mistake. you can give the agent some wood to patch the holes. Give the agent some oak wood planks in its inventory, in the upper left inventory slot.

## Step 3
Let’s try out the program! Type the command “maze” in the chat window to see the program run. Double tap the space bar and fly up to get.

## Step 4
Build the starting and ending locations. For the next activity, the agent will need to know when it has successfully completed the maze. In activity 2, you will be creating some code to get the agent to navigate the maze successfully. To get set up for the next activity, you will need to prepare the starting and ending areas of the maze.

## Step 5
You will need to equip the player with a diamond pickaxe and redstone block. The pickaxe is to destroy the stone for the starting point and ending point. The redstone will mark the ending point. Open Terminal using ‘/‘, then type the give command to equip the player with a diamond pickaxe and a block of redstone. 
**/give @s diamond_pickaxe**
**/give @s redstone_block**

## Step 6
Now all you need to do is build a starting and ending point. Decide a starting point and an ending point. Most likely these will be on opposite ends of the maze.

## Step 7
Destroy a block at the starting point.

Destroy a block at the ending point. Place a redstone block underneath the ending point.

## Step 8
After destroying the grass block that marks the ending location, place a redstone block in the dirt.

## Step 9
In the next activity, Maze Pathfinding, you’ll have the agent stop when it detects redstone under its feet. This is how you will know it has completed the maze!

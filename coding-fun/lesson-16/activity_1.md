### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Mine the resources!

## Step 1
The Agent needs to mine **gold ore** and **iron ore** blocks. Try creating several ``||player:on chat||`` commands that will program the Agent to move in different directions, for example, **forward**, **back**, **right**. Instead of specifying how far you want the Agent to move, you can use variables. When typing the command in in-game chat, type **forward** and **a number**, for example **forward 5** if you want the Agent to **move 5 steps forward**. This way you can change on the fly how many steps the Agent needs to move without changing the code. 

### ~ tutorialHint
Don't forget to add ``||agent: destroy||`` and ``||agent: collect||`` blocks to program the Agent to mine the minerals. 

```template
player.onChat("forward", function (num1) {
    agent.move(FORWARD, num1)
})
```
```ghost
player.onChat("right", function (num1) {
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, num1)
})
player.onChat("back", function (num1) {
    agent.turn(RIGHT_TURN)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, num1)
})
player.onChat("left", function (num1) {
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, num1)
})
player.onChat("collect", function () {
    agent.destroy(DOWN)
    agent.collectAll()
})
```



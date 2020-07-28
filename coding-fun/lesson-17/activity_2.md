### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Build a Town Hall!

## Step 1
We created a function **plantSeed** for you. It is simply the code that you used for the previous activity. Now drag ``||player: on chat||`` command into the workspace. Add a ``||loops: repeat||`` loop and ``||function:call plantSeed||`` function. Count how many times the Agent needs to repeat **plantSeed** function. 

### ~ tutorialHint
Functions live in the **Advanced** section. It is also a good practice to leave notes about the code that's written, like the one that we left for you about functions. 

```template
/**
 * A function allows you to easily reuse code.
 */
function plantSeed () {
    agent.till(FORWARD)
    agent.move(FORWARD, 1)
    agent.place(DOWN)
}
```

```ghost
player.onChat("plantSection", function () {
    for (let index = 0; index < 11; index++) {
        plantSeed()
    }
    agent.move(FORWARD, 1)
})
```

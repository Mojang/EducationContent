### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Change the world!

## Step 1
I haven't quite figured it out. 


```ghost
let count = 0
player.onTravelled(WALK, function () {
    count += 1
    blocks.place(count, world(-43, 4, 23))
})
player.onTravelled(FALL, function () {
    count = 0
    blocks.place(count, world(-43, 4, 23))
})
```

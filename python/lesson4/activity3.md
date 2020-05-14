### @explicitHints true

# Activity 3 - Cleaning up.

```python
for i in range(2):
pass
agent.collect_all()
agent.move(FORWARD, 5)
agent.drop_all(FORWARD)
```

## Step 1
**Part 1:** Make a code so that the Agent will go over every block of the small carpet and pickup the dirt.
### ~ tutorialhint 
Don't forget that loops can't have the same name and can't be named a number.

## Step 2
**Part 2:** Edit the same code so that the Agent does the same thing but for the larger carpet. Do this by repeating the code **3** times,
using a `||loops:for||` loop. At the end make the Agent drop all of the dirt in the trash to its **right**. 
### ~ tutorialhint 
Remeber that you will need to use double indentation in your code.


```template
// replace with loop number 3           | Part 2
// replace with loop number 1           | Part 1
agent.collect_all()
agent.move(FORWARD, 1)
// end of loop 1
agent.move(RIGHT, 1)
// replace with loop number 2           | Part 1
// make the Agent collect all           | Part 1  
// make the Agent move back             | Part 1  
// end of loop 2
// make the Agent move right            | Part 2
// end of loop 3  
// make the Agent drop all to the right | Part 2  
```

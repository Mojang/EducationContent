# Tutorial

## Step 1
Build a block in the city with code!

```ghost
function apartments () {
    acacia_floor()
    for (let index = 0; index < 3; index++) {
        acacia_walls()
        acacia_roof()
    }
}
function store () {
    stone_floor()
    stone_walls()
    stone_roof()
}
function stone_walls () {
    for (let index = 0; index < 2; index++) {
        agent.move(UP, 1)
        for (let index = 0; index < 2; index++) {
            for (let index = 0; index < 4; index++) {
                for (let index = 0; index < 2; index++) {
                    agent.setItem(CRACKED_STONE_BRICKS, 64, 1)
                    agent.place(DOWN)
                    agent.move(BACK, 1)
                }
                for (let index = 0; index < 2; index++) {
                    agent.setItem(GLASS_PANE, 64, 1)
                    agent.place(DOWN)
                    agent.move(BACK, 1)
                }
            }
            agent.setItem(CRACKED_STONE_BRICKS, 64, 1)
            agent.place(DOWN)
            agent.move(BACK, 1)
            agent.turn(RIGHT_TURN)
            for (let index = 0; index < 4; index++) {
                for (let index = 0; index < 2; index++) {
                    agent.setItem(CRACKED_STONE_BRICKS, 64, 1)
                    agent.place(DOWN)
                    agent.move(BACK, 1)
                }
                for (let index = 0; index < 2; index++) {
                    agent.setItem(GLASS_PANE, 64, 1)
                    agent.place(DOWN)
                    agent.move(BACK, 1)
                }
            }
            agent.setItem(CRACKED_STONE_BRICKS, 64, 1)
            agent.place(DOWN)
            agent.move(BACK, 1)
            agent.turn(RIGHT_TURN)
        }
    }
}
function stone_floor () {
    agent.teleport(pos(1, 0, 1), WEST)
    for (let index = 0; index < 9; index++) {
        for (let index = 0; index < 1; index++) {
            for (let index = 0; index < 18; index++) {
                agent.destroy(DOWN)
                agent.setItem(CRACKED_STONE_BRICKS, 64, 1)
                agent.place(DOWN)
                agent.move(BACK, 1)
            }
            agent.turn(RIGHT_TURN)
            agent.move(BACK, 1)
            agent.turn(RIGHT_TURN)
            agent.move(BACK, 1)
            for (let index = 0; index < 18; index++) {
                agent.destroy(DOWN)
                agent.setItem(CRACKED_STONE_BRICKS, 64, 1)
                agent.place(DOWN)
                agent.move(BACK, 1)
            }
            agent.turn(LEFT_TURN)
            agent.move(BACK, 1)
            agent.turn(LEFT_TURN)
            agent.move(BACK, 1)
        }
    }
    agent.move(RIGHT, 18)
}
function quartz_walls () {
    for (let index = 0; index < 2; index++) {
        agent.move(UP, 1)
        for (let index = 0; index < 2; index++) {
            for (let index = 0; index < 4; index++) {
                for (let index = 0; index < 2; index++) {
                    agent.setItem(PILLAR_QUARTZ_BLOCK, 64, 1)
                    agent.place(DOWN)
                    agent.move(BACK, 1)
                }
                for (let index = 0; index < 2; index++) {
                    agent.setItem(GLASS_PANE, 64, 1)
                    agent.place(DOWN)
                    agent.move(BACK, 1)
                }
            }
            agent.setItem(PILLAR_QUARTZ_BLOCK, 64, 1)
            agent.place(DOWN)
            agent.move(BACK, 1)
            agent.turn(RIGHT_TURN)
            for (let index = 0; index < 4; index++) {
                for (let index = 0; index < 2; index++) {
                    agent.setItem(PILLAR_QUARTZ_BLOCK, 64, 1)
                    agent.place(DOWN)
                    agent.move(BACK, 1)
                }
                for (let index = 0; index < 2; index++) {
                    agent.setItem(GLASS_PANE, 64, 1)
                    agent.place(DOWN)
                    agent.move(BACK, 1)
                }
            }
            agent.setItem(PILLAR_QUARTZ_BLOCK, 64, 1)
            agent.place(DOWN)
            agent.move(BACK, 1)
            agent.turn(RIGHT_TURN)
        }
    }
}
function acacia_walls () {
    for (let index = 0; index < 2; index++) {
        agent.move(UP, 1)
        for (let index = 0; index < 2; index++) {
            for (let index = 0; index < 4; index++) {
                for (let index = 0; index < 2; index++) {
                    agent.setItem(PLANKS_ACACIA, 64, 1)
                    agent.place(DOWN)
                    agent.move(BACK, 1)
                }
                for (let index = 0; index < 2; index++) {
                    agent.setItem(GLASS_PANE, 64, 1)
                    agent.place(DOWN)
                    agent.move(BACK, 1)
                }
            }
            agent.setItem(PLANKS_ACACIA, 64, 1)
            agent.place(DOWN)
            agent.move(BACK, 1)
            agent.turn(RIGHT_TURN)
            for (let index = 0; index < 4; index++) {
                for (let index = 0; index < 2; index++) {
                    agent.setItem(PLANKS_ACACIA, 64, 1)
                    agent.place(DOWN)
                    agent.move(BACK, 1)
                }
                for (let index = 0; index < 2; index++) {
                    agent.setItem(GLASS_PANE, 64, 1)
                    agent.place(DOWN)
                    agent.move(BACK, 1)
                }
            }
            agent.setItem(PLANKS_ACACIA, 64, 1)
            agent.place(DOWN)
            agent.move(BACK, 1)
            agent.turn(RIGHT_TURN)
        }
    }
}
function stone_roof () {
    agent.move(UP, 1)
    for (let index = 0; index < 9; index++) {
        for (let index = 0; index < 1; index++) {
            for (let index = 0; index < 18; index++) {
                agent.destroy(DOWN)
                agent.setItem(CRACKED_STONE_BRICKS, 64, 1)
                agent.place(DOWN)
                agent.move(BACK, 1)
            }
            agent.turn(RIGHT_TURN)
            agent.move(BACK, 1)
            agent.turn(RIGHT_TURN)
            agent.move(BACK, 1)
            for (let index = 0; index < 18; index++) {
                agent.destroy(DOWN)
                agent.setItem(CRACKED_STONE_BRICKS, 64, 1)
                agent.place(DOWN)
                agent.move(BACK, 1)
            }
            agent.turn(LEFT_TURN)
            agent.move(BACK, 1)
            agent.turn(LEFT_TURN)
            agent.move(BACK, 1)
        }
    }
    agent.move(RIGHT, 18)
}
function quartz_floor () {
    for (let index = 0; index < 9; index++) {
        for (let index = 0; index < 1; index++) {
            for (let index = 0; index < 18; index++) {
                agent.destroy(DOWN)
                agent.setItem(PILLAR_QUARTZ_BLOCK, 64, 1)
                agent.place(DOWN)
                agent.move(BACK, 1)
            }
            agent.turn(RIGHT_TURN)
            agent.move(BACK, 1)
            agent.turn(RIGHT_TURN)
            agent.move(BACK, 1)
            for (let index = 0; index < 18; index++) {
                agent.destroy(DOWN)
                agent.setItem(PILLAR_QUARTZ_BLOCK, 64, 1)
                agent.place(DOWN)
                agent.move(BACK, 1)
            }
            agent.turn(LEFT_TURN)
            agent.move(BACK, 1)
            agent.turn(LEFT_TURN)
            agent.move(BACK, 1)
        }
    }
    agent.move(RIGHT, 18)
}
function quartz_roof () {
    agent.move(UP, 1)
    for (let index = 0; index < 9; index++) {
        for (let index = 0; index < 1; index++) {
            for (let index = 0; index < 18; index++) {
                agent.destroy(DOWN)
                agent.setItem(PILLAR_QUARTZ_BLOCK, 64, 1)
                agent.place(DOWN)
                agent.move(BACK, 1)
            }
            agent.turn(RIGHT_TURN)
            agent.move(BACK, 1)
            agent.turn(RIGHT_TURN)
            agent.move(BACK, 1)
            for (let index = 0; index < 18; index++) {
                agent.destroy(DOWN)
                agent.setItem(PILLAR_QUARTZ_BLOCK, 64, 1)
                agent.place(DOWN)
                agent.move(BACK, 1)
            }
            agent.turn(LEFT_TURN)
            agent.move(BACK, 1)
            agent.turn(LEFT_TURN)
            agent.move(BACK, 1)
        }
    }
    agent.move(RIGHT, 18)
}
function acacia_roof () {
    agent.move(UP, 1)
    for (let index = 0; index < 9; index++) {
        for (let index = 0; index < 1; index++) {
            for (let index = 0; index < 18; index++) {
                agent.destroy(DOWN)
                agent.setItem(PLANKS_ACACIA, 64, 1)
                agent.place(DOWN)
                agent.move(BACK, 1)
            }
            agent.turn(RIGHT_TURN)
            agent.move(BACK, 1)
            agent.turn(RIGHT_TURN)
            agent.move(BACK, 1)
            for (let index = 0; index < 18; index++) {
                agent.destroy(DOWN)
                agent.setItem(PLANKS_ACACIA, 64, 1)
                agent.place(DOWN)
                agent.move(BACK, 1)
            }
            agent.turn(LEFT_TURN)
            agent.move(BACK, 1)
            agent.turn(LEFT_TURN)
            agent.move(BACK, 1)
        }
    }
    agent.move(RIGHT, 18)
}
function office () {
    quartz_floor()
    for (let index = 0; index < 5; index++) {
        quartz_walls()
        quartz_roof()
    }
}
function acacia_floor () {
    for (let index = 0; index < 9; index++) {
        for (let index = 0; index < 1; index++) {
            for (let index = 0; index < 18; index++) {
                agent.destroy(DOWN)
                agent.setItem(PLANKS_ACACIA, 64, 1)
                agent.place(DOWN)
                agent.move(BACK, 1)
            }
            agent.turn(RIGHT_TURN)
            agent.move(BACK, 1)
            agent.turn(RIGHT_TURN)
            agent.move(BACK, 1)
            for (let index = 0; index < 18; index++) {
                agent.destroy(DOWN)
                agent.setItem(PLANKS_ACACIA, 64, 1)
                agent.place(DOWN)
                agent.move(BACK, 1)
            }
            agent.turn(LEFT_TURN)
            agent.move(BACK, 1)
            agent.turn(LEFT_TURN)
            agent.move(BACK, 1)
        }
    }
    agent.move(RIGHT, 18)
}
player.onChat("block", function () {
    store()
    agent.move(FORWARD, 25)
    agent.move(DOWN, 3)
    apartments()
    agent.move(RIGHT, 25)
    agent.move(DOWN, 9)
    office()
})
```

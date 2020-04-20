## Top level objects

- Game
- Board
- Cell

### Game
### Board

props
- width
- mineProb

state
- grid of mines and neighbouring mine counts

### Cell

props
- isMine
- mineCount

state
- isHidden
- isFlagged
- isGameOver

events
- mark as mine
- reveal
    - bang
    - show new mine count
        - if count is zero:
            - cascade to reveal neighbouring zeros

Active Cell

props
- isFlagged
- onClick
- onRightClick

render
- not isFlagged: blank
- isFlagged: flag

render gameover
- not isFlagged: reveal incorrect mine or count
- isFlagged: flag: reveal correct mine, or incorrect flag

correct = gameover & mine and flag
incorrect = gameover & flag != mine

Inactive Cell

props
- isMine
- mineCount

render
- isMine: mine (causes gameover, so not shown)
- not isMine: neighbouring mine count


render gameover
- isMine: mine (incorrect by lack of flag)
- not isMine: neighbouring mine count


Look

- unrevealed: highlight & shaddow
- revealed: dark grey, thin borders

- incorrect flag: crossed out
- correcy flag: leave flag

Game play

- initial reveal should decide field:
    - pref 0 neighbouring
    - not a mine

- revealing a 0, also reveals:
    - all touching 0s
    - a surrounding border of counts

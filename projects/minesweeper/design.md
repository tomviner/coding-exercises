## Top level objects

- Game
- Board
- Cell

### Game
### Board

props
- width

state
- grid of mines and neighbouring mine counts

### Cell

props
- isMine

state
- isHidden
- neighbouring mine count
- isFlagged

events
- mark as mine
- reveal
    - bang
    - show new mine count
        - if count is zero:
            - cascade to reveal neighbouring zeros

render
- isHidden & not isFlagged: blank
- isHidden & isFlagged: flag
- not isHidden & isMine: mine
- not isHidden & not isMine: neighbouring mine count

function walk(maze, start) {
    if (start[0] < 0 || start[0] > maze.length - 1 ||
        start[1] < 0 || start[1] > maze[0].length - 1) {
        throw new Error("You're out of maze")
    }

    let stack = [];

    maze[start[0]][start[1]] = X;
    stack.push([start]);

    while (stack.length > 0) {
        let path = stack.pop();
        let pos = path[path.length - 1];

        let direction = [];
        if (pos[0] + 1 >= 0 && pos[0] + 1 < maze.length &&
            pos[1] >= 0 && pos[1] < maze[0].length) {
            direction.push([pos[0] + 1, pos[1]])
        }
        if (pos[0] >= 0 && pos[0] < maze.length &&
            pos[1] + 1 >= 0 && pos[1] + 1 < maze[0].length) {
            direction.push([pos[0], pos[1] + 1])
        }
        if (pos[0] - 1 >= 0 && pos[0] - 1 < maze.length &&
            pos[1] >= 0 && pos[1] < maze[0].length) {
            direction.push([pos[0] - 1, pos[1]])
        }
        if (pos[0] >= 0 && pos[0] < maze.length &&
            pos[1] - 1 >= 0 && pos[1] - 1 < maze[0].length) {
            direction.push([pos[0], pos[1] - 1])
        }

        for (let i = 0; i < direction.length; i++) {
            if ((direction[i][0] === 0 || direction[i][1] === 0 ||
                direction[i][0] === maze.length - 1 || direction[i][1] === maze[0].length - 1) &&
                maze[direction[i][0]][direction[i][1]] === _) {
                return path.concat([direction[i]]);
            }
            if (maze[direction[i][0]][direction[i][1]] !== _) {
                continue;
            }


            maze[direction[i][0]][direction[i][1]] = X;
            stack.push(path.concat([direction[i]]));
        }
    }

}

const X = false; // wall
const _ = true; // pass

/*const maze = [
    [X,X,X,X,X,X,X,X,X],
    [X,_,X,_,_,_,_,_,_],
    [X,_,X,X,_,X,_,X,X],
    [_,_,X,_,_,_,_,X,_],
    [X,_,X,_,X,_,X,X,X],
    [X,_,_,_,X,_,_,_,X],
    [X,X,X,X,X,X,X,_,X],
];*/
const maze = [
    [X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X],
    [X,_,X,_,_,_,_,_,_,X,X,X,X,X,X,X,X,X],
    [X,_,X,X,_,X,_,X,X,X,X,X,X,X,X,X,X,X],
    [_,_,X,_,_,_,_,X,_,X,X,X,X,X,X,X,X,X],
    [X,_,X,_,X,_,X,X,X,X,X,X,X,X,X,X,X,X],
    [X,_,_,_,X,_,_,_,X,X,X,X,X,X,X,X,X,X],
    [X,X,X,X,X,X,X,_,X,X,X,X,X,X,X,X,X,X],
    [X,X,X,X,X,X,X,_,X,X,X,X,X,X,X,X,X,X],
    [X,_,X,_,_,_,_,_,_,_,X,X,X,X,X,X,X,X],
    [X,_,X,X,_,X,_,X,X,_,X,X,X,X,X,X,X,X],
    [X,_,X,_,_,_,_,X,_,_,X,X,X,X,X,X,X,X],
    [X,_,X,_,X,_,X,X,_,X,X,X,X,X,X,X,X,X],
    [X,_,_,_,X,_,_,_,_,X,X,X,X,X,X,X,X,X],
    [X,X,X,X,X,X,X,_,X,X,X,X,X,X,X,X,X,X],
];

const start = [3, 0];

console.log(walk(maze, start));

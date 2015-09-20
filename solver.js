function Board() {}

Board.prototype = {
    sudokuValues: function() {
        var cellsArray = document.getElementsByClassName('cell')
        var board = []
        Array.prototype.forEach.call(cellsArray, function(cell) {
            board.push(cell.value)
        })
        return board
    },

    regularBoardToIntegers: function(board) {
        for (k = 0; k < board.length; k++) {
            if (board[k] === "") {
                board[k] = 0
            } else {
                board[k] = parseInt(board[k])
            }
        }
        return board
    }
}

function Solver() {
    this.givenNumberIndexes = null
    this.moveCount = 0
    this.solved = false
}

Solver.prototype = {
    solve: function(board, currentIndex) {
        var self = this,
            sudokuNumber = 1,
            cloneBoard = board.slice(0)

        currentIndex = typeof currentIndex !== 'undefined' ? currentIndex : 0;
        this.moveCount += 1

        for (r = 0; r < this.givenNumberIndexes.length; r++) {
            if (this.givenNumberIndexes[r] === currentIndex) {
                currentIndex += 1
            }
        }

        while (sudokuNumber < 10) {
            var forward = 1

            for (r = 0; r < this.givenNumberIndexes.length; r++) {
                if (this.givenNumberIndexes[r] === (currentIndex + forward)) {
                    forward += 1
                }
            }

            cloneBoard[currentIndex] = sudokuNumber
            var checker = new BoardChecker(cloneBoard)

            if (checker.checkValidBoard(checker.givenBoard)) {
                var cell = document.getElementById('cell' + currentIndex)
                if (cell === null) {
                    return true
                }
                cell.value = sudokuNumber

                if (self.solve(cloneBoard, (currentIndex + forward))) {
                    self.solved = true
                    return true
                }
            }
            sudokuNumber += 1
        }
        return self.solved
    },

    grabGivenNumberIndexes: function(board) {
        var indexes = []
        for (u = 0; u < board.length; u++) {
            if (board[u] > 0) {
                indexes.push(u)
                var col = document.getElementById('cell' + u)
                col.className = col.className + ' col-lb'
            }
        }
        return indexes
    }
}

document.getElementById("sudoku-solver-button").onclick = function(e) {
    e.preventDefault();
    var board = new Board(),
        solver = new Solver(),
        currentValues = board.sudokuValues(),
        boardReadyToSolve = board.regularBoardToIntegers(currentValues),
        loading = document.getElementById('loading')
    checker = new BoardChecker(boardReadyToSolve)

    if (checker.checkValidBoard(checker.givenBoard) === false) {
        loading.innerText = "Invalid board"
        return false
    }

    solver.givenNumberIndexes = solver.grabGivenNumberIndexes(boardReadyToSolve)

    if (solver.solve(boardReadyToSolve)) {
        loading.innerText = 'Done! This puzzle took ' + solver.moveCount + ' calculations to solve'
    }
}

document.getElementById('sudoku-clear-button').onclick = function(e) {
    e.preventDefault();
    loading.innerText = ""
    for (i = 0; i < 81; i++) {
        var cell = document.getElementById('cell' + i)
        cell.className = "cell"
        cell.value = ""
    }
}
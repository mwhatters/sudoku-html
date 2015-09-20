function BoardChecker(board) {
    this.givenBoard = this.sudokuBoard(board)
}

// Each method takes a 2d array as the board
BoardChecker.prototype = {
    // INITIALIZER //
    sudokuBoard: function(board) {
        var twoDeeBoard = []
        for (i = 9; i <= 81; i += 9) {
            twoDeeBoard.push(board.slice(i - 9, i))
        }
        return twoDeeBoard
    },

    // -------- PUBLICALLY CALLED METHODS ------- //	

    checkValidBoard: function(intBoard) {
        var squares = this.checkSquaresValid(intBoard)
        if (squares) {} else {
            return false
        }

        var columns = this.checkColumnsValid(intBoard)
        if (columns) {} else {
            return false
        }

        var rows = this.checkRowsValid(intBoard)
        if (rows) {
            return true
        } else {
            return false
        }
    },

    // --------- VALIDITY -------- //

    checkRowsValid: function(intBoard) {
        var complete = true,
            self = this
        for (f = 0; f < intBoard.length; f++) {
            var row = intBoard[f]
            if (self.checkValid(intBoard[f])) {} else {
                complete = false;
                return false
            }
        }
        return complete
    },

    checkColumnsValid: function(intBoard) {
        var self = this,
            complete = true
        for (r = 0; r < intBoard.length; r++) {
            var addedColumn = 0
            var column = []

            for (t = 0; t < intBoard.length; t++) {
                column.push(intBoard[t][r])
                addedColumn += intBoard[t][r]
            }
            if (self.checkValid(column)) {} else {
                complete = false;
                return false
            }
        }
        return complete
    },

    checkSquaresValid: function(intBoard) {
        var self = this,
            complete = true
        for (i = 0; i < intBoard.length; i += 3) {
            for (k = 0; k < intBoard.length; k += 3) {
                var square = [intBoard[i][k], intBoard[i + 1][k], intBoard[i + 2][k], intBoard[i][k + 1], intBoard[i + 1][k + 1], intBoard[i + 2][k + 1], intBoard[i][k + 2], intBoard[i + 1][k + 2], intBoard[i + 2][k + 2]]
                if (self.checkValid(square)) {} else {
                    complete = false;
                    return false
                }
            };
        }
        return complete
    },

    // ---------- HELPERS ----------- //

    checkValid: function(section) {
        var sortedSection = section.sort()
        var valid = true
        for (p = 0; p < sortedSection.length; p++) {
            if (sortedSection[p + 1] === sortedSection[p] && sortedSection[p] != 0) {
                valid = false
                return false
            }
        }
        return valid
    },
}
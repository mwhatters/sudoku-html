	// checkCompleteBoard: function(intBoard) {
	// 	var squares  = this.checkSquaresComplete(intBoard)
	// 	if (squares) {} else {return false}

	// 	var columns  = this.checkColumnsComplete(intBoard)
	// 	if (columns) {} else {return false}

	// 	var rows 		 = this.checkRowsComplete(intBoard)
	// 	if (rows) {console.log('all things complete'); return true} else {return false}
	// },


	// --------- COMPLETENESS -------- //

	// checkRowsComplete: function(intBoard) {
	// 	var complete = true,
	// 			self = this
	// 		for (f=0; f<intBoard.length; f++) {
	// 			var row = intBoard[f]
	// 			var addedRow = row.reduce(function(previousValue, currentValue) {
	// 				return previousValue + currentValue
	// 		})
	// 		if (addedRow === 45 && self.checkValid(intBoard[f])) {} else {complete = false; return false}
	// 	}
	// 	return complete
	// },

	// checkColumnsComplete: function(intBoard) {
	// 	var self = this,
	// 			complete = true
	// 	for (r=0; r<intBoard.length; r++) {
	// 		var addedColumn = 0,
	// 				column = []

	// 		for (t=0; t<intBoard.length; t++) {
	// 			column.push(intBoard[t][r]) 
	// 			addedColumn += intBoard[t][r]
	// 		}
	// 		if (addedColumn === 45 && self.checkValid(column)) {} else {complete = false; return false}
	// 	}
	// 	return complete 
	// },

	// checkSquaresComplete: function(intBoard) {
	// 	var self = this,
	// 			complete = true
	// 	for (i=0; i<intBoard.length; i+=3) {
	// 		for (k=0; k<intBoard.length; k+=3) {
	// 			var square = [intBoard[i][k], intBoard[i+1][k], intBoard[i+2][k], intBoard[i][k+1], intBoard[i+1][k+1], intBoard[i+2][k+1], intBoard[i][k+2], intBoard[i+1][k+2], intBoard[i+2][k+2]]

	// 			var addedSquare = square.reduce(function(previousValue, currentValue) {
	// 				return previousValue + currentValue
	// 			})
	// 			if (addedSquare === 45 && self.checkValid(square)) {} else {complete = false; return false}
	// 		};
	// 	}
	// 	return complete
	// },
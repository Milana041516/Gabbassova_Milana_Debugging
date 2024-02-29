let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll('.drop-zone'),
	draggedPiece;

	function changeBGImage() {

		puzzlePieces.forEach(piece => {
			console.log('New Puzzle!');
			piece.classList.remove('hide');
			document.querySelector('.puzzle-pieces').appendChild(piece);
		});
		puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
	
		puzzlePieces.forEach((piece, index) => {
			if (index === 0) {
			  piece.src = `images/topLeft${this.id}.jpg`;
			} else if (index === 1) {
			  piece.src = `images/topRight${this.id}.jpg`;
			} else if (index === 2) {
			  piece.src = `images/bottomLeft${this.id}.jpg`;
			} else if (index === 3) {
			  piece.src = `images/bottomRight${this.id}.jpg`;
			}
		  });
	
	 }

function handleStartDrag() { 
	console.log('started dragging this piece:', this);
	setTimeout(() => {
		this.classList.add('hide');
	}, 0 )
	draggedPiece = this;
}

function handleDragOver(e) { 
	e.preventDefault(); 
	console.log('dragged over me'); 
}

function handleDrop(e) { 
	e.preventDefault();
	console.log('dropped something on me');
	const initialParent = document.getElementsByClassName('puzzle-pieces')[0];

    if (this.childElementCount === 0) {
        this.appendChild(draggedPiece);
    } else {
        console.log('Oops! There is already one puzzle piece!');
        initialParent.appendChild(draggedPiece);
    }

	draggedPiece.classList.remove('hide');
}

theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));
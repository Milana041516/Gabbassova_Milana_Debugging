# Gabbassova_Milana_Debugging
Homework 2 for Multimedia Authoring 2

| Bug(problem)  | How it should be | How to fix it |
| ------------- | ------------- |------------- |
| The user can drag and drop more than one puzzle piece into a drop zone  | There should be one piece in one drop zone at a time  | Creating a constant variable “initialParent”, using “document.getElementByClassName(‘puzzle-piece’)[0] to select the 1 element in the document when the class name is “puzzle-piece”. Using the condition “if” and “childElementCount === 0” to check if it something already located in the drop zone, if it’s true-> so user can drop an element inside. If condition is false we use.  “initialParent.appendChild(draggedPiece)” to return the drag piece back to the puzzle board  |
| Pieces from previous puzzle appearing in the drop zone when the user chooses a new puzzle  | Puzzle pieces should be reparanted back to the drag zone, so that the player has a fresh board to drop onto.  | Inside the “function changeBGImage” add an arrow function using a forEach method to iterate each puzzle piece element of an array. Append each puzzle piece back to the puzzle board. Then create another arrow function to change the background image when clicking on each button holder.  |
| When the user grabs the puzzle piece it disappears from puzzle board only when this piece is dropped.  | Puzzle pieces should disappear instantly when the user grabs it.  | Create a setTimeout in function “handleStartDrag” and make it on 0 ms and put class “hide” inside, so when the user grabs a puzzle piece it disappears instantly on the puzzle board. Remove class “hide” inside the functions “handleDragOver” and “handleDrop” so all pieces can be visible.  |
|Reset Button is not working| When the user clicks on the "Reset button" the pages should be refreshed | Create a new variable “restartBtn”. Attach event listener to the button, so when user clicks it, the function starts working. Inside this function create a condition, using “confirm” when user will click on this button, a browser dialog box will appear: create style properties for puzzle pieces, then use “appendChild” to put pieces back to the puzzle board, and “location.reload()” to refresh a page. If the user will not confirm it in console will appear the phrase: “Reset cancelled”. |

## Installation
This is no installatin required.

## Usage
Open index.html in the browser of your choice.

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History
February 29th, 2024

## Credits
Milana Gabbassova

## License
MIT license
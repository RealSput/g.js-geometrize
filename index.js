/*
let's say X is 15 and Y is 15, and our width is 10 and length is 10

we add a block at (15, 15), then subtract the Y by the width, and we get 5, so we place another block at (10, 5)
then we add the length to X, so we place another block at (25, 10) and place a final block at (25, 5) by doing both operations

however, we should fill in the blocks using ranges (e.g. Y = 15..5, X = 10..25)
*/

/*
require('@g-js-api/g.js')

let [x, y] = [15, 15];
let [width, length] = [10, 10]
let id = 1;

let block = (x, y, width, length) => {
	let range_x = range(x, x + length).map(x => x * 3);
	let range_y = range(y, y - width).map(x => x * 3);
	
	range_x.forEach(cx => {
		range_y.forEach(cy => {
			$.add({
				OBJ_ID: id,
				X: cx,
				Y: cy
			})
		});
	});
}

block(15, 15, 10, 10);

$.exportToSavefile();
*/


require('@g-js-api/g.js')

let [x, y] = [15, 15];
let [width, length] = [10, 10]
let id = 1;

let block = (x, y, width, length) => {
	let range_x = range(x, x + length).map(x => x * 3);
	let range_y = range(y, y - width).map(x => x * 3);
	
	range_x.forEach(cx => {
		range_y.forEach(cy => {
			$.add({
				OBJ_ID: id,
				X: cx,
				Y: cy
			})
		});
	});
}

block(15, 15, 10, 10);

$.exportToSavefile();

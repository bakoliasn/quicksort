const input = [2, 6, 3, 7, 9, 4, 12, 7, 62, 6]

function sort(array){
	if(array.length <=1){
		return array
	}
	const pivot = Math.floor(
		Math.random() 
		* Math.floor(array.length-1)
		)
	let smaller = []
	let middle = [array[pivot]]
	let bigger = []
	for (let i = 0; i < array.length; i++){
		if(i==pivot){
			continue
		}
		else if (array[i]==array[pivot]){
			middle.push(array[i])
		}
		else if (array[i]<array[pivot]){
			smaller.push(array[i])
		}
		else {
			bigger.push(array[i])
		}
	}

	return [...sort(smaller), ...middle, ... sort(bigger)]
}

console.log(sort(input))

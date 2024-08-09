let reversedArray = [];

export const bubbleSort = (arr) => {
    let template = [];
    let wall = arr.length - 1;

    while (wall > 0) {
        let index = 0;
        while (index < wall) {
            if (arr[index].number > arr[index + 1].number) {
                let aux = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = aux;

                // Agregar la representación del estado actual al template
                template.push(arr.map(item => `${item.number} (${item.icon})`).join(", "));
            }
            index++;
        }
        wall--;
    }

    reversedArray = template.reverse();
    console.log(reversedArray);

    return arr;
};

export { reversedArray };

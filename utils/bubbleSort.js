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
                template.push(arr.map(item => ({ number: item.number, icon: item.icon })));
            }
            index++;
        }
        wall--;
    }

    reversedArray = template.reverse();
    return arr;
};

export { reversedArray };

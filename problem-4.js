const object = [
    { street: 10, house: '15A', society: 'Earth Perfect' },
    { street: 10, society: 'Earth Perfect' },
    { society: 'Earth Perfect' }
];

function findAddress(objects) {
    const values = [];

    for (let i = 0; i < objects.length; i++) {
        const currentObject = objects[i];

        // Add the values or placeholders ('__') for each property
        const streetValue = currentObject.street !== undefined ? currentObject.street : '__';
        const houseValue = currentObject.house !== undefined ? currentObject.house : '__';
        const societyValue = currentObject.society !== undefined ? currentObject.society : '__';

        // Store the formatted array for this object
        values.push([streetValue, houseValue, societyValue]);
    }

    return values;
}

const input = findAddress(object);
console.log(input);

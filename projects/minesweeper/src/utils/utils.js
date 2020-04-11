export const range2d = (a, b) => (
    // flat map concats all the inner arrays
    Array(a).fill().flatMap((_, x) => (
        // this is an array of coords
        Array(b).fill().map((_, y) => (
            [x, y]
        ))
    ))
);

export const rand = (chance) => (Math.random() < chance);

export const sum = nums => nums.reduce((a, b) => a + b, 0);

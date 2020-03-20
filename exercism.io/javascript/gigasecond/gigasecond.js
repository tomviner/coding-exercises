// Given a moment, determine the moment that would be after a gigasecond has
// passed.

// A gigasecond is 10^9 (1,000,000,000) seconds.
const gs = 1000e9;

export const gigasecond = (date) => {
   return new Date(date.valueOf() + gs);
};

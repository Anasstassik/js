// 1
// first
const inc = (n) => {
    console.dir(++n)
}

inc(18)

// second
const obj = { n: 5 }

const inc2 = (obj) => {
    console.dir(++obj.n);
}
inc2(obj)

// 2
// first
const array  = [true, 'hello', 5, 12, -200, false, false, 'word', 'hihi', true, 666, 'tea', 121];
const hash = { number: 0, string: 0, boolean: 0 };
for (const element of array) {
     hash[typeof element] ++;
}


console.dir(hash)

// second
const hash1 = {};
for (const element of array) {
    if (hash1[typeof element]) {
        hash1[typeof element] ++;
    }
    else {
        hash1[typeof element] = 1;
    }
}

console.dir(hash1)
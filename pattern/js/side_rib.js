// import the knitoutWriter code and instantiate it as an object
var knitout = require('./knitout');
k = new knitout.Writer({carriers:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]});

// add some headers relevant to this job
k.addHeader('Machine','SWGXYZ');
k.addHeader('Gauge','7');
k.addHeader('Width','270');
k.addHeader('Position','Center');

// piece information:
// width: 27 -> 22
// height: left 202 -> right 195
// # decreases: 5
// # rows per decrease: 4
// # shortrows: 3 pairs (6 rows)
// # rows before shortrows: 4

// swatch variables
var waste_height = 2;
// var width = 27;
var width = 32;
// let Carrier = 3; // blue
let Carrier = 6; // grey
k.fabricPresser("auto");
// bring in carrier using yarn inserting hook
k.inhook(Carrier);

// tuck on alternate needles to cast on
for (var s=width; s>0; s--) {
	if (s%2 == 0) {
		k.tuck("-", "f"+s, Carrier);
	} else {
		k.miss("-", "f"+s, Carrier);
	}
}
for (var s=1; s<=width; s++) {
	if (s%2 != 0) {
		k.tuck("+", "f"+s, Carrier);
	} else {
		k.miss("+", "f"+s, Carrier);
	}
}

// knit some rows back and forth row 1-4
for (var h=0; h<waste_height; h++) {
	for (var s=width; s>0; s--) {
		k.knit("-", "f"+s, Carrier);
	}
	for (var s=1; s<=width; s++) {
		k.knit("+", "f"+s, Carrier);
	}
}
// release the yarn inserting hook
k.releasehook(Carrier);

function two_rows(start, end) {
    for (var s = start; s <= end; s++) {
        if (s % 2 == front) {
            k.knit("+", "f" + s, Carrier);
        } else {
            k.knit("+", "b" + s, Carrier);
        }
    }
    for (var s = end; s >= start; s--) {
        if (s % 2 == front) {
            k.knit("-", "f" + s, Carrier);
        } else {
            k.knit("-", "b" + s, Carrier);
        }
    }
}

function decrease(width, offset, front, height) {
    // xfer all to front bed
    for (var s = width-offset; s > 0; s--) {
        if (s % 2 != front) {
            k.xfer("b" + s, "f" + s);
        }
    }
    // xfer stitch 21-27 to back
    for (var s=width-14; s<=width-offset; s++) {
        k.xfer("f" + s, "b" + s);
    }
    k.rack(-1);
    // and then decrease on 20
    for (var s=width-15; s<=width-offset-1; s++) {
        bn = s+1;
        k.xfer("b" + bn, "f" + s);
    }
    k.rack(0);
    // xfer the rib cols to back
    for (var s = width-offset-1; s > 0; s--) {
        if (s % 2 != front) {
            k.xfer("f" + s, "b" + s);
        }
    }
    // knit 4 rows
    for (var h=0; h<height; h++) {
        two_rows(1, width-offset-1);
    }
}

function bind_off(width) {
    for (var s=1; s<=width; s++) {
        k.xfer("f" + s, "b" + s);
        k.rack(1);
        var fn = s+1;
        k.xfer("b" + s, "f" + fn);
        k.rack(0.25);
        if ((s-1)%2 === 1) {
            k.tuck("+", "b" + s, Carrier);
        }
        k.knit("+", "f" + fn, Carrier);
        if (s+2 <= width) {
            fn = s+2;
            k.miss("+", "f" + fn, Carrier);
        }
        k.rack(0);
    }
    width = width - 3;
	k.knit("-", "f" + width, Carrier);
	k.knit("+", "f" + width, Carrier);

	k.knit("-", "f" + width, Carrier);
	k.knit("+", "f" + (width-1), Carrier);
    k.knit("+", "f" + width, Carrier);

	k.knit("-", "f" + width, Carrier);
	k.knit("-", "f" + (width-1), Carrier);
	k.knit("+", "f" + (width-2), Carrier);
	k.knit("+", "f" + (width-1), Carrier);
    k.knit("+", "f" + width, Carrier);

	k.knit("-", "f" + width, Carrier);
	k.knit("-", "f" + (width-1), Carrier);
	k.knit("-", "f" + (width-2), Carrier);
    k.knit("+", "f" + (width-3), Carrier);
	k.knit("+", "f" + (width-2), Carrier);
	k.knit("+", "f" + (width-1), Carrier);
    k.knit("+", "f" + width, Carrier);

	for (let r = 0; r < 4; ++r) {
        k.knit("-", "f" + width, Carrier);
        k.knit("-", "f" + (width-1), Carrier);
        k.knit("-", "f" + (width-2), Carrier);
        k.knit("-", "f" + (width-3), Carrier);
        k.knit("+", "f" + (width-3), Carrier);
        k.knit("+", "f" + (width-2), Carrier);
        k.knit("+", "f" + (width-1), Carrier);
        k.knit("+", "f" + width, Carrier);    
	}
}

/////////////////////////////////////////////////////////////
// the main piece
const front = width % 2;
for (var s = width; s > 0; s--) {
    if (s % 2 != front) {
        k.xfer("f" + s, "b" + s);
    }
}
// row 5
for (var s=width; s>0; s--) {
    if (s % 2 == front) {
        k.knit("-", "f" + s, Carrier);
    } else {
        k.knit("-", "b" + s, Carrier);
    }
}
// shortrow rows 6-11
for (var h = 0; h < 3; h++) {
    two_rows(1, 14);
}
// row 12-15
for (var h=0; h<waste_height*3; h++) {
	two_rows(1, width);
}
// 5 decreases row 16-35
var num_dec = 5;
for (var d=0; d<num_dec; d++) {
    decrease(width, d, front, waste_height);
}
// row 36-202
for (var h=0; h<83; h++) {
    two_rows(1, width-num_dec);
}
/////////////////////////////////////////////////////////////
for (var s = width-num_dec; s > 0; s--) {
    if (s % 2 != front) {
        k.xfer("b" + s, "f" + s);
    }
}
// knit some rows back and forth
for (var h=0; h<waste_height; h++) {
    for (var s=1; s<=width-num_dec; s++) {
		k.knit("+", "f"+s, Carrier);
	}
	for (var s=width-num_dec; s>0; s--) {
		k.knit("-", "f"+s, Carrier);
	}
}

bind_off(width-num_dec);

// bring the yarn out with the yarn inserting hook
k.outhook(Carrier);

// write the knitout to a file
k.write('side_rib.k');
console.log('wrote side_rib.k')

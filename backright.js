// import the knitoutWriter code and instantiate it as an object
var knitout = require('./knitout');
k = new knitout.Writer({carriers:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]});

// add some headers relevant to this job
k.addHeader('Machine','SWGXYZ');
k.addHeader('Gauge','7');
k.addHeader('Width','270');
k.addHeader('Position','Center');

// swatch variables
var waste_height = 4;
var width = 65;
let Carrier = 6;
k.fabricPresser("auto");
// bring in carrier using yarn inserting hook
k.inhook(Carrier); 

function decrease(width, offset) {
    // xfer stitch to back
    for (var s=width-6; s<=width-offset; s++) {
        k.xfer("f" + s, "b" + s);
    }
    k.rack(-1);
    // and then move them back with one decrease
    for (var s=width-7; s<=width-offset-1; s++) {
        bn = s+1;
        k.xfer("b" + bn, "f" + s);
    }
    k.rack(0);
}

function sr_block() {
    // row 1
    for (var s=width; s>=57; s--) {
        k.knit("-", "f"+s, Carrier);
    }
    // shortrow rows G
    for (var h=0; h<5; h++) {
        for (var s=57; s<=63; s++) {
            k.knit("+", "f"+s, Carrier);
        }
        for (var s=63; s>=57; s--) {
            k.knit("-", "f"+s, Carrier);
        }
    }
    // row 2
    for (var s=57; s<=63; s++) {
        k.knit("+", "f"+s, Carrier);
    }
    for (var s=63; s>=41; s--) {
        k.knit("-", "f"+s, Carrier);
    }
    // shortrow rows E
    for (var h=0; h<5; h++) {
        for (var s=41; s<=47; s++) {
            k.knit("+", "f"+s, Carrier);
        }
        for (var s=47; s>=41; s--) {
            k.knit("-", "f"+s, Carrier);
        }
    }
    for (var s=41; s<=47; s++) {
        k.knit("+", "f"+s, Carrier);
    }
    // row 3
    for (var s=47; s>=25; s--) {
        k.knit("-", "f"+s, Carrier);
    }
    // shortrow rows C
    for (var h=0; h<5; h++) {
        for (var s=25; s<=31; s++) {
            k.knit("+", "f"+s, Carrier);
        }
        for (var s=31; s>=25; s--) {
            k.knit("-", "f"+s, Carrier);
        }
    }
    // row 4
    for (var s=25; s<=31; s++) {
        k.knit("+", "f"+s, Carrier);
    }
    for (var s=31; s>=9; s--) {
        k.knit("-", "f"+s, Carrier);
    }
    // shortrow rows A
    for (var h=0; h<5; h++) {
        for (var s=9; s<=15; s++) {
            k.knit("+", "f"+s, Carrier);
        }
        for (var s=15; s>=9; s--) {
            k.knit("-", "f"+s, Carrier);
        }
    }
    // row 5
    for (var s=9; s<=width; s++) {
        k.knit("+", "f"+s, Carrier);
    }
    for (var s=width; s>0; s--) {
        k.knit("-", "f"+s, Carrier);
    }
    for (var s=1; s<=width; s++) {
        k.knit("+", "f"+s, Carrier);
    }
    for (var s=width; s>0; s--) {
        k.knit("-", "f"+s, Carrier);
    }
    // shortrow rows I
    for (var h=0; h<5; h++) {
    for (var s=1; s<=9; s++) {
        k.knit("+", "f"+s, Carrier);
    }
    for (var s=9; s>=1; s--) {
        k.knit("-", "f"+s, Carrier);
    }
    }
    // row 6
    for (var s=1; s<=24; s++) {
        k.knit("+", "f"+s, Carrier);
    }
    for (var s=24; s>=16; s--) {
        k.knit("-", "f"+s, Carrier);
    }
    // shortrow rows G
    for (var h=0; h<5; h++) {
        for (var s=16; s<=24; s++) {
            k.knit("+", "f"+s, Carrier);
        }
        for (var s=24; s>=16; s--) {
            k.knit("-", "f"+s, Carrier);
        }
    }
    // row 7
    for (var s=16; s<=40; s++) {
        k.knit("+", "f"+s, Carrier);
    }
    for (var s=40; s>=32; s--) {
        k.knit("-", "f"+s, Carrier);
    }
    // shortrow rows E
    for (var h=0; h<5; h++) {
        for (var s=32; s<=40; s++) {
            k.knit("+", "f"+s, Carrier);
        }
        for (var s=40; s>=32; s--) {
            k.knit("-", "f"+s, Carrier);
        }
    }
    // row 8
    for (var s=32; s<=56; s++) {
        k.knit("+", "f"+s, Carrier);
    }
    for (var s=56; s>=48; s--) {
        k.knit("-", "f"+s, Carrier);
    }
    // shortrow rows C
    for (var h=0; h<5; h++) {
        for (var s=48; s<=56; s++) {
            k.knit("+", "f"+s, Carrier);
        }
        for (var s=56; s>=48; s--) {
            k.knit("-", "f"+s, Carrier);
        }
    }
    // row 9
    for (var s=48; s<=width; s++) {
        k.knit("+", "f"+s, Carrier);
    }
}

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

// knit some rows back and forth
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

/////////////////////////////////////////////////////////////
// the main piece
var nblocks = 18;
for (var nblock=0; nblock<nblocks; nblock++) {
    sr_block();
}
var ndecblocks = 4;
for (var ndecblock=0; ndecblock<ndecblocks; ndecblock++) {
    // row 1
    for (var s=width; s>=41; s--) {
        k.knit("-", "f"+s, Carrier);
    }
    // shortrow rows E
    for (var h=0; h<5; h++) {
        for (var s=41; s<=47; s++) {
            k.knit("+", "f"+s, Carrier);
        }
        for (var s=47; s>=41; s--) {
            k.knit("-", "f"+s, Carrier);
        }
    }
    for (var s=41; s<=47; s++) {
        k.knit("+", "f"+s, Carrier);
    }
    // row 3
    for (var s=47; s>=25; s--) {
        k.knit("-", "f"+s, Carrier);
    }
    // shortrow rows C
    for (var h=0; h<5; h++) {
        for (var s=25; s<=31; s++) {
            k.knit("+", "f"+s, Carrier);
        }
        for (var s=31; s>=25; s--) {
            k.knit("-", "f"+s, Carrier);
        }
    }
    // row 4
    for (var s=25; s<=31; s++) {
        k.knit("+", "f"+s, Carrier);
    }
    for (var s=31; s>=9; s--) {
        k.knit("-", "f"+s, Carrier);
    }
    // shortrow rows A
    for (var h=0; h<5; h++) {
        for (var s=9; s<=15; s++) {
            k.knit("+", "f"+s, Carrier);
        }
        for (var s=15; s>=9; s--) {
            k.knit("-", "f"+s, Carrier);
        }
    }
    // row 5 (4 decreases)
    decrease(width, 0);
    for (var s=9; s<=width-1; s++) {
        k.knit("+", "f"+s, Carrier);
    }
    decrease(width, 1);
    for (var s=width-2; s>0; s--) {
        k.knit("-", "f"+s, Carrier);
    }
    decrease(width, 2);
    for (var s=1; s<=width-3; s++) {
        k.knit("+", "f"+s, Carrier);
    }
    decrease(width, 3);
    for (var s=width-4; s>0; s--) {
        k.knit("-", "f"+s, Carrier);
    }
    // shortrow rows I
    for (var h=0; h<5; h++) {
    for (var s=1; s<=9; s++) {
        k.knit("+", "f"+s, Carrier);
    }
    for (var s=9; s>=1; s--) {
        k.knit("-", "f"+s, Carrier);
    }
    }
    // row 6
    for (var s=1; s<=24; s++) {
        k.knit("+", "f"+s, Carrier);
    }
    for (var s=24; s>=16; s--) {
        k.knit("-", "f"+s, Carrier);
    }
    // shortrow rows G
    for (var h=0; h<5; h++) {
        for (var s=16; s<=24; s++) {
            k.knit("+", "f"+s, Carrier);
        }
        for (var s=24; s>=16; s--) {
            k.knit("-", "f"+s, Carrier);
        }
    }
    // row 7
    for (var s=16; s<=40; s++) {
        k.knit("+", "f"+s, Carrier);
    }
    for (var s=40; s>=32; s--) {
        k.knit("-", "f"+s, Carrier);
    }
    // shortrow rows E
    for (var h=0; h<5; h++) {
        for (var s=32; s<=40; s++) {
            k.knit("+", "f"+s, Carrier);
        }
        for (var s=40; s>=32; s--) {
            k.knit("-", "f"+s, Carrier);
        }
    }
    // row 8
    for (var s=32; s<=Math.min(56, width-4); s++) {
        k.knit("+", "f"+s, Carrier);
    }
    for (var s=Math.min(56, width-4); s>=44; s--) {
        k.knit("-", "f"+s, Carrier);
    }
    // shortrow rows C
    for (var h=0; h<5; h++) {
        for (var s=44; s<=Math.min(56, width-4); s++) {
            k.knit("+", "f"+s, Carrier);
        }
        for (var s=Math.min(56, width-4); s>=44; s--) {
            k.knit("-", "f"+s, Carrier);
        }
    }
    // row 9
    for (var s=44; s<=width-4; s++) {
        k.knit("+", "f"+s, Carrier);
    }
    width = width - 4;
}
/////////////////////////////////////////////////////////////
// knit some rows back and forth
for (var h=0; h<waste_height; h++) {
    for (var s=1; s<=width; s++) {
		k.knit("+", "f"+s, Carrier);
	}
	for (var s=width; s>0; s--) {
		k.knit("-", "f"+s, Carrier);
	}
}
// bring the yarn out with the yarn inserting hook
k.outhook(Carrier);

// write the knitout to a file
k.write('backright.k');
console.log('wrote backright.k')

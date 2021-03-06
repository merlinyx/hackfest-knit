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
var width = 72;
let Carrier = 4;
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
for (var s=width; s>=64; s--) {
    k.knit("-", "f"+s, Carrier);
}
// shortrow rows A
for (var h=0; h<5; h++) {
    for (var s=64; s<=width; s++) {
        k.knit("+", "f"+s, Carrier);
    }
    for (var s=width; s>=64; s--) {
        k.knit("-", "f"+s, Carrier);
    }
}
// row 10
for (var s=64; s<=width; s++) {
    k.knit("+", "f"+s, Carrier);
}
for (var s=width; s>=1; s--) {
    k.knit("-", "f"+s, Carrier);
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
k.write('shortrow_bumps_knit2.k');
console.log('wrote shortrow_bumps_knit2.k')

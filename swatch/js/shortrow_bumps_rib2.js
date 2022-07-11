// import the knitoutWriter code and instantiate it as an object
var knitout = require('./knitout');
k = new knitout.Writer({ carriers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] });

// add some headers relevant to this job
k.addHeader('Machine', 'SWGXYZ');
k.addHeader('Gauge', '7');
k.addHeader('Width', '270');
k.addHeader('Position', 'Center');

// swatch variables
var waste_height = 4;
var width = 73;
let Carrier = 4;
k.fabricPresser("auto");
// bring in Carrier using yarn inserting hook
k.inhook(Carrier);

const front = width % 2;

// tuck on alternate needles to cast on
for (var s=width; s>0; s--) {
	if (s%2 == front) {
		k.tuck("-", "f"+s, Carrier);
	} else {
		k.miss("-", "f"+s, Carrier);
	}
}
for (var s=1; s<=width; s++) {
	if (s%2 != front) {
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
for (var s = width; s > 0; s--) {
    if (s % 2 != front) {
        k.xfer("f" + s, "b" + s);
    }
}
// row 1
for (var s = width; s >= 57; s--) {
    if (s % 2 == front) {
        k.knit("-", "f" + s, Carrier);
    } else {
        k.knit("-", "b" + s, Carrier);
    }
}
// shortrow rows G
for (var h = 0; h < 5; h++) {
    for (var s = 57; s <= 63; s++) {
        if (s % 2 == front) {
            k.knit("+", "f" + s, Carrier);
        } else {
            k.knit("+", "b" + s, Carrier);
        }
    }
    for (var s = 63; s >= 57; s--) {
        if (s % 2 == front) {
            k.knit("-", "f" + s, Carrier);
        } else {
            k.knit("-", "b" + s, Carrier);
        }
    }
}
// row 2
for (var s = 57; s <= 63; s++) {
    if (s % 2 == front) {
        k.knit("+", "f" + s, Carrier);
    } else {
        k.knit("+", "b" + s, Carrier);
    }
}
for (var s = 63; s >= 41; s--) {
    if (s % 2 == front) {
        k.knit("-", "f" + s, Carrier);
    } else {
        k.knit("-", "b" + s, Carrier);
    }
}
// shortrow rows E
for (var h = 0; h < 5; h++) {
    for (var s = 41; s <= 47; s++) {
        if (s % 2 == front) {
            k.knit("+", "f" + s, Carrier);
        } else {
            k.knit("+", "b" + s, Carrier);
        }
    }
    for (var s = 47; s >= 41; s--) {
        if (s % 2 == front) {
            k.knit("-", "f" + s, Carrier);
        } else {
            k.knit("-", "b" + s, Carrier);
        }
    }
}
for (var s = 41; s <= 47; s++) {
    if (s % 2 == front) {
        k.knit("+", "f" + s, Carrier);
    } else {
        k.knit("+", "b" + s, Carrier);
    }
}
// row 3
for (var s = 47; s >= 25; s--) {
    if (s % 2 == front) {
        k.knit("-", "f" + s, Carrier);
    } else {
        k.knit("-", "b" + s, Carrier);
    }
}
// shortrow rows C
for (var h = 0; h < 5; h++) {
    for (var s = 25; s <= 31; s++) {
        if (s % 2 == front) {
            k.knit("+", "f" + s, Carrier);
        } else {
            k.knit("+", "b" + s, Carrier);
        }
    }
    for (var s = 31; s >= 25; s--) {
        if (s % 2 == front) {
            k.knit("-", "f" + s, Carrier);
        } else {
            k.knit("-", "b" + s, Carrier);
        }
    }
}
// row 4
for (var s = 25; s <= 31; s++) {
    if (s % 2 == front) {
        k.knit("+", "f" + s, Carrier);
    } else {
        k.knit("+", "b" + s, Carrier);
    }
}
for (var s = 31; s >= 9; s--) {
    if (s % 2 == front) {
        k.knit("-", "f" + s, Carrier);
    } else {
        k.knit("-", "b" + s, Carrier);
    }
}
// shortrow rows A
for (var h = 0; h < 5; h++) {
    for (var s = 9; s <= 15; s++) {
        if (s % 2 == front) {
            k.knit("+", "f" + s, Carrier);
        } else {
            k.knit("+", "b" + s, Carrier);
        }
    }
    for (var s = 15; s >= 9; s--) {
        if (s % 2 == front) {
            k.knit("-", "f" + s, Carrier);
        } else {
            k.knit("-", "b" + s, Carrier);
        }
    }
}
// row 5
for (var s = 9; s <= width; s++) {
    if (s % 2 == front) {
        k.knit("+", "f" + s, Carrier);
    } else {
        k.knit("+", "b" + s, Carrier);
    }
}
for (var s = width; s > 0; s--) {
    if (s % 2 == front) {
        k.knit("-", "f" + s, Carrier);
    } else {
        k.knit("-", "b" + s, Carrier);
    }
}
for (var s = 1; s <= width; s++) {
    if (s % 2 == front) {
        k.knit("+", "f" + s, Carrier);
    } else {
        k.knit("+", "b" + s, Carrier);
    }
}
for (var s = width; s > 0; s--) {
    if (s % 2 == front) {
        k.knit("-", "f" + s, Carrier);
    } else {
        k.knit("-", "b" + s, Carrier);
    }
}
// shortrow rows I
for (var h = 0; h < 5; h++) {
    for (var s = 1; s <= 9; s++) {
        if (s % 2 == front) {
            k.knit("+", "f" + s, Carrier);
        } else {
            k.knit("+", "b" + s, Carrier);
        }
    }
    for (var s = 9; s >= 1; s--) {
        if (s % 2 == front) {
            k.knit("-", "f" + s, Carrier);
        } else {
            k.knit("-", "b" + s, Carrier);
        }
    }
}
// row 6
for (var s = 1; s <= 25; s++) {
    if (s % 2 == front) {
        k.knit("+", "f" + s, Carrier);
    } else {
        k.knit("+", "b" + s, Carrier);
    }
}
for (var s = 25; s >= 17; s--) {
    if (s % 2 == front) {
        k.knit("-", "f" + s, Carrier);
    } else {
        k.knit("-", "b" + s, Carrier);
    }
}
// shortrow rows G
for (var h = 0; h < 5; h++) {
    for (var s = 17; s <= 25; s++) {
        if (s % 2 == front) {
            k.knit("+", "f" + s, Carrier);
        } else {
            k.knit("+", "b" + s, Carrier);
        }
    }
    for (var s = 25; s >= 17; s--) {
        if (s % 2 == front) {
            k.knit("-", "f" + s, Carrier);
        } else {
            k.knit("-", "b" + s, Carrier);
        }
    }
}
// row 7
for (var s = 17; s <= 41; s++) {
    if (s % 2 == front) {
        k.knit("+", "f" + s, Carrier);
    } else {
        k.knit("+", "b" + s, Carrier);
    }
}
for (var s = 41; s >= 33; s--) {
    if (s % 2 == front) {
        k.knit("-", "f" + s, Carrier);
    } else {
        k.knit("-", "b" + s, Carrier);
    }
}
// shortrow rows E
for (var h = 0; h < 5; h++) {
    for (var s = 33; s <= 41; s++) {
        if (s % 2 == front) {
            k.knit("+", "f" + s, Carrier);
        } else {
            k.knit("+", "b" + s, Carrier);
        }
    }
    for (var s = 41; s >= 33; s--) {
        if (s % 2 == front) {
            k.knit("-", "f" + s, Carrier);
        } else {
            k.knit("-", "b" + s, Carrier);
        }
    }
}
// row 8
for (var s = 33; s <= 57; s++) {
    if (s % 2 == front) {
        k.knit("+", "f" + s, Carrier);
    } else {
        k.knit("+", "b" + s, Carrier);
    }
}
for (var s = 57; s >= 49; s--) {
    if (s % 2 == front) {
        k.knit("-", "f" + s, Carrier);
    } else {
        k.knit("-", "b" + s, Carrier);
    }
}
// shortrow rows C
for (var h = 0; h < 5; h++) {
    for (var s = 49; s <= 57; s++) {
        if (s % 2 == front) {
            k.knit("+", "f" + s, Carrier);
        } else {
            k.knit("+", "b" + s, Carrier);
        }
    }
    for (var s = 57; s >= 49; s--) {
        if (s % 2 == front) {
            k.knit("-", "f" + s, Carrier);
        } else {
            k.knit("-", "b" + s, Carrier);
        }
    }
}
// row 9
for (var s = 49; s <= width; s++) {
    if (s % 2 == front) {
        k.knit("+", "f" + s, Carrier);
    } else {
        k.knit("+", "b" + s, Carrier);
    }
}
for (var s = width; s >= 65; s--) {
    if (s % 2 == front) {
        k.knit("-", "f" + s, Carrier);
    } else {
        k.knit("-", "b" + s, Carrier);
    }
}
// shortrow rows A
for (var h = 0; h < 5; h++) {
    for (var s = 65; s <= width; s++) {
        if (s % 2 == front) {
            k.knit("+", "f" + s, Carrier);
        } else {
            k.knit("+", "b" + s, Carrier);
        }
    }
    for (var s = width; s >= 65; s--) {
        if (s % 2 == front) {
            k.knit("-", "f" + s, Carrier);
        } else {
            k.knit("-", "b" + s, Carrier);
        }
    }
}
// row 10
for (var s = 65; s <= width; s++) {
    if (s % 2 == front) {
        k.knit("+", "f" + s, Carrier);
    } else {
        k.knit("+", "b" + s, Carrier);
    }
}
for (var s = width; s >= 1; s--) {
    if (s % 2 == front) {
        k.knit("-", "f" + s, Carrier);
    } else {
        k.knit("-", "b" + s, Carrier);
    }
}
/////////////////////////////////////////////////////////////
for (var s = width; s > 0; s--) {
    if (s % 2 != front) {
        k.xfer("b" + s, "f" + s);
    }
}
// knit some waste yarn
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
k.write('shortrow_bumps_rib2.k');
console.log('wrote shortrow_bumps_rib2.k')

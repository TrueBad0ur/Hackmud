function(context, args) {
    var target = args.t;
    var r = target.call({});
    var unlocked;
    var x = 0;
    var y = 0;
    var c = 0;
    var d = 0;
    if (r.indexOf("EZ_40") > -1) {
        while (r.indexOf("ez_prime") < 0) {
            var p = ["unlock", "open", "release"];
            r = target.call({ EZ_40: p[x] });
            unlocked = p[x]
            x++
        }

        while (r.indexOf("UNLOCKED") < 0) {
            var d = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
            var ez40 = { EZ_40: unlocked, ez_prime: d[y] }
            Object.assign(ez40, args);
            r = target.call(ez40);
            y++
        }
    }

    if (r.indexOf("c002") > -1) {
        while (r.indexOf("UNLOCKED") < 0) {
            var c1 = ["red", "orange", "yellow", "lime", "green", "cyan", "blue", "purple"];
            var c002 = { c002: c1[c], c002_complement: c1[(c + 4) % 8] };
            Object.assign(c002, args);
            r = target.call(c002);
            c++;
        }
    }

    if (r.indexOf("c003") > -1) {
        while (r.indexOf("UNLOCKED") < 0) {
            var c3 = ["red", "orange", "yellow", "lime", "green", "cyan", "blue", "purple"];
            r = target.call({ c003: c3[d], c003_triad_1: c3[(d + 5) % 8], c003_triad_2: c3[(d + 3) % 8] });
            d++
        }
    }
    return r;
}
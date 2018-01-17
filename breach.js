function(context, args) {
    var target = args.t;
    var r = target.call({});
    var p = ["unlock", "open", "release"];
    var unlocked;
    var x = 0;
    var y = 0;

    if(r.indexOf("EZ_21") > -1) {
        x = 0;
        while(r.indexOf("UNLOCKED") < 0) {
            var ez21 = {EZ_21: p[x]};
            Object.assign(ez21, args);
            r = target.call(ez21);
            x++
        }
    }

    if(r.indexOf("EZ_35") > -1) {
        x = 0;
        while(r.indexOf("digit") < 0) {
            r = target.call({EZ_35:p[x]});
            unlocked = p[x];
            x++
        }
        x = 0;
        while(r.indexOf("UNLOCKED") < 0) {
            var ez35 = {EZ_35:unlocked, digit:x};
            Object.assign(ez35, args);
            r = target.call(ez35);
            x++
        }
    }

    if (r.indexOf("EZ_40") > -1) {
        x = 0;
        y = 0;
        while (r.indexOf("ez_prime") < 0) {
            r = target.call({ EZ_40: p[x] });
            unlocked = p[x]
            x++
        }
        x = 0;
        while (r.indexOf("UNLOCKED") < 0) {
            var d = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
            var ez40 = { EZ_40: unlocked, ez_prime: d[x] }
            Object.assign(ez40, args);
            r = target.call(ez40);
            x++
        }
    }

    if (r.indexOf("c001") > -1) {
        x = 0;
        while (r.indexOf("UNLOCKED") < 0) {
            var c1 = ["red", "orange", "yellow", "lime", "green", "cyan", "blue", "purple"];
            var c001 = { c001: c1[x], color_digit:c1[x].length};
            Object.assign(c001, args);
            r = target.call(c001);
            x++
        }
    }

    if (r.indexOf("c002") > -1) {
        x = 0;
        while (r.indexOf("UNLOCKED") < 0) {
            var c2 = ["red", "orange", "yellow", "lime", "green", "cyan", "blue", "purple"];
            var c002 = { c002: c2[x], c002_complement: c2[(x + 4) % 8] };
            Object.assign(c002, args);
            r = target.call(c002);
            x++
        }
    }

    if (r.indexOf("c003") > -1) {
        x = 0;
        while (r.indexOf("UNLOCKED") < 0) {
            var c3 = ["red", "orange", "yellow", "lime", "green", "cyan", "blue", "purple"];
            var c003 = { c003: c3[x], c003_triad_1: c3[(x + 5) % 8], c003_triad_2: c3[(x + 3) % 8] };
            Object.assign(c003, args);
            r = target.call(c003);
            x++
        }
    }

    if(r.indexOf("l0cket") > -1) {
        x = 0;
        while(r.indexOf("UNLOCKED") < 0) {
            var lck = ["6hh8xw", "cmppiq", "sa23uw", "tvfkyq", "uphlaw", "vc2c7q", "xwz7ja"];
            var l0ck = {l0cket:lck[x]};
            Object.assign(l0ck, args);
            r = target.call(l0ck);
            x++
        }
    }
    return r;
}
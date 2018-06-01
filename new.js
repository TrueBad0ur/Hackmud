function(context, args) {
    var target = args.t;
    var r = target.call({});
    var p = ["unlock", "open", "release"];
    var unlocked;
    var x = 0;
    var fin = {};

    if(r.indexOf("EZ_21") > -1) {
        x = 0;
        while(r.indexOf("UNLOCKED") < 0) {
             ez21 = {EZ_21: p[x]};
            Object.assign(ez21, args);
            r = target.call(ez21);
            x++;
        }
    }
}

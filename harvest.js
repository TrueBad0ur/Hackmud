function(context, args){
    // var m = #hs.accts.balance({});
    // #ms.accts.xfer_gc_to({to:"md5sum", amount:m})
    // #ms.chats.join({channel:"0000"})
    // #fs.chats.send({channel:"0000", msg:"If you need some npc accounts try md5sum.npcs"})
    // #fs.chats.send({channel:"0000", msg:"I got around 20 or so from there"})
    // return "You're pretty dank!";
    var call = #fs.archaic.public({});
    var call2 = #fs.archaic.public();
    var nav = call.substring(call.lastIndexOf("with ") + 5, call.lastIndexOf(":"))
    var hidden = call.substring(call.lastIndexOf(":\"") + 2, call.lastIndexOf("\""))
    var passPageString = call2.substring(call2.indexOf("|") + 2, call2.lastIndexOf("|") - 1)
    var passPage = #fs.archaic.public({[nav]:passPageString})
    var pass = passPage.substring(passPage.indexOf("strategy") + 9, passPage.indexOf("and we") - 1)
    var hp = #fs.archaic.public({[nav]:hidden})
    return pass
}
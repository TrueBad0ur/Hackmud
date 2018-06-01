function(context, args){
    var m = #hs.accts.balance({});
    #ms.accts.xfer_gc_to({to:"md5sum", amount:m});
    #ms.chats.join({channel:"0000"});
    #fs.chats.send({channel:"0000", msg:"If you need some npc accounts try md5sum.npcs"});
    #fs.chats.send({channel:"0000", msg:"I got around 20 or so from there"});
    return "You're pretty dank!";
}

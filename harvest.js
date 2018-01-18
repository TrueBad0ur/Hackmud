function(context, args){
    var call = #fs.archaic.public({});
    var call2 = #fs.archaic.public();
    var nav = call.substring(call.lastIndexOf("with ") + 5, call.lastIndexOf(":"))
    var hidden = call.substring(call.lastIndexOf(":\"") + 2, call.lastIndexOf("\""))
    var passPageString = call2.substring(call2.indexOf("|") + 2, call2.lastIndexOf("|") - 1)
    var passPage = #fs.archaic.public({[nav]:passPageString})
    var pass = passPage.substring(passPage.indexOf("strategy") + 9, passPage.indexOf("and we") - 1)
    var hp = #fs.archaic.public({[nav]:hidden})
    var passKey;
    var x = 0;
    var cloud = #fs.archaic.public({[nav]:hidden, password:pass, pass:pass, p:pass, project:"cloudskimmer.da7a"})
    var ende = #fs.archaic.public({[nav]:hidden, password:pass, pass:pass, p:pass, project:"ende.exe"})
    var semordnilap = #fs.archaic.public({[nav]:hidden, password:pass, pass:pass, p:pass, project:"semordnilap.sh"})
    var ragnaroxx = #fs.archaic.public({[nav]:hidden, password:pass, pass:pass, p:pass, project:"ragnaroxx.sh"})
    var projects = [cloud, ende, semordnilap, ragnaroxx]
    return projects
}
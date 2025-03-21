var a = document.querySelector(".calculates");
a.addEventListener("click",function(){
    var c = document.querySelector(".total").value;
    if(c>40){
        alert("enter the marks equal to or bellow 40");
    }else{
        if(c>=37){
            document.querySelector(".og").innerHTML = "90";
            document.querySelector(".ag").innerHTML = "80";
            document.querySelector(".Ag").innerHTML = "70";
            document.querySelector(".bgp").innerHTML = "60";
            document.querySelector(".bg").innerHTML = "45";
            document.querySelector(".cg").innerHTML = "45";

        }else if((c>=32) && (c<37)){
            document.querySelector(".og").innerHTML = "95";
            document.querySelector(".ag").innerHTML = "85";
            document.querySelector(".Ag").innerHTML = "75";
            document.querySelector(".bgp").innerHTML = "65";
            document.querySelector(".bg").innerHTML = "50";
            document.querySelector(".cg").innerHTML = "45";
        }else if((c>=29) && (c<32)){
            document.querySelector(".og").innerHTML = "97";
            document.querySelector(".ag").innerHTML = "88";
            document.querySelector(".Ag").innerHTML = "79";
            document.querySelector(".bgp").innerHTML = "70";
            document.querySelector(".bg").innerHTML = "54";
            document.querySelector(".cg").innerHTML = "50";
        }
        else if((c>=25) && (c<29)){
            document.querySelector(".og").innerHTML = "100";
            document.querySelector(".ag").innerHTML = "92";
            document.querySelector(".Ag").innerHTML = "83";
            document.querySelector(".bgp").innerHTML = "74";
            document.querySelector(".bg").innerHTML = "60";
            document.querySelector(".cg").innerHTML = "55";
        }else{
            alert("you need to have internals above 25");
        }
        document.querySelector(".Grades").style.visibility = "visible";
    }
})

var bttn = document.querySelector(".markss").addEventListener("click",function(){
    var a = document.querySelector(".fa1").value;
    var b = document.querySelector(".fa2").value;
    var d = document.querySelector(".fa3").value;
    if((a || b || d)>50){
        alert("enter the marks below or equal to 50");
    }else{
        var an = Number(a);
        var bn = Number(b);
        var dn = Number(d);
        var fatm = an+bn+dn;
        var totm = fatm*0.6;
    }
    var asa = document.querySelector(".as1").value;
    var asb = document.querySelector(".as2").value;
    var asd = document.querySelector(".as3").value;
    if((asa || asb || asd)>50){
        alert("enter the marks below or equal to 50");
    }else{
        var asm = Number(asa)+Number(asb)+Number(asd);
        asm = asm*0.4
    }
    var tots = totm+asm;
    tots = tots*0.4;
    document.querySelector(".panda").innerHTML = "The internal marks is "+tots;
    document.querySelector(".panda").style.visibility = "visible";
})

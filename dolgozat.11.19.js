//1.feladat
function Szamos(szam){
    if(szam === 0){
        return "Adjon meg egy nagyobb számot!";
    }
    else if(szam < 0 || szam >  1000000){
        return "Adjon meg egy másik számot!";
    }
    const szamString = szam.toString();
    const eredmeny = [];
    for (let i = szam; i++){
        eredmeny[i] = szamString(0,i +1);
    }
    return eredmeny;
}
onsole.log(Szamos(420));

//2.feladat

//3.feladat
parseInt(20)
parseInt(20 alma)
//4.feladat
function Faktorialis(szam){
    if(szam === 0 || szam === 1 ){
        return "Nagyobb szám kell!"
    }
    return szam* Faktorialis(szam-1);
}
onsole.log(Faktorialis(6));

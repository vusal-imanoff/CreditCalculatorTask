function Hesabla(){
    let kredit=Number(document.getElementById("kredit").value);
    let ay=Number(document.getElementById("ay").value);
    let faiz=Number(document.getElementById("derece").value);
    let mebleg=document.getElementById("mebleg");
    let illik_faiz = document.getElementById("faiz");
    let text1=document.getElementById("metn1");
    let text2=document.getElementById("metn2");

    let umumi=((((((kredit*faiz)/100)*ay)/12)+kredit)/ay);
    let umumi_faiz=((((kredit*faiz)/100)*ay)/12);
    mebleg.innerHTML=umumi.toFixed(2)+ " azn";
    mebleg.style.display="inline";
    illik_faiz.innerHTML=umumi_faiz+ " azn";
    illik_faiz.style.display="inline"
    text1.style.display="block"
    text2.style.display="block"

}

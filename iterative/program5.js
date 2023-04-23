let n=7;
let stars=1;
let spaces=Math.floor(n/2);
for(let i=1;i<=n;i++){
    let starsstr="";
    for(let j=1;j<=stars;j++) starsstr+="*";

    let spacesstr="";
    for(let j=1;j<=spaces;j++) spacesstr+=" ";
    console.log(spacesstr+starsstr);
    if(i<=n/2){
        stars+=2;
        spaces-=1;
    }
    else{
        stars-=2;
        spaces+=1;
    }
}
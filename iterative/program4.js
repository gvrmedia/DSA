let n=5;
for(let i=n;i>=1;i--){
    let stars=i;
    let spaces=n-i;
    let starsstr="";
    let spacesstr="";
    for(let j=1;j<=spaces;j++)
    spacesstr+=" ";
    for(let j=1;j<=stars;j++) starsstr+="*";
    console.log(spacesstr+starsstr)
}
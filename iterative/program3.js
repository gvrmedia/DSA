let n=5;
for(let i=1;i<=n;i++){
    let stars=i;
    let spaces=n-i;
    let spacesstr="";
    let starsstr="";
    for (let j=1; j<=spaces; j++) 
    spacesstr+=" ";
    for(let j=1;j<=stars;j++)starsstr+="*";
    console.log(spacesstr+starsstr);
}
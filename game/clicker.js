GGGG=0
vis=true
function YYYY(){
GGGG++
if (vis==true){
document.head.children[0].href='antifavicon.com/genicon2.cgi?txttop='+GGGG+'&txtbot=null&fgtop=%23000000&fgbot=%23FFFFFF&bgtop=%23FFFFFF&bgbot=%23FFFFFF&bcolor=%23000000&drawborder=no'
setTimeout('YYYY()',850)
}else{
GGGG=0
document.head.children[0].href='antifavicon.com/genicon2.cgi?txttop='+GGGG+'&txtbot=&fgtop=%23FFFFFF&fgbot=%23FFFFFF&bgtop=%FFFFF&bgbot=%FFFFFF&bcolor=%23000000&drawborder=yes'
}
}
YYYY()
function begin(){alert('space to click 1 to upgrade cpc 2 to upgrade cps')}
var c=new Decimal(0),ca=new Decimal(1),cs=0,cost,cost2,_c,timeractive,max1,max2,buymax=true,amount2,amount1,SAVE=0;
document.addEventListener('keypress', event => {
  if (event.code === 'Space') {
c=c.add(ca);
_c=c.toExponential()
document.body.children[0].innerText=_c+" clicks"}
  if (event.code==='Digit1'){
document.body.children[1].innerText="buy 1 more click per click for "+cost
if (c.greaterThanOrEqualTo(cost)){
c=c.subtract(cost);
ca=ca.add(amount1)
}
console.log(ca+" cpc"+'\n cost='+cost+" clicks = "+c)
  }
  if (event.code==='Digit2'){
  amount2=a(c,20,20,cs)
cost2 = s(amount2,20,20,cs)
document.body.children[4].innerText="buy 1 more click per second for "+cost2
if (c.greaterThanOrEqualTo(cost2)){
c=c.subtract(cost2);
cs=cs.add(amount2)
}
  }
})


const d = Decimal,a=d.affordArithmeticSeries,s = d.sumArithmeticSeries,e=eval,c1=function(){return a(c,10,10,ca.subtract(1))},c2=function(){return a(c,20,20,cs)},c3=function(){return s(amount1,10,10,ca.subtract(1));},c4=function(){return new d(s(amount2,20,20,cs));},c5=function(L){return s(L,10,10,ca.subtract(1)).toString();},c6=function(L){return s(L,20,20,cs).toString();}
function maxbuy(){
max1=d.affordGeometricSeries(c,10,1.5,ca)
max2=d.affordGeometricSeries(c,20,2.5,cs)
/*Decimal.affordArithmeticSeries(c,20,5,cs)*/
}
const cDate = (d1, d2) => {
  let date1 = new Date(d1).getTime();
  let date2 = new Date(d2).getTime();

  if (date1 > date2-30000) {
    console.log('nice try')
      return false
  } else if (date1 <= (date2-30000)) {
    document.body.children[2].style.display = 'inline';
    console.log((date2-30000)-date1)
    return true;
  } else {
    console.log(`how?`);
  }
};
function redo(BB){
return JSON.parse(atob(atob(BB))) 
}
function init(){
//alert('click anywhere to get clicks')
c=new Decimal(0) 
ca=new Decimal(1)
cs=new Decimal(0)
/*amount1=a(c,10,10,ca-1)
cost = new d(s(amount1,10,10,ca.subtract(1)))
amount2=a(c,20,20,cs)
cost2 = s(amount2,20,20,cs)*/
document.body.children[1].innerText="press 1 to buy 1 more click per click for "+cost
document.body.children[0].innerText=c+" clicks"
document.body.children[1].onclick=function buy(){
//cost = a(c,10,10,ca)
document.body.children[1].innerText="press 1 to buy 1 more click per click for "+cost
if (c.greaterThanOrEqualTo(cost)){
c=c.subtract(cost);
ca=ca.add(amount1)
}
//document.body.children[1].innerText="press 1 to buy 1 more click per click for "+cost
console.log(ca+" cpc"+'\n cost='+cost+" clicks = "+c)
return ca}
document.body.children[4].onclick=function buy2(){
amount2=a(c,20,20,cs)
cost2 = s(amount2,20,20,cs)
document.body.children[4].innerText="press 2 to buy 1 more click per second for "+cost2
if (c.greaterThanOrEqualTo(cost2)){
c=c.subtract(cost2);
cs=cs.add(amount2)
}console.log(cs+" cps"+'\n cost='+cost2+" clicks = "+c)
return cs}
document.body.onclick=function click(){
c=c.add(ca);/*
document.body.children[0].innerText=c+" clicks"
*/
_c=c.toExponential()
document.body.children[0].innerText=_c+" clicks"
return _c
}
document.body.children[2].onclick=function Export(){
SAVE+=1
save = btoa(btoa(JSON.stringify({
a1:{value:c, id:'money'},
a2: {value:ca, id:'cpc'},
a3: {value:cost, id:'price'},
a4: {value:true, id:'export on CD'},
a5: {value:new Date(), id:'Date'},
a6: {value:cs, id:'cps'},
a7: {value:cost2, id:'cost2'},
a8: {value:SAVE, id:'saveNUM'}
})));
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Start file download.
download(SAVE+'.txt',save);
document.body.children[2].style.display = 'none';
timeractive=true
//close()
setTimeout("   document.body.children[2].style.display = 'inline';timeractive=false;console.log('done')",30000)
}

document.body.children[3].onclick=function Import(){
document.getElementById("filetoRead").style.display = 'none';
document.getElementById("filetoRead").addEventListener("change",function(){
        var file = this.files[0];

        if (file) {
            var reader = new FileReader();
            
            reader.onload = function (evt) {
                console.log(evt);
                save=redo(evt.target.result)
                c  = new Decimal(save.a1.value)
                ca = new Decimal(save.a2.value)
                cost = new Decimal(save.a3.value)
                cs  = new Decimal(save.a6.value)
                cost2 = new Decimal(save.a7.value)
                timeractive = save.a4.value
                date=save.a5.value
				SAVE=save.a8.value
               if (cDate(date,new Date())==false){
              document.body.children[2].style.display = 'none';
 setTimeout("   document.body.children[2].style.display = 'inline';timeractive=false;console.log('done')",30000)
                }

            };

            reader.onerror = function (evt) {
                console.error("An error ocurred reading the file",evt);
            };

            reader.readAsText(file, "UTF-8");
        }
    },false);

}

}
function update(){
amount1=c1()//a(c,10,10,ca-1)
cost = c3() //s(amount1,10,10,ca-1)
document.body.children[1].innerText="press 1 to buy "+amount1+" more click per click for "+cost
amount2=c2()//a(c,20,20,cs)
cost2 = c4()//s(amount2,20,20,cs)
document.body.children[4].innerText="press 2 to buy "+amount2+" more click per second for "+cost2
}
function cps(){
c=c.add(cs)
_c=c.toExponential()
document.body.children[0].innerText=_c+" clicks"}
setInterval('update()',10)
setInterval('cps()',1000)
function download(filename, text) {
save = btoa(btoa(JSON.stringify({
a1:{value:c, id:'money'},
a2: {value:ca, id:'cpc'},
a3: {value:cost, id:'price'},
a4: {value:true, id:'export on CD'},
a5: {value:new Date(), id:'Date'},
a6: {value:cs, id:'cps'},
a7: {value:cost2, id:'cost2'},
a8: {value:SAVE, id:'saveNUM'}
})));
  var elementa = document.createElement('a');
  elementa.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  elementa.setAttribute('download', filename);

  elementa.style.display = 'none';
  document.head.appendChild(elementa);

  elementa.click();

  document.head.removeChild(elementa);

// Start file download.
}
function debug(){
SAVE+=1
save = /*btoa(btoa(*/JSON.stringify({
a1:{value:c, id:'money'},
a2: {value:ca, id:'cpc'},
a3: {value:cost, id:'price'},
a4: {value:true, id:'export on CD'},
a5: {value:new Date(), id:'Date'},
a6: {value:cs, id:'cps'},
a7: {value:cost2, id:'cost2'},
a8: {value:SAVE, id:'saveNUM'}
})//));
download(SAVE+'.txt',save);
}
function abc(){
document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState == "visible") {
    newTime=(new Date().getTime())
    console.log("tab is active")
    c=c.add(cs.multiply(Math.floor((newTime-oldTime)/1000)))
alert('added '+cs.multiply(Math.floor((newTime-oldTime)/1000))+' away for'+Math.floor((newTime-oldTime)/1000))
_c=c.toExponential()
document.body.children[0].innerText=_c+" clicks"
  } else {
  oldTime=(new Date().getTime())
  console.log("tab is inactive")
  }
});
}
setTimeout('abc()',1000)
setTimeout('document.body.onload=init()',3000)

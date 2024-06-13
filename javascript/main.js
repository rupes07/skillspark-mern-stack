
 
  // const Header = () => {
    // return (
      // <div className="header">
        // <h1>Hello World</h1>
      // </div>
    // );}
    
    // function Body () {
        // return  <div className="body">Rupesh</div>;
          
      // }
    // const Footer = () => {
        // return <div className="fot">Footer</div>;
      // };
  
  
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  
  // root.render(
    // <div className="container">
      // <Header />
      // <Body name="Rupes" type="Hello" />
      // <Footer />
    // </div>
//  )
// let num=document.querySelector('h1')
// let number=5
// let numData = ""

// for (var i = 1; i<= 10; i++){
  // let result=(number*i);
  // numData+=(`${number}*${i}=${result}<br/>`)
  // console.log(numData)
  
  
// }
// num.innerHTML=numData 


// multiplation table up to 100 by any number.
var mtable = document.getElementById("mtable");
function MuntiplicationTable(number, n){
let mtableData = "";

for (var i = 1; i <= n; i++) {
  const result = number * i;
  mtableData += `${number}x${i}=${result}<br/>`;
}
return mtableData;
}

function displayMultiplicationTable(){
  let number = document.getElementById("multiplicationinput")
  let tabledata=MuntiplicationTable(number, 100);
  mtable.innerHTML = tabledata;
  


}





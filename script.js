//how to compare two JSON have same properties without order

    const obj1 = { name: 'person', age: 5 };
    const obj2 = { age: 5, name: 'person' };
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys01.length == keys02.length) {
        console.log(true);
    }
    else{
        console.log(false);
    }

    

    //Display all countries flags name in the URL
 let xml=new XMLHttpRequest();
 xml.open("GET","https://restcountries.com/v3.1/all");
 xml.send();
 xml.onload=function(){
    let data=JSON.parse(xml.response);
    console.log(data);
    for(i=0;i<data.length;i++){
         console.log(data[i].name.common,"flags:",data[i].flags);
    }
  }



// //Display all countries name,region,sunregion and population in the URL
let xml=new XMLHttpRequest();
xml.open("GET","https://restcountries.com/v3.1/all");
xml.send();
xml.onload=function(){
    let data=JSON.parse(xml.response);
    console.log(data);

    for(i=0;i<data.length;i++){
        //let msg=data[i].common;
        //let region=data[i].region;
        let result=`countries Name: ${data[i].name.common}
          Name:${data[i].region}
          Sub-region:${data[i].subregion}
          Population${data[i].population}`;
          console.log(result);
    }
}
            
    

    
    
    

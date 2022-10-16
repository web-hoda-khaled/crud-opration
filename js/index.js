var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc");
var button = document.getElementById("btn");
var  allProduct ;
var mainIndex = 0;


//get data from logal storge

if(localStorage.getItem("All Product") != null){
    allProduct = ( JSON.parse( localStorage.getItem("All Product") ))
    display ()
}else{
allProduct = []
}

//validation name
function vaildName (){
    var regex = /^[a-z]{4,20}[0-9]{0,5}$/ig

    if(regex.test(productName.value) == true){
        return true
    }
    else{
        return false
    }
}


//validation price
function vaildPrice (){
    var regex = /^[0-9]{2,10}$/g

    if(regex.test(productPrice.value) == true){
        return true
    }
    else{
        return false
    }
}


//validation  Category
function vaildPCategory (){
    var regex = /^[a-z]{2,12}[0-9]{0,5}$/ig

    if(regex.test(productCategory.value) == true){
        return true
    }
    else{
        return false
    }
}


//validation  desc
function vaildPCategory (){
    var regex = /^[a-z]{2,20}$/ig

    if(regex.test(productDesc.value) == true){
        return true
    }
    else{
        return false
    }
}



// add product
function addProduct(){


    if( vaildName () == true && vaildPrice () == true && vaildPCategory ()== true && vaildPCategory () == true){
    var product = {
        name : productName.value ,
        price : Number(productPrice.value) ,
        category : productCategory.value ,
        desc : productDesc.value ,
    };

    if (button.innerHTML == "Add Product"){
        
    allProduct.push(product);




    
    }else{
        updatePorduct()
    }


    //set  item in local storge
    localStorage.setItem("All Product",JSON.stringify(allProduct));

    //alert
    document.getElementById("alertName").style.display="none"
    document.getElementById("alertPrice").style.display="none"
    document.getElementById("alertCategory").style.display="none"
    document.getElementById("alertDesc").style.display="none"




    }
    
    else{
    document.getElementById("alertName").style.display="block"
    document.getElementById("alertPrice").style.display="block"
    document.getElementById("alertCategory").style.display="block"
    document.getElementById("alertDesc").style.display="block"



    }



    clearForm ();
    display ()



}


// clear form
function clearForm (){
    productName.value="";
    productPrice.value="";
    productCategory.value="";
    productDesc.value="";

}


//display 
function display (){
    var content = ``
    for ( var i = 0 ; i < allProduct.length ; i++){
        content += `
        <tr>
        <td>${i+1}</td>
        <td>${allProduct[i].name}</td>
        <td>${allProduct[i].price}</td>
        <td>${allProduct[i].category}</td>
        <td>${allProduct[i].desc}</td>
        <td><button onclick="getProudectInfo(${i})" class="btn btn-warning">Uptade</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
        </tr>
        `
    }

    document.getElementById("tableBody").innerHTML=content
}



//delete product
function deleteProduct(index){
    allProduct.splice(index , 1);
    display ();




    //set  item in local storge
    localStorage.setItem("All Product",JSON.stringify(allProduct));
}



//update getProudectInfo 
function getProudectInfo (index){

mainIndex=index
    productName.value = allProduct[index].name
    productPrice.value = allProduct[index].price
    productCategory.value = allProduct[index].category
    productDesc.value = allProduct[index].desc 


    button.innerHTML = "update Porduct";

}



//update product 
function updatePorduct(){

    var product = {
        name : productName.value ,
        price : Number(productPrice.value) ,
        category : productCategory.value ,
        desc : productDesc.value ,
    };

    allProduct[mainIndex]=product

    localStorage.setItem("All Product",JSON.stringify(allProduct));
    button.innerHTML = "Add Product";
}




//serch
function serch(term){

    var content = ``
for(var i = 0 ; i<allProduct.length ; i++){

    if (allProduct[i].name.toLowerCase().includes(term.toLowerCase()) == true){
        content += `<tr>
        <td>${i+1}</td>
        <td>${allProduct[i].name}</td>
        <td>${allProduct[i].price}</td>
        <td>${allProduct[i].category}</td>
        <td>${allProduct[i].desc}</td>
        <td><button onclick="getProudectInfo(${i})" class="btn btn-warning">Uptade</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
        </tr>
        `
    }
}
document.getElementById("tableBody").innerHTML=content
}


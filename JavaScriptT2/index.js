// function main(){
//    let mylist=document.getElementById("mylist");
//    let count=Number(prompt("Enter list count : "));
//     let content="";
//     let style=" style='color:rgb(";
//     let number=100;
//     for (let index = 1; index <=count; index++) {
//         content+="<li";
//         content+=style;
//         content+=number+",0,0)'>"
//         content+=index;
//         content+="</li>";  
//         number+=10;     
//     }
//     mylist.innerHTML=content;
// }


// function main(){
//    let mylist=document.getElementById("mylist");
//    let count=Number(prompt("Enter list count : "));
//     let content="";
//     let style=" style='color:rgb(";
//     let number=100;
//     for (let index = 1; index <=count; index++) {
//         content+="<li";
//         content+=style;
//         content+=number+",0,0)'>"
//         content+=index;
//         content+="</li>";  
//         number+=10;     
//     }
//     mylist.innerHTML=content;
// }

var maxnumberr = 0;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let mytitle = document.getElementById("mytitle");
var count = 0;
function show(id) {
    tablee = document.getElementById("mytable")
    ++count;
    let myTableData = document.getElementById(id);
    myTableData.classList.add("MyAnime");
    mytitle.innerHTML = myTableData.innerHTML;
    if (count <= 3) {

        if (myTableData.innerHTML == maxnumberr) {
            mytitle.innerHTML = "win"
            myTableData.style.color = "black";
        }
        else {
            mytitle.innerHTML = "false";
        }
        
    }
    else {
        console.log(count);
        count=0;
        mytitle.innerHTML = "You Lost"
        let id = 1;
        let myList = [];
        for (let i = 0; i < 5; i++) {
            var sub = [];
            for (let k = 0; k < 5; k++) {
                const number = getRandomInt(100);
                sub.push(number);
            }
            myList.push(sub);
        }
        console.log(myList);
        var max = myList.reduce(function (final, current) {
            for (var i = 0; i < final.length; ++i) {
                if (current[i] > final[i]) {
                    final[i] = current[i];
                }
            }
            return final;
        });
        let maxn = Math.max.apply(null, max);
        console.log(maxn);
        maxnumberr = maxn;

        let content = "";
        for (let i = 0; i < myList.length; i++) {
            content += "<tr >";
            for (let k = 0; k < myList.length; k++) {
                content += "<td id='";
                content += (id);
                content += "' onclick='show(id)' >";
                content += myList[i][k];
                content += "</td>";
                id++;
            }
            content += "</tr>";
        }

        let mytable = document.getElementById("mytable");
        mytable.innerHTML = content;
    }
    var tds = tablee.getElementsByTagName("td");

    for (var i = 0; i < mytable.length; i++) {
        for (let k = 0; k < array.length; k++) {
            
            tds[i][k].style.color = "red";
            
        }
    }



}
function maxnumber(arr) {
    var w_max = Math.max.apply(Math, arr);
}
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// function deleteFruit(){
//     fruits.pop();
//     document.getElementById("mytitle").innerHTML = fruits.toString();
// }
function main() {
    // let mytable=document.getElementById("mytable");
    // let id=1;
    // let content="";
    // for (let i = 0; i < 3; i++) {
    //    content+="<tr>";
    //    for (let k = 0; k < 3; k++) {
    //         content+="<td id='";
    //         content+=id;
    //         content+="' onclick='show(id)' >";
    //         content+=getRandomInt(100);
    //         content+="</td>";
    //         id++;
    //    }
    //    content+="</tr>";
    // }
    // mytable.innerHTML=content;
    // alert(content);
    let id = 1;
    let myList = [];
    for (let i = 0; i < 5; i++) {
        var sub = [];
        for (let k = 0; k < 5; k++) {
            const number = getRandomInt(100);
            sub.push(number);
        }
        myList.push(sub);
    }
    console.log(myList);
    var max = myList.reduce(function (final, current) {
        for (var i = 0; i < final.length; ++i) {
            if (current[i] > final[i]) {
                final[i] = current[i];
            }
        }
        return final;
    });
    let maxn = Math.max.apply(null, max);
    console.log(maxn);
    maxnumberr = maxn;

    let content = "";
    for (let i = 0; i < myList.length; i++) {
        content += "<tr>";
        for (let k = 0; k < myList.length; k++) {
            content += "<td id='";
            content += (id);
            content += "' onclick='show(id)' >";
            content += myList[i][k];
            content += "</td>";
            id++;
        }
        content += "</tr>";
    }

    let mytable = document.getElementById("mytable");
    mytable.innerHTML = content;
}





main();
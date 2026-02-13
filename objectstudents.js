const students=[
    {id:1,name:"user1",gender:"female",marks:[74,86,68,76,45]},
    {id:2,name:"user2",gender:"male",marks:[36,56,75,38,66]},
    {id:3,name:"user3",gender:"female",marks:[66,54,76,67,44]},
    {id:4,name:"user4",gender:"male",marks:[45,67,36,54,63]},
    {id:5,name:"user5",gender:"male",marks:[46,78,43,67,43]},
    {id:6,name:"user6",gender:"female",marks:[84,65,67,45,87]},
    {id:7,name:"user7",gender:"male",marks:[98,65,67,98,65]},
    {id:8,name:"user8",gender:"female",marks:[97,99,98,99,71]},
    {id:9,name:"user9",gender:"female",marks:[98,87,96,87,96]},
    {id:10,name:"user10",gender:"male",marks:[45,66,78,48,87]},
];

for(let i=0;i<students.length;i++){
    let total=0
    let isfail=false;
    for(let j=0;j<students[i].marks.length;j++){
         if(students[i].marks[j]<35){
            isfail=true
        }
        total += students[i].marks[j];
    }
        if(isfail){
            students[i].grade='fail'
         }
                                                    else{
        percentage=(total/(students[i].marks.length*100))*100
        average=(total/students[i].marks.length)
        students[i].percentage=percentage
        students[i].average=average
    } 
    if (students[i].grade !== 'fail') {
     if (percentage >= 90) {
            students[i].grade = 'A';
        } else if (percentage >= 80) {
            students[i].grade = 'B';
        } else if (percentage >= 70) {
            students[i].grade = 'C';
        } else if (percentage >= 60) {
            students[i].grade = 'D';
        } else if (percentage >= 50) {
            students[i].grade = 'E';
        } else if (percentage >= 35) {
            students[i].grade = 'F';
        }
    } 
    students[i].total=total;
    let rank;
    for(let i=0;i<students.length;i++){
    if(students[i].grade ==='fail'){
           rank=null;
          students[i].rank=rank;
    }
    else if(students[i].grade !=='fail'){
        rank=1
        for(let j=0;j<students.length;j++){
            if( students[j].total>students[i].total){
                let same=false
                for(let k=0;k<j;k++){
                    if(students[k].total===students[j].total){
                        same=true
                    }
                }
                if(!same){
                    rank++
                }            
            }
            students[i].rank=rank;
    }
}}}
console.log(students);














// let totals = [];
// for(let i=0;i<students.length;i++){
    
//     if(students[i].grade !== 'fail'){
//         let same = false;
//         for(let k=0;k<totals.length;k++){
//             if(totals[k] === students[i].total){
//                 same = true;
//             }
//         }
//         if(!same){
//             totals.push(students[i].total);
//         }
//     }
// }
// for(let i=0;i<totals.length;i++){
//     for(let j=i+1;j<totals.length;j++){
//         if(totals[i]<totals[j]){
//             let temp = totals[i];
//             totals[i] = totals[j];
//             totals[j] = temp;
//         }
//     }
// }
// for(let i=0;i<students.length;i++){
//     if(students[i].grade === 'fail'){
//         students[i].rank = null;
//     } else {
//         for(let j=0;j<totals.length;j++){
//             if(students[i].total === totals[j]){
//                 students[i].rank = j+1;
//             }
//         }
//     }
// }
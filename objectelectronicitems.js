const electronicItems=[
    {id: 1,category: 'mobile',brandname: 'vivo',model: 'y33s',price: '19000'},
    {id: 2,category: 'mobile',brandname: 'iphone',model: '16 promax',price: '110000'},
    {id: 3,category: 'tv',brandname: 'samsung',model: 'audx7000',price: '45000'},
    {id: 4,category: 'mobile',brandname: 'redmi',model: 'note 10',price: '15000'},
    {id: 5,category: 'tv',brandname: 'redmi',model: 'oledpro',price: '50000'},
    {id: 6,category: 'tv',brandname: 'panasonic',model: 'led5000dux',price: '65000'},
    {id: 7,category: 'washing-machine',brandname: 'whirlpool',model: 'wtw500wtg',price: '25000'},
    {id: 8,category: 'tv',brandname: 'sony',model: 'bravia',price: '85000'},
    {id: 9,category: 'washing-machine',brandname: 'LG',model: 'automatic300rtx',price: '30000'},
    {id: 10,category: 'washing-machine',brandname: 'bosh',model: 'xsg7595d',price: '45000'},
    {id: 11,category: 'ac',brandname: 'voltas',model: 'zn900',price: '55000'},
    {id: 12,category: 'tv',brandname: 'voltas',model: '900',price: '50000'},
];
let output={};
for(let i=0;i<electronicItems.length;i++){
             if(!output[electronicItems[i].category]){
                output[electronicItems[i].category]=[];
            } 
            output[electronicItems[i].category].push(electronicItems[i]);
        }

for(let k=0;k<electronicItems.length;k++){
    let items= electronicItems[k];
    let price=electronicItems[k].price;
    let discount=0;
    let Gst=0;
    let totalpaid=0;

    if(price<20000){
          discount=2000
          totalpaid=price-discount
    }
    else if(price>=20000 && price<40000){
          discount=(price*20/100)
           Gst=(price-discount)*10/100
          totalpaid=(price-discount)+Gst
          
     }
     else if(price>=40000 && price<80000){
            discount=(price*10/100)
           Gst=(price-discount)*18/100
           totalpaid=(price-discount)+Gst
     } 
     else if(price>=80000){
           discount=(price*5/100)
           totalpaid=(price-discount)
     }
    items.discount = discount;
    items.Gst = Gst;
    items.totalpaid = totalpaid
}
    console.log(output)


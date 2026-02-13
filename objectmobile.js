let mobiles = [{ "id": 1, "brand": "micromax", "price": 10000, "name": "in note1", "color": "red" },
{ "id": 2, "brand": "micromax", "price": 22000, "name": "in 1", "color": "pink" },
{ "id": 3, "brand": "micromax", "price": 13000, "name": "in 2 b", "color": "yellow" },
{ "id": 4, "brand": "micromax", "price": 14000, "name": "in note2", "color": "black" },
{ "id": 5, "brand": "micromax", "price": 15000, "name": "in note3", "color": "green" },
{ "id": 6, "brand": "nokia", "price": 12900, "name": "nokia c30", "color": "white" },
{ "id": 7, "brand": "nokia", "price": 13890, "name": "nokia xr20", "color": "grey" },
{ "id": 8, "brand": "nokia", "price": 20000, "name": "nokia c01", "color": "blue" },
{ "id": 9, "brand": "nokia", "price": 21000, "name": "g 10", "color": "brown" },
{ "id": 11, "brand": "oppo", "price": 23000, "name": "oppo a33", "color": "navy" },
{ "id": 12, "brand": "oppo", "price": 23700, "name": "a 15", "color": "aqua" },
{ "id": 10, "brand": "nokia", "price": 22000, "name": "g 20", "color": "golden" },
{ "id": 13, "brand": "oppo", "price": 24000, "name": "reno 7", "color": "wheat" },
{ "id": 14, "brand": "oppo", "price": 27000, "name": "A12", "color": "lime" },
{ "id": 15, "brand": "oppo", "price": 20000, "name": "A13", "color": "orange" }]

for(let i=0;i<mobiles.length;i++){
    let discount=0
    let discountprice=0
    if(mobiles[i].brand !=='oppo' && mobiles[i].price > 20000){
          discount=(mobiles[i].price*10/100)
          mobiles[i].discountprice=mobiles[i].price-discount
    } 
    else if(mobiles[i].brand ==='oppo' && mobiles[i].price > 20000){
        discount=(mobiles[i].price*15/100)
        mobiles[i].discountprice=mobiles[i].price-discount
    }
    
}
    console.log(mobiles);
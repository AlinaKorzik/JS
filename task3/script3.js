const elementStar = `*`;

const elementLine = `_`;

let christmasTreeLevel = ``;

confirm (`Do you want some Christmas Magic?`);

for (let i = 1; i < 20; i++) {

    if (i % 2 == 1) {
    
        christmasTreeLevel = elementStar + christmasTreeLevel

        console.log (christmasTreeLevel)
    } else {

        christmasTreeLevel = elementLine + christmasTreeLevel

        console.log (christmasTreeLevel)
    }
}
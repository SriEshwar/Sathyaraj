const butn=document.querySelector('button')
let createElement=document.createElement('div')
    createElement.id='result'
    document.getElementById('wrapper').appendChild(createElement)

//event listener
butn.addEventListener('click',displayStats)

function displayStats(){
    const input=document.getElementById('input')
    const city=input.options[input.selectedIndex].value
    console.log(city)
    let text;
    switch (city) {
        case 'Banglore':
            text='Bangalore officially Bengaluru is the capital and largest city of the southern Indian state of Karnataka'
            break;
    
        case 'Chennai':
            text='Chennai formerly known as Madras, is the capital city of Tamil Nadu, the southernmost state of India.'
            break;
        case 'Coimbatore':
            text='Coimbatore is the second largest city in Tamil Nadu after Chennai in terms of population and the 16th largest urban agglomeration in India'
            break;
    }
    document.getElementById('result').innerHTML=text
}
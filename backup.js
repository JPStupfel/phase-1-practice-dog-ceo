
document.addEventListener('DOMContentLoaded',()=>{handleImageUrls();handleBreedUrls();handleDropDown()} )




function handleImageUrls(){

console.log('%c HI', 'color: firebrick')

//perform the fetch
 fetch('https://dog.ceo/api/breeds/image/random/4')
.then(res=>res.json())
.then(data => {  postImages(data['message']) })



//take url, append image with that url as src to dom
function createImages(url){
   const image = document.createElement('img')
   image.src = url
    document.querySelector('#dog-image-container').appendChild(image)
}

//take an array of urls and run create images on them
function postImages(array){
    for (i in array){createImages(array[i])}
}


}

function handleBreedUrls(){

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch('https://dog.ceo/api/breeds/list/all')
.then(res=>res.json())
.then(data => { parseBreeds( data['message']) })


function parseBreeds(obj){
       let array = Object.keys(obj);
        for (i of array){
            let element = document.createElement('li');
            element.textContent = i;
            element.addEventListener('click',changeColor)
            document.querySelector('#dog-breeds').appendChild(element)}
        }
function changeColor(element){
    var randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
    console.log(randomColor)
    element.target.style.color = randomColor}

//ready to start challenge 4

}

function handleDropDown(){
    const dropDown = document.querySelector('#breed-dropdown')
    
    function filter(letter){

        const origUl = document.querySelector('#dog-breeds').children
        const ul = [...origUl]
        for (let i = 0; i <= (ul.length-1); i++ ) {
           if (ul[i].textContent[0] !== letter){
               document.querySelector('#dog-breeds').removeChild(ul[i]) ; console.log(i)
        }
        }
       return origUl
    }
    

    dropDown.addEventListener('change', (event)=> filter(event.target.value)  )
}




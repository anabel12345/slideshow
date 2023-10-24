//create object to handle slideshow
export function slideShow(){
    let containerNode, slidesArr, index=0;

    //increment index
    function increment(){
        //check if slides array is empty
        if(slidesArr==null){
            return;
        }

        if(index==slidesArr.length-1){
            index=0;
        }else{
            index++;
        }
    }

    //decrement index
    function decrement(){
        //check if slides array is empty
        if(slidesArr==null){
            return;
        }

        if(index==0){
            index=slidesArr.length-1;
        }else{
            index--;
        }
    }


    //loops through the slides and sets display to none, then sets the display of specified slide to block
    function displaySlide(){
        if(slidesArr==null){
            return;
        }
        for(let j=0;j<slidesArr.length;j++){
            slidesArr[j].style.display='none';
        }
        slidesArr[index].style.display='block';
    }


    //creates slideshow, appends slides to container
    function initSlideShow(container, slidesArray, interval){
        //set variables
        containerNode = container;
        slidesArr=slidesArray;

        //append slides to container
        for(let i = 0;i<slidesArr.length;i++){
            containerNode.appendChild(slidesArr[i]);
        }

        //at every interval (specified by the parameter), index will increment and then display the corresponding slide
        setInterval(function(){
            increment();
            displaySlide();
        }, interval)

        //displays the first slide
        window.onload=displaySlide

    }

    return initSlideShow;
}
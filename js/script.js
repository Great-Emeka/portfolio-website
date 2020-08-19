
//Portfolio Item Filter

const filterContainer = document.querySelector(".portfolio-filter");
const filterBtns = filterContainer.children;
const totalFilterBtn = filterBtns.length;
const portfolioItems = document.querySelectorAll(".portfolio-item");
const totalPortfolioItem = portfolioItems.length;

    for (let i = 0; i < totalFilterBtn; i++) {
        filterBtns[i].addEventListener("click",function(){
        //when clicked, remove the initial active class
        filterContainer.querySelector(".active").classList.remove("active");
        //then add active to currently clicked
        this.classList.add("active"); //NB: this here is same as filterBtns[i]
        
        const filterValue = this.getAttribute("data-filter");
        for (let f = 0; f < totalPortfolioItem; f++) {
            if(filterValue === portfolioItems[f].getAttribute("data-category")){
                portfolioItems[f].classList.remove("hide");
                portfolioItems[f].classList.add("show");
            }
            else{
                portfolioItems[f].classList.remove("show");
                portfolioItems[f].classList.add("hide");
            }
            if(filterValue === 'all'){
                portfolioItems[f].classList.remove("hide");
                portfolioItems[f].classList.add("show");
            };
        }
    });

};


//Portfolio LightBox
const lightbox = document.querySelector(".lightbox"),
      lightboxImg = lightbox.querySelector(".lightbox-img"),
      lightboxText = lightbox.querySelector(".caption-text")
      lightboxCounter = lightbox.querySelector(".lightbox-counter");
let itemIndex = 0;

for(let i=0; i<totalPortfolioItem; i++){
    portfolioItems[i].addEventListener("click",function(){
        itemIndex = i;
        changeItem();
        toggleLightbox();
    })
}

const toggleLightbox = () =>{
    lightbox.classList.toggle("open");
}

const changeItem = () =>{
    imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex +1) + " of " + totalPortfolioItem;
};


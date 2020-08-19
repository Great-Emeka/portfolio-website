
//Portfolio Item Filter

const filterContainer = document.querySelector(".portfolio-filter"),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      portfolioItems = document.querySelectorAll(".portfolio-item");
      totalPortfolioItem = portfolioItems.length;

      for (let i = 0; i < totalFilterBtn; i++) {
          filterBtns[i].addEventListener("click",function(){
            //when clicked, remove the initial active class
            filterContainer.querySelector(".active").classList.remove("active");
            //then add active to currently clicked
            this.classList.add("active"); //NB: this here is same as filterBtns[i]
            
            const filterValue = this.getAttribute("data-filter");
            for (let k=0; k<totalPortfolioItem.length; k++) {
                if(filterValue === portfolioItems[f].getAttribute("data-category")){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
                else{
                    portfolioItems[k].classList.remove("show");
                    portfolioItems[k].classList.add("hide");
                }
                
            }
        
        });

      }
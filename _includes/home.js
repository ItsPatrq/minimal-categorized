(function() {
    const flexLarger = "0 55%";
    const flexSmaller =  "0 45%";

    const getMouseEnterEvent = (hoverCategory, secoundCategory) => () => {
        hoverCategory.style.flex = flexLarger;
        secoundCategory.style.flex = flexSmaller;
    };

    const getMouseLeaveEvent = (leavingCategory, secoundCategory) => () => {
        leavingCategory.style.flex = "";
        secoundCategory.style.flex = "";
    };

    const attachEvents = (listeningCategory, secoundCategory) => {
        listeningCategory.addEventListener("mouseenter", getMouseEnterEvent(listeningCategory, secoundCategory));
        listeningCategory.addEventListener("mouseleave", getMouseLeaveEvent(listeningCategory, secoundCategory));
    }

    window.addEventListener("load", () => {
        const categoryDivs = document.getElementsByClassName("category-container");
        if(categoryDivs.length !== 2) {
            return;
        }
        const category1 = categoryDivs[0];
        const category2 = categoryDivs[1];
        
        attachEvents(category1, category2);
        attachEvents(category2, category1);
    });
})();
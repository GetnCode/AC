onSearchButtonClick();
onMenuButtonClick();

function onSearchButtonClick(){
    var searchButtonClose = document.querySelector(".close-search");
    var searchButtonOpen = document.querySelector(".open-search");
    var searchDialog = document.querySelector(".dialog-search");

    searchButtonClose.style.display = "none";
    searchDialog.style.display = "none";

    searchButtonOpen.addEventListener("click", function(event){
        searchDialog.style.display = "flex";
        searchButtonOpen.style.display = "none";
        searchButtonClose.style.display = "inline-block";
        document.body.style.overflowY = "hidden";
    });

    searchButtonClose.addEventListener("click", function(event){
        searchDialog.style.display = "none";
        searchButtonOpen.style.display = "inline-block";
        searchButtonClose.style.display = "none";
        document.body.style.overflowY = "";
    });
}

function onMenuButtonClick(){
    var searchButtonClose = document.querySelector(".btn-menu-close");
    var searchButtonOpen = document.querySelector(".btn-menu-open");
    var searchDialog = document.querySelector(".drawer");

    searchButtonClose.style.display = "none";


    searchButtonOpen.addEventListener("click", function(event){
        searchDialog.style.visibility = "visible";
        searchDialog.style.opacity = "1";
        searchButtonOpen.style.display = "none";
        searchButtonClose.style.display = "inline-block";
        document.body.style.overflowY = "hidden";
    });

    searchButtonClose.addEventListener("click", function(event){
        searchDialog.style.visibility = "hidden";
        searchDialog.style.opacity = "0";
        searchButtonOpen.style.display = "inline-block";
        searchButtonClose.style.display = "none";
        document.body.style.overflowY = "";
    });
}

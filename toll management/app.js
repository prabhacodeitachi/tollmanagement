//homepage search//

var searchBox = document.getElementById("searchBox");
searchBox.addEventListener("keyup", function(){
    var keyword = this.value;
    keyword = keyword.toUpperCase();
        var tablesearch = document.getElementById("tablesearch");
        var all_tr = tablesearch.getElementsByTagName("tr");
        for(var i=0; i<all_tr.length; i++){
            var name_column = all_tr[i].getElementsByTagName("td")[1];
            if(name_column){
                var name_value = name_column.textContent || name_column.innerText;
                name_value = name_value.toUpperCase();
                if(name_value.indexOf(keyword) > -1){
                    all_tr[i].style.display = ""; // show
                }else{
                    all_tr[i].style.display = "none"; // hide
                }
            }
        }
});






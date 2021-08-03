let acc = document.getElementsByClassName("accordion");
let panels = Array.from(document.querySelectorAll('.panel'))
let i;

for (i = 0; i < acc.length; i++) {
    panels[0].style.maxHeight = panels[0].scrollHeight + "px";
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}


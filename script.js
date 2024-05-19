//setup 
var font = document.createElement("style");
font.textContent = "@import url('https://fonts.googleapis.com/css2?family=Titan+One&display=swap');";
document.head.appendChild(font)

var font2 = document.createElement("style");
font2.textContent = "@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');";
document.head.appendChild(font2);


 function animateToPosition(element, targetX, targetY, duration) {
     const startX = parseFloat(element.style.left);
     const startY = parseFloat(element.style.top);
     const deltaX = targetX - startX;
     const deltaY = targetY - startY;
     const startTime = performance.now();

     function update(currentTime) {
         const elapsedTime = currentTime - startTime;
         const progress = Math.min(elapsedTime / duration, 1);

         element.style.left = startX + deltaX * progress + 'px';
         element.style.top = startY + deltaY * progress + 'px';

         if (progress < 1) {
             requestAnimationFrame(update);
         }
     }

     requestAnimationFrame(update);
 }


function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}




document.body.style.backgroundColor = "#0bc2cf";

var popup = document.createElement("div");
popup.style.width = "200px";
popup.style.height = "30px";
popup.style.backgroundColor = "#111111";
popup.style.position = "absolute";
popup.style.top = "900px";
popup.style.left = "90px";
popup.style.borderRadius = "10px";
popup.style.display = "none";
popup.style.zIndex = "1";
popup.style.opacity = ".9";
popup.style.fontFamily = "Nunito";
popup.style.fontSize = "20px";
popup.style.color = "#45ab29";
popup.style.textAlign = "center";
popup.innerHTML = "Copied Successfully";
document.body.appendChild(popup);



var Title = document.createElement("p");
Title.innerHTML = "Blooket Hacks";
Title.style.fontFamily = "Titan One";
Title.style.fontSize = "40px";
Title.style.color = "white";
Title.style.position = "absolute";
Title.style.top = "-10px";
document.body.appendChild(Title);

var guiB = document.createElement("button");
guiB.innerHTML = "Gui";
guiB.style.fontFamily = "Nunito";
guiB.style.fontSize = "20px";
guiB.style.color = "white";
guiB.style.backgroundColor = "#9350a0";
guiB.style.border = "none";
guiB.style.borderRadius = "10px";
guiB.style.position = "absolute";
guiB.style.left = "10px";
guiB.style.top = "100px";
document.body.appendChild(guiB);
guiB.addEventListener("click", function() {
    popup.style.display = "block";
    animateToPosition(popup, 90, 530, 300);
    wait(2000).then(() => {
        animateToPosition(popup, 90, 900, 300); 
        wait(300).then(() => {
            popup.style.display = "none";
          
        });
    });
});

var mGuiB = document.createElement("button");
mGuiB.innerHTML = "Mobile Gui";
mGuiB.style.fontFamily = "Nunito";
mGuiB.style.fontSize = "20px";
mGuiB.style.color = "white";
mGuiB.style.backgroundColor = "#9350a0";
mGuiB.style.border = "none";
mGuiB.style.borderRadius = "10px";
mGuiB.style.position = "absolute";
mGuiB.style.left = "100px";
mGuiB.style.top = "100px";
document.body.appendChild(mGuiB);
mGuiB.addEventListener("click", function() {
  popup.style.color = "orange";
  popup.innerHTML = "Under Construction";
    popup.style.display = "block";
    animateToPosition(popup, 90, 530, 300);
    wait(2000).then(() => {
        animateToPosition(popup, 90, 900, 300); 
        wait(300).then(() => {
            popup.style.display = "none";
            popup.style.color = "#45ab29";
            popup.innerHTML = "Copied Successfully";

        });
    });

});


var ext = document.createElement("button");
ext.innerHTML = "Extension";
ext.style.fontFamily = "Nunito";
ext.style.fontSize = "20px";
ext.style.color = "white";
ext.style.backgroundColor = "#9350a0";
ext.style.border = "none";
ext.style.borderRadius = "10px";
ext.style.position = "absolute";
ext.style.left = "250px";
ext.style.top = "100px";
document.body.appendChild(ext);
ext.addEventListener("click", function() {
  popup.style.color = "orange";
  popup.innerHTML = "Under Construction";
    popup.style.display = "block";
    animateToPosition(popup, 90, 530, 300);
    wait(2000).then(() => {
        animateToPosition(popup, 90, 900, 300); 
        wait(300).then(() => {
            popup.style.display = "none";
            popup.style.color = "#45ab29";
            popup.innerHTML = "Copied Successfully";

        });
    });

});





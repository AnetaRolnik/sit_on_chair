document.addEventListener("DOMContentLoaded", function(){

    var sum = document.querySelector(".sum strong");
    var totalPrice = 0;
    var counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;
    var listArrow = document.querySelectorAll(".list_arrow");


    for (var i=0; i<listArrow.length; i++) {

        listArrow[i].addEventListener("click", function(){
            var listPanel = this.nextElementSibling;
            var listLabel = this.previousElementSibling;

            if (listPanel.style.display != "block") {
                listPanel.style.display = "block";
                var listPanelElements = listPanel.querySelectorAll("li");

                for (var j=0; j<listPanelElements.length; j++) {
                    sum.innerText = totalPrice;
                    listPanelElements[j].addEventListener("click", function(){
                        listLabel.innerText = this.innerText;
                        listLabel.style.color = "#24BAA0";
                        listPanel.style.display = "none";

                        var panelLeft = document.querySelector(".panel_left").children;
                        var panelRight = document.querySelector(".panel_right").children;

                        if (listLabel.className.indexOf("first_label")!=-1) {

                            if (counter1>0) {
                              totalPrice-=parseInt(panelRight[0].innerText);
                            }

                            panelLeft[0].innerText = listLabel.innerText;
                            var chairVal = this.dataset.price;
                            panelRight[0].innerText = chairVal;

                            totalPrice += parseInt(chairVal);
                            sum.innerText = totalPrice;
                            counter1++;

                        } else if (listLabel.className.indexOf("second_label")!=-1) {

                            if (counter2>0) {
                              totalPrice-=parseInt(panelRight[1].innerText);
                            }

                            panelLeft[1].innerText = listLabel.innerText;
                            var colorVal = this.dataset.price;
                            panelRight[1].innerText = colorVal;

                            totalPrice += parseInt(colorVal);
                            sum.innerText = totalPrice;
                            counter2++;

                        } else {

                            if (counter3>0) {
                              totalPrice-=parseInt(panelRight[2].innerText);
                            }

                            panelLeft[2].innerText = listLabel.innerText;
                            var materialVal = this.dataset.price;
                            panelRight[2].innerText = materialVal;

                            totalPrice += parseInt(materialVal);
                            sum.innerText = totalPrice;
                            counter3++;
                        }

                    })
                }


            } else {
                listPanel.style.display = "none";
                totalPrice = 0;
                sum.innerText = 0;
            }

        })
    }


    var checkTransport = document.querySelector("#transport");
    var transport = document.querySelector(".panel_left").querySelector(".transport");
    var transportPrice = document.querySelector(".panel_right").querySelector(".transport");

    checkTransport.addEventListener("click", function() {
        var transportVal = checkTransport.dataset.price;

        if (checkTransport.checked === true) {
            transport.innerText = "Transport";
            transportPrice.innerText = transportVal;
            totalPrice += parseInt(transportVal);
            sum.innerText = totalPrice;

        } else {
            transport.innerText = " ";
            transportPrice.innerText = " ";
            totalPrice -= parseInt(transportVal);
            sum.innerText = totalPrice;
        }

    })





})

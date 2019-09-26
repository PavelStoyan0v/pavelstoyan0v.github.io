$(() => {

    let letters = $(".animate").text().split("");
    var lettersCount = letters.length;
    for (let i = 0; i < letters.length; i++) {
        letters[i] = `<span class="letter">${letters[i]}</span>`;
    }

    $(".animate").html(letters.join(""));

    let letterIndexes = [];
    for (let i = 0; i < lettersCount; i++) {
        letterIndexes.push(i);
    }
    let intervalId = setInterval(() => {
        if (letterIndexes.length < 1) {
            clearInterval(intervalId);
        }
        let random = Math.floor(Math.random() * letterIndexes.length);
        $(".letter").eq(letterIndexes[random]).css("opacity", "1");
        letterIndexes.splice(random, 1);
    }, 20);


    //smooth scrolling
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $(".navigation").css("font-size", "0.8em");
        } else {
            $(".navigation").css("font-size", "1em");
        }
    }



    function showDescription(id) {
        $(`#${id}.course-description`).css({
            "opacity": "0",
            "display": "flex"
        }).animate({
            "opacity": "1"
        }, 200);
    }

    $(".course").click((elm) => {
        let id = $(elm.target).attr("id");
        $(".course-description").hide();
        showDescription(id);
        $(".course").removeClass("active");
        $(elm.target).addClass("active");
    });
});
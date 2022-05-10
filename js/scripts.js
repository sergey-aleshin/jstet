(function () {
    const canvasId = "canvas";

    window.addEventListener("load", init);

    function init () {
        let options = getInitialOptions();

        createCanvas(options);

        initHandlers();
    }

    function initHandlers () {
        window.addEventListener("keyup", function (ev) {
            if (ev.altKey || ev.ctrlKey || ev.shiftKey)
                return;
            console.log(ev);
        });
    }

    function getCanvas () {
        return document.getElementById(canvasId);
    }

    function createCanvas (options) {
        var oldCanvas = getCanvas();

        if (oldCanvas) {
            oldCanvas.remove();
        }

        let canvas = document.createElement("canvas");
        canvas.id = canvasId;
        canvas.width = options.width;
        canvas.height = options.height;

        document.body.append(canvas);
    }

    function getInitialOptions () {
        let options = {
            width: window.visualViewport.width - 0,
            height: window.visualViewport.height - 4
        };

        return options;
    }
})();
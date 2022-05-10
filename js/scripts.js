(function () {
    const canvasId = "canvas";

    window.addEventListener("load", init);

    function init () {
        createCanvas(getInitialOptions());

        initHandlers();
    }

    function initHandlers () {
        console.log("setting up handlers...");
        window.addEventListener("keyup", function (ev) {
            if (ev.altKey || ev.ctrlKey || ev.shiftKey || ev.metaKey)
                return;

            if (ev.key == 'r') {
                createCanvas(getInitialOptions());
                return;
            }
        });
    }

    function getCanvas () {
        return document.getElementById(canvasId);
    }

    function createCanvas (options) {
        var oldCanvas = getCanvas();

        if (oldCanvas) {
            console.log("Removing old canvas...");
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
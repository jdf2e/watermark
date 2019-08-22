(function () {
    const setWatermark = () => {
        if (document.getElementById(window.pageConfig.watermarkId) !== null) {
            document.body.removeChild(document.getElementById(window.pageConfig.watermarkId));
        }

        const can = document.createElement("canvas");
        can.width = window.pageConfig.canvasWidth;
        can.height = window.pageConfig.canvasHeight;

        const cans = can.getContext("2d");
        cans.rotate((-20 * Math.PI) / 180);
        cans.font = window.pageConfig.contextFont;
        cans.fillStyle = window.pageConfig.contextColor;
        cans.textAlign = window.pageConfig.contextAlign;
        cans.textBaseline = window.pageConfig.contextBaseline;
        cans.fillText(window.pageConfig.message, can.width / 3, can.height / 2);

        const div = document.createElement("div");
        div.style.pointerEvents = "none";
        div.style.top = "0px";
        div.style.left = "0px";
        div.style.position = "fixed";
        div.style.zIndex = "100000";
        div.style.width = document.documentElement.clientWidth + "px";
        div.style.height = document.documentElement.clientHeight + "px";
        div.style.background =
            "url(" + can.toDataURL("image/png") + ") left top repeat";
        document.body.appendChild(div);
    };
    setWatermark()
})()

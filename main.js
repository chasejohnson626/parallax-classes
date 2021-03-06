// prevent overflow x axis (no white bars on the edges
document.documentElement.style.overflowX = "hidden";
document.getElementsByTagName("BODY")[0].style.overflowX = "hidden";

var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

if (isMobile == false){
    var styles = `
        .parx{
            will-change: transform, opacity;
        }
    `

    var styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)

    // get all elements with "parx" class
    var parx = document.getElementsByClassName('parx');

    var parxArgs = [];
    for (let i = 0; i < parx.length; i++){
        // get the class with arguments
        var parxClasses = parx[i].className.split(' ');
        var theClass = parxClasses.filter((parxClass) => parxClass.startsWith("parxa"));
        theClass = theClass[0];
        
        // separate the args
        var classArgs = theClass.split('|');
        // for each parx element, create an object with its args
        // these are the main arguments for parx
        parxArgs[i] = {};
        parxArgs[i].mode = classArgs[1];
        parxArgs[i].triggerHeight = parseFloat(classArgs[2]);
        parxArgs[i].duration = parseFloat(classArgs[3]);
        
        // optional parent trigger
        if (parxClasses.includes('parxptrig')){
            parxArgs[i].ptrig = true;
        } else {
            parxArgs[i].ptrig = false;
        }

        var easeClass = parxClasses.filter((parxClass) => parxClass.startsWith("parxease"));
        if (easeClass.length > 0){
            var easeClassArgs = easeClass[0].split('|');
            parxArgs[i].ease = easeClassArgs[1] + '.' + easeClassArgs[2];
        } else {
            parxArgs[i].ease = 'none';
        }

        // optional grow size
        var slideClass = parxClasses.filter((parxClass) => parxClass.startsWith("parxslide"));
        if (slideClass.length > 0){
            // change args if slideClass exists
            var slideClassArgs = slideClass[0].split('|');
            parxArgs[i].x = parseFloat(slideClassArgs[1]);
            parxArgs[i].y = parseFloat(slideClassArgs[2]);
        } else {
            parxArgs[i].x = 0;
            parxArgs[i].y = 0;
        }

        // optional fade class
        if (parxClasses.includes('parxfade')){
            parxArgs[i].fade = 0;
        } else {
            parxArgs[i].fade = 1;
        }

        // optional size class
        var sizeClass = parxClasses.filter((parxClass) => parxClass.startsWith("parxsize"));
        if (sizeClass.length > 0)
        {
            // change args if sizeClass exists
            var sizeClassArgs = sizeClass[0].split('|');
            parxArgs[i].scaleX = parseFloat(sizeClassArgs[1]);
            parxArgs[i].scaleY = parseFloat(sizeClassArgs[2]);
        } else {
            parxArgs[i].scaleX = 1;
            parxArgs[i].scaleY = 1;
        }

        var rotateClass = parxClasses.filter((parxClass) => parxClass.startsWith("parxrotate"));
        if (rotateClass.length > 0)
        {
            // change args if rotateClass exists
            var rotateClassArgs = rotateClass[0].split('|');
            parxArgs[i].rotate = parseFloat(rotateClassArgs[1]);
        } else {
            parxArgs[i].rotate = 0;
        }

        var originClass = parxClasses.filter((parxClass) => parxClass.startsWith("parxorigin"));
        if (originClass.length > 0)
        {
            // change args if originClass exists
            var originClassArgs = originClass[0].split('|');
            parxArgs[i].originX = parseFloat(originClassArgs[1]);
            parxArgs[i].originY = parseFloat(originClassArgs[2]);
        } else {
            parxArgs[i].originX = 50;
            parxArgs[i].originY = 50;
        }
    }

    // create a controller for the page
    var controller = new ScrollMagic.Controller();
    
    for (let i = 0; i < parx.length; i++){
        // if scale is being changed then edit the transformation origin
        parx[i].style.transformOrigin = `${parxArgs[i].originX}% ${parxArgs[i].originY}%`;
        // matrix to go to/from
        let tweenArgs = {transform: `translate3d(${parxArgs[i].x}px, ${parxArgs[i].y}px, 0) scale3d(${parxArgs[i].scaleX}, ${parxArgs[i].scaleY}, 0) rotateZ(${parxArgs[i].rotate}deg)`, ease: `${parxArgs[i].ease}`, opacity: parxArgs[i].fade}
        // set the tween with the matrix
        let tween = null;
        if (parxArgs[i].mode == 'from'){
            tween = TweenMax.from(parx[i], tweenArgs);
        } else if (parxArgs[i].mode == 'to'){
            tween = TweenMax.to(parx[i], tweenArgs);
        }

        let triggerNode = null;
        //create a trigger element that doesn't move to fix issues with vertical parallax
        if (parxArgs[i].ptrig == false){
            let newNode = document.createElement("div");
            parx[i].parentElement.insertBefore(newNode, parx[i]);
            triggerNode = newNode;
        } else {
            triggerNode = parx[i].parentElement;
        }
        
        var ourScene = new ScrollMagic.Scene({
            // a parent element can also be used rather than creating a trigger div
            triggerElement: triggerNode, 
            triggerHook: parxArgs[i].triggerHeight,
            duration: screen.height * parxArgs[i].duration
        })
        .setTween(tween)
        .addTo(controller);
    }
}
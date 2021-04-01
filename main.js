

var canvas= new fabric.Canvas('mycanvas');
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var player_object="";
var block_image_object="";
function player_update() {
    fabric.Image.fromURL("player.png",function (Img) {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    }
    );
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function (Img) {
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    }
    );
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey==true&&keyPressed=='80'){
        console.log("p & and shift pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if (e.shiftKey==true&&keyPressed=='77'){
        console.log("m & and shift pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if (keyPressed=='38'){
        up();
        console.log("up");
    }
    if (keyPressed=='40'){
        down();
        console.log("down");
    }
    if (keyPressed=='37'){
        left();
        console.log("left");
    }
    if (keyPressed=='39'){
        right();
        console.log("right");
    }   
    if (keyPressed=='89'){
        new_image('https://lh4.googleusercontent.com/cSR0cmqdHcmaRQxay-QC951P54wkLg_H_gVTVHj2-TYkuuUXqVMDOiKi181XMomtunEY5toSd1_LS-_llSEl=w1366-h625');
        console.log("y");
    }
    if (keyPressed=='68'){
        new_image('https://lh3.googleusercontent.com/BWdoFk2sajSLWMAb1I-rCk0cOyr8abISq49EkqNl1g79TNqYCrNXWbMBYn6svjcRpZ3A2p0sIXr6XU_eoqIp=w1366-h625');
        console.log("d");
    }
    if (keyPressed=='85'){
        new_image('https://lh3.googleusercontent.com/Hs_6ErUR7ioPHMkrqjAdxKTCQ_-YF-tz03Ra-fdCXC4zHaRE9yIwDnFSQNq8TbCYIGLncuFUX8Obc3Msb5yj=w1366-h625');
        console.log("u");
    }
    if (keyPressed=='67'){
        new_image('https://lh3.googleusercontent.com/Hs_6ErUR7ioPHMkrqjAdxKTCQ_-YF-tz03Ra-fdCXC4zHaRE9yIwDnFSQNq8TbCYIGLncuFUX8Obc3Msb5yj=w1366-h625');
        console.log("c");
    }
    if (keyPressed=='78'){
        new_image('https://lh5.googleusercontent.com/RFY1FRjInVYJvletc91G1P3Ys47fD0W9n1vnuqHMntGrHS7uQlx-J5c1xEVthQxcSxKDcfBmD_PGHxDKCtLE=w1366-h625');
        console.log("n");
    }
    if (keyPressed=='72'){
        new_image('https://lh6.googleusercontent.com/JofPOEIVNMrq-_XTiK1pCl3Ee2tCzdUt2zFDHak91F81ZtfeNwsCmkzarqm-8YnMM8y1nqNn1LlI1xEPuO_H=w1366-h625');
        console.log("h");
    }
    if (keyPressed=='75'){
        new_image('https://lh4.googleusercontent.com/UIZxqCxFfDZDGudgbo4ZlC3-ljesmi4TUBOQgtYPxB_GzkKec0x5Cy_uxvzOxfoCD2UFZC-zZZfdXOvJv1_y=w1366-h625');
        console.log("k");
    }
    if (keyPressed=='88'){
        new_image('https://lh4.googleusercontent.com/Q423xBWMu0qw3PN92VEskgtvVoqPY-jYqYhW-RpTm14Fqq1rb6O0DC0-WP-hQSPDhlX58Nhqqx5ZJXQdrwA3=w1366-h625');
        console.log("x");
    }
    if (keyPressed=='90'){
        new_image('https://lh4.googleusercontent.com/Q423xBWMu0qw3PN92VEskgtvVoqPY-jYqYhW-RpTm14Fqq1rb6O0DC0-WP-hQSPDhlX58Nhqqx5ZJXQdrwA3=w1366-h625');
        console.log("z");
    }
    if (keyPressed=='73'){
        new_image('https://lh6.googleusercontent.com/lvWjDtgVb75CeUOm4JHTzY6Re3nkUUAQ4PTLHhno_o7ArJuZ7WUiHhCtn4dyOUylF_mfblOFRsLiEnRqzCWu=w1366-h625');
        console.log("i");
    }
    if (keyPressed=='66'){
        new_image('https://lh5.googleusercontent.com/zG2Ces3jTVXAHKefH4Uqxrz6kBZ-0j_oribmj3klSbUgz_NKlEM2_gHCLVsevk46nxMNXddtCI8InUnDs8de=w1366-h625');
        console.log("b");
    }
    if (keyPressed=='65'){
        new_image('https://lh3.googleusercontent.com/jxm9KWYnEAzQLy36SViGzJiHajYXRbz8rQrIiGkHqXaDsZMYzBezDYIjUrUbGEtUNIfZ3_DjyBv_CgFnMRgH=w1366-h625');
        console.log("a");
    }
    if (keyPressed=='83'){
        new_image('https://lh5.googleusercontent.com/32ux29q244OkUWyY5SWs176W492VU1A7WoMJapijuB-DMl_i0465R9cEzJJQae6g7TukIH751u39k8QA76XV=w1366-h625');
        console.log("s");
    }
    if (keyPressed=='70'){
        new_image('https://lh5.googleusercontent.com/gW3rXq7PqSMI8j4klH4Vg4zQIMN4ogLFTHoeRE4od_uXcKhQg4Ye_DtotuGvQBxqTDF6su1YVkiIEubWZ4wf=w1366-h625');
        console.log("f");
    }
    if (keyPressed=='81'){
        new_image('https://lh4.googleusercontent.com/JNzp47e9_7DtSHR_-x990TGUYa5ThXD3XDzzuC_kaFsq96RkARiojbE3uwSIhdtIhUNYBdf3LNlLdRM7c1ED=w1366-h625');
        console.log("q");
    }
    if (keyPressed=='86'){
        new_image('https://lh3.googleusercontent.com/ijED91EiSD930ppsA200eVFJlck5tD2b4ZowPjD5Gf32HsiSrsYEOKB18qSd0rLt_VcQaW7gofr2AfmdOLx_=w1366-h625');
        console.log("v");
    }
}



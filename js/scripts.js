$(function(){
    var $canvas=$("#canvas"),
        context = $canvas.get(0).getContext('2d');

    $("#dragModeMove").on("click", function () {
        var cropperImage = $canvas.cropper('getCroppedCanvas').toDataURL('image/jpg');
        $('#canvas').cropper('setDragMode', 'move');
    });

    $("#dragModeCrop").on("click", function () {
        var cropperImage = $canvas.cropper('getCroppedCanvas').toDataURL('image/jpg');
        $('#canvas').cropper('setDragMode','crop');
    });


    $("#rotateLeft").on("click", function () {
        var cropperImage = $canvas.cropper('getCroppedCanvas').toDataURL('image/jpg');
        $('#canvas').cropper('rotate', 45);
    });

    $("#rotateRight").on("click", function () {
        var cropperImage = $canvas.cropper('getCroppedCanvas').toDataURL('image/jpg');
        $('#canvas').cropper('rotate', -45);
    });

    $("#moveLeft").on("click", function () {
        var cropperImage = $canvas.cropper('getCroppedCanvas').toDataURL('image/jpg');
        $('#canvas').cropper('move', -50, 0);
    });

    $("#moveRight").on("click", function () {
        var cropperImage = $canvas.cropper('getCroppedCanvas').toDataURL('image/jpg');
        $('#canvas').cropper('move', 50, 0);
    });


    $("#moveUp").on("click", function () {
        var cropperImage = $canvas.cropper('getCroppedCanvas').toDataURL('image/jpg');
        $('#canvas').cropper('move', 0, -50);
    });

    $("#moveDown").on("click", function () {
        var cropperImage = $canvas.cropper('getCroppedCanvas').toDataURL('image/jpg');
        $('#canvas').cropper('move', 0, 50);
    });

    $("#zoomPlus").on("click", function () {
        var cropperImage = $canvas.cropper('getCroppedCanvas').toDataURL('image/jpg');
        $('#canvas').cropper('zoom', 0.1);
    });

    $("#zoomMinus").on("click", function () {
        var cropperImage = $canvas.cropper('getCroppedCanvas').toDataURL('image/jpg');
        $('#canvas').cropper('zoom', -0.1);
    });


    $('#img_file').on('change', function(){
        if(this.files && this.files[0]) {
            if(this.files[0].type.match(/^image\//)) {
                var reader = new FileReader();

                reader.onload=function(e) {
                    var img=new Image();
                    img.onload=function()
                    {
                        context.canvas.width=img.width;
                        context.canvas.height=img.height;
                        context.drawImage(img, 0, 0);
                        if (cropper) {

                            cropper = null;
                            delete cropper;
                        }
                        var cropper = $canvas.cropper('destroy').cropper({
                            aspectRatio: 3 / 4,
                            viewMode: 1
                        });
                    }
                    //socket.on('updateCanvasImage', src => { update = false; image.src = src });
                    img.src=e.target.result;
                };
                $("#crop").click(function(){
                    var croppedImage = $canvas.cropper('getCroppedCanvas').toDataURL('image/jpg');
                    $('#result').html($('<img>').attr('src',croppedImage));
                    console.log(croppedImage);
                });

                reader.readAsDataURL(this.files[0]);
            }
            else {
                alert("Invalid file type");
            }
        }
        else {
            alert("Please select a file.");
        }
    });
});
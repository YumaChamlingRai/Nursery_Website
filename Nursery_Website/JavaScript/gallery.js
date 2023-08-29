var x=0;
function changeImage()
{
    if(x==0)
        {
            document.getElementById("image").src="../Picture/GALLERY.jpg";
            x++
        }
     else
     {
        document.getElementById("image").src="../Picture/gallery2.jpg";
        x=0
     }
}
var arr = [
  {
    dp: "https://media.gettyimages.com/id/491783647/photo/asian-beauty.jpg?s=2048x2048&w=gi&k=20&c=FrSk7hAduYlZ1ODbTqKr7uNWo3TuSV6aeThu7OMO5Io=",
    story:
      "https://media.gettyimages.com/id/496619649/photo/asian-beauty.jpg?s=2048x2048&w=gi&k=20&c=CI0zAqwovy9kyLenLCnDTT-3ARINA-xO1-MSp0PusqQ=",
    name: "Ceri",
  },
  {
    dp: "https://media.gettyimages.com/id/1055658634/photo/beautiful-woman-wearing-sweater.jpg?s=2048x2048&w=gi&k=20&c=0NuolgW4n13FAC3QMXxSmyxGDDBtYdr_Hq3h61jwK_U=",
    story:
      "https://media.gettyimages.com/id/1415016993/photo/woman-striding-out-with-shopping-bag.jpg?s=2048x2048&w=gi&k=20&c=wDmFvdnq6Fcpbp50lUqikCxHjP3LrOYGchzzvv0mWdY=",
    name: "Cathy",
  },
  {
    dp: "https://media.gettyimages.com/id/1265032285/photo/portrait-of-young-girl-with-clean-skin-and-soft-makeup.jpg?s=2048x2048&w=gi&k=20&c=nBmfRdpcZcSPoBJH0urfW0bQ3dxp5_fdq74mtFRxCQk=",
    story:
      "https://media.gettyimages.com/id/1297215020/photo/collage-with-woman-and-greek-goddess-wearing-headphones.jpg?s=2048x2048&w=gi&k=20&c=wBX9x2A-5MOJCqhE5rgXUDazXabgjlAfA0PDYRnqgnk=",
    name: "sweetie",
  },
  {
    dp: "https://media.gettyimages.com/id/1249827471/photo/fashion-portrait-of-elegant-woman-in-brown-clothes-dark-background.jpg?s=2048x2048&w=gi&k=20&c=1i7v8JaHWo-UupdbyYgSRZAZTgNHMvXVwUrJqi0cI0I=",
    story:
      "https://media.gettyimages.com/id/1297215020/photo/collage-with-woman-and-greek-goddess-wearing-headphones.jpg?s=2048x2048&w=gi&k=20&c=wBX9x2A-5MOJCqhE5rgXUDazXabgjlAfA0PDYRnqgnk=",
    name: "Cydie",
  },
  {
    dp: "https://media.gettyimages.com/id/1311415818/photo/dressed-and-ready-to-go-after-my-dreams.jpg?s=2048x2048&w=gi&k=20&c=8-jiTOk5gqAUQwn0iqk5QFjjju9_wNyqY1kD5PiuDtA=",
    story:
      "https://media.gettyimages.com/id/1297215020/photo/collage-with-woman-and-greek-goddess-wearing-headphones.jpg?s=2048x2048&w=gi&k=20&c=wBX9x2A-5MOJCqhE5rgXUDazXabgjlAfA0PDYRnqgnk=",
    name: "Ceritia",
  },
  {
    dp: "https://media.gettyimages.com/id/1306342110/photo/beautiful-woman-with-pink-hair.jpg?s=2048x2048&w=gi&k=20&c=xvrwgqDWhUgtw7bKglfdgaFbM-hDcXPEp7I1shOSAYQ=",
    story:
      "https://media.gettyimages.com/id/1297215020/photo/collage-with-woman-and-greek-goddess-wearing-headphones.jpg?s=2048x2048&w=gi&k=20&c=wBX9x2A-5MOJCqhE5rgXUDazXabgjlAfA0PDYRnqgnk=",
    name: "Cathi",
  },
];

var num = 1;
var clutter = "";
arr.forEach((element, idx) => {
  clutter += `<div class="story">
    <img id = "${idx}" src="${element.dp}" alt="">
</div>`;
});

// console.log(clutter);
let progressValue = 0;
document.getElementById("storiyan").innerHTML = clutter;
document.getElementById("storiyan").addEventListener("click", function (dets) {
//   console.log(dets);
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;

  var myInterval = setInterval(() => {
    if (progressValue < 100) {
      progressValue += 100 / 3;
    } else {
      progressValue = 0;
    }

    document.querySelector(
      "#full-screen"
    ).innerHTML = `<progress id="file" max="100" value="${progressValue}"></progress>`;
    console.log(progressValue);
  }, 1000);

  setTimeout(() => {
    document.querySelector("#full-screen").style.display = "none";
    progressValue = 0;
    clearInterval(myInterval);
  }, 3500);
});

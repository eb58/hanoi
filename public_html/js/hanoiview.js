var hanoiview = function (h) { // h = number of bricks
   var wBrick = 250;
   var hBrick = 30;
   var hPole = hBrick * (h + 1);
   var papers = [null, null, null];
   Raphael(20, 20, 3 * (wBrick + 10), hPole + 80).rect(0, 0, 3 * (wBrick + 10), hPole + 50).attr({fill: "#fff", stroke: "#000"});

   function drawPole(n) {
      paper = papers[n];
      paper.rect(wBrick / 2 - 5, 10, 10, hPole).attr("fill", "#000"); // pole
      paper.rect(0, hPole, wBrick, 30).attr("fill", "#000"); // bottom plate

   }
   function drawTower(n, arr) {
      if (papers[n] === null) papers[n] = Raphael(30 + n * (wBrick + 5), 30, (wBrick + 50), hPole + 60);
      paper = papers[n];
      paper.clear();
      paper.rect(0, 0, wBrick, hPole + 30).attr({fill: "#eee", stroke: "#000"});
      drawPole(n);
      arr.forEach(function (v, i) { // draw Bricks
         var w = v * wBrick / h;
         var l = (wBrick - w) / 2;
         var t = hPole - (i + 1) * hBrick;
         paper.rect(l, t, w, hBrick).attr("fill", "#c00");
      });
   }

   function drawModel(m) {
      console.log( m.l,m.c, m.r);
      drawTower(0, m.l);
      drawTower(1, m.c);
      drawTower(2, m.r);
   }

   return {
      drawModel: drawModel
   };
};
let mX 
let mY 

document.addEventListener("mousemove",function(e){
  mX = e.clientX
  mY = e.clientY
})

const renderer = new c2.Renderer(document.getElementById('c2'));

resize();

const palette = [
  [345,100,67], 
  [190,90,66], 
  [103,43,68], 
  [302,51,43], 
  [325,92,79], 
  [345,99,69], 
  [50,93,48],
  [48,76,73], 
  [189,65,85], 
  [342,73,42], 
  [235,61,50], 
  [228,69,65], 
  [57,59,24], 
  [305,69,71], 
  [185,26,55], 
  [342,68,56], 
  [344,98,67], 
  [259,51,72], 
  [164,20,52], 
  [311,55,54], 
  [228,65,65], 
  [259,51,71], 
  [220,31,27], 
  [33,100,67], 
  [324,46,58], 
  [235,75,55], 
  [166,22,41], 
  [259,33,61], 
  [299,52,37], 
  [163,75,80], 
  [129,54,80],
  [51,96,51], 
  [56,96,82], 
  [324,87,76], 
  [192,68,63], 
  [53,56,26], 
  [174,87,85], 
  [342,66,51], 
  [308,43,47],
];

let random = new c2.Random();
let world = new c2.World(new c2.Rect(0, 0, renderer.width, renderer.height));

for(let i=0; i<renderer.canvas.parentElement.clientWidth/14; i++){
  let x = random.next(renderer.width);
  let y = random.next(renderer.height);
  let z = Math.floor(random.next(palette.length));
  let p = new c2.Particle(x, y);
  p.radius = random.next(10, renderer.height/14);
  p.color = c2.Color.hsl(palette[z][0], palette[z][1], palette[z][2]);

  world.addParticle(p);
}

let collision = new c2.Collision();
//collision.iteration(5);
world.addInteractionForce(collision);

//let pointField = new c2.PointField(new c2.Point(renderer.width/2, renderer.height/2), 1);
//world.addForce(pointField);

let circle = new c2.Circle(renderer.width/4, renderer.height/4, renderer.height/8);
let circleConstraint = new c2.CircleConstraint(circle);
world.addConstraint(circleConstraint);


renderer.draw(() => {
    renderer.clear();

    let mouse = renderer.mouse;
    circle.p = new c2.Point(mX, mY);

    renderer.stroke('#333333');
    renderer.lineWidth(1);
    renderer.lineDash([5, 5]);
    renderer.fill(false);
    renderer.circle(circle);

    world.update();

    for(let i=0; i<world.particles.length; i++){
      let p = world.particles[i];
      renderer.stroke('#333333');
      renderer.lineWidth(1);
      renderer.lineDash(false);
      renderer.fill(p.color);
      renderer.circle(p.position.x, p.position.y, p.radius);
      renderer.lineWidth(2);
      renderer.point(p.position.x, p.position.y);
    }
});


window.addEventListener('resize', resize);
function resize() {
    let parent = renderer.canvas.parentElement;
    renderer.size(parent.clientWidth * 2, parent.clientWidth / parent.clientWidth * parent.clientHeight * 2);
}



// Ideas from Critique
// change colour mode/black and white option stylesheets code

//<script>
// function changeStyleSheet() {
 // var = stylesheet=document.getElementById('stylesheet');
// if (stylesheet.getAttribute('href') === styles2.css;
//    style.sheet.setAttribute('href, styles4.css);
//} else {
//  StyleSheet.setAttribute('href', 'styles2.css');
//}

// </script>
//}
// 
// button.onclick="changeStyleSheet"()">Toggle Dark and Light Mode Option"

//.spotlight
//background: radial gradient(,,,,), transparent 0, transparent 150, rgba(0,0,1, 150());
// height-pointerevent: none;
// top 0;
// left: 0;
// z-index: 1000000;
// bottom 0;
// transform-translate(-30px, -30px)

//.cursor
// width: 200px;
// height: 200px;
// background: black;
// border-radius; 50px;
// position: fixed;
// transform-translate: (-50px, -50px;)
// mix-blend-mode: difference; 



// color palette HSL code figma import

// 345, 100, 67 - rose pink --> "c2.Color.hsl(345,100,67)", --
// 190, 90, 66 - aquamarine -->"c2.Color.hsl(190,90,66)", --
// 103, 43, 68 - light green --> "c2.Color.hsl(103,43,68)", -- 
// 302, 51, 43 - magenta purple --> "c2.Color.hsl(302,51,43)",  --
// 325, 92, 79 - bubble gum pink --> "c2.Color.hsl(325,92,79)", --
// 345, 99, 69 - coral --> "c2.Color.hsl(345,99,69)", --
// 50, 93, 48 - banana --> "c2.Color.hsl(50,93,48)", --
// 48, 76, 73 - pale yellow --> "c2.Color.hsl(48,76,73)", --
// 189, 65, 85 - baby blue --> "c2.Color.hsl(189,65,85)", --
// 342, 73, 42 - maroon --> "c2.Color.hsl(342,73,42)", --
// 235, 61, 50 - royal purple --> "c2.Color.hsl(235,61,50)", --
// 228, 69, 65 - periwinkle --> "c2.Color.hsl(228,69,65)", --
// 57, 59, 24 - swamp --> "c2.Color.hsl(57,59,24)", --  
// 305, 69, 71 - light purple --> "c2.Color.hsl(305,69,71)", --
// 185, 26, 55 - muddy teal --> "c2.Color.hsl(185,26,55)", --
// 342, 68, 56 - rose --> "c2.Color.hsl(342,68,56)", --
// 344, 98, 67 - bright pink --> "c2.Color.hsl(344,98,67)", --
// 259, 51, 72 - lightest purple --> "c2.Color.hsl(259,51,72)", --
// 164, 20, 52 - light teal --> "c2.Color.hsl(164,20,52)", --
// 311, 55, 54 - purple/pink --> "c2.Color.hsl(311,55,54)", --
// 228, 65, 65 - light periwinkle --> "c2.Color.hsl(228,65,65)", --
// 259, 51, 71 - light purple --> "c2.Color.hsl(259,51,71)", --
// 220, 31, 27 - deep sea green blue --> "c2.Color.hsl(220,31,27)", --
// 33, 100, 67 - mango --> "c2.Color.hsl(33,100,67)", --
// 324, 46, 58 - dusty rose pink --> "c2.Color.hsl(324,46,58)", --
// 235, 75, 55 - royal blue --> "c2.Color.hsl(235,75,55)", --
// 166, 22, 41 - dark teal/green --> "c2.Color.hsl(166,22,41)", --
// 259, 33, 61 - muddy purple --> "c2.Color.hsl(259,33,61)", --
// 299 52, 37 - prince purple --> "c2.Color.hsl(299,52,37)", --
// 163, 75, 80 - neon teal --> "c2.Color.hsl(163,75,80)", --
// 129, 54, 80 - lightest green --> "c2.Color.hsl(129,54,80)", --
// 51, 96, 51 - bright yellow -->"c2.Color.hsl(51,96,51)", --
// 56, 96, 82 - baby yellow -->"c2.Color.hsl(56,96,82)", --
// 324, 87, 76 - light pink -->"c2.Color.hsl(324,87,76)", --
// 192, 68, 63 - cyan -->"c2.Color.hsl(192,68,63)", --
// 53, 56, 26 - swamp green -->"c2.Color.hsl(53,56,26,)", --
// 174, 87, 85 - neon teal -->"c2.Color.hsl(174,87,85)", --
// 342, 66, 51 - rouge -->"c2.Color.hsl(342,66,51)", --
// 308, 43, 47 - purple--> "c2.Color.hsl(308,43,47)", 


//* Multi-color Code


 // p.color = c2.Color.hsl(random.next(0, 30), random.next(30, 60), random.next(20, 100));
  // p.color = palette[random.next(0,39)];

  // const palette = ["c2.Color.hsl(345,100,67)", "c2.Color.hsl(190,90,66)", "c2.Color.hsl(103,43,68)", "c2.Color.hsl(302,51,43)", "c2.Color.hsl(325,92,79)", "c2.Color.hsl(345,99,69)", "c2.Color.hsl(50,93,48)","c2.Color.hsl(48,76,73)", "c2.Color.hsl(189,65,85)", "c2.Color.hsl(342,73,42)", "c2.Color.hsl(235,61,50)", "c2.Color.hsl(228,69,65)", "c2.Color.hsl(57,59,24)", "c2.Color.hsl(305,69,71)", "c2.Color.hsl(185,26,55)", "c2.Color.hsl(342,68,56)", "c2.Color.hsl(344,98,67)", "c2.Color.hsl(259,51,72)", "c2.Color.hsl(164,20,52)", "c2.Color.hsl(311,55,54)", "c2.Color.hsl(228,65,65)", "c2.Color.hsl(259,51,71)", "c2.Color.hsl(220,31,27)", "c2.Color.hsl(33,100,67)", "c2.Color.hsl(324,46,58)", "c2.Color.hsl(235,75,55)", "c2.Color.hsl(166,22,41)", "c2.Color.hsl(259,33,61)", "c2.Color.hsl(299,52,37)", "c2.Color.hsl(163,75,80)", "c2.Color.hsl(129,54,80)","c2.Color.hsl(51,96,51)", "c2.Color.hsl(56,96,82)", "c2.Color.hsl(324,87,76)", "c2.Color.hsl(192,68,63)", "c2.Color.hsl(53,56,26)", "c2.Color.hsl(174,87,85)", "c2.Color.hsl(342,66,51)", "c2.Color.hsl(308,43,47)"];

  // const palette = ["c2.Color.hsl(,,,)", "c2.Color.hsl(,,,)", "c2.Color.hsl(,,,)"];
  // will need to develop Array with select values from Figma colour palette
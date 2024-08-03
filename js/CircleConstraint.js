let mX 
let mY 

document.addEventListener("mousemove",function(e){
  mX = e.clientX
  mY = e.clientY
})

const renderer = new c2.Renderer(document.getElementById('c2'));

resize();

const palette = [
  // [345,100,67], 
   // [190,90,66], 
  // [103,43,68], 
  // [302,51,43], 
  // [325,92,79], 
  // [345,99,69], 
  // [50,93,48],
  // [48,76,73], 
  // [189,65,85], 
  // [342,73,42], 
  // [235,61,50], 
  // [228,69,65], 
  // [57,59,24], 
  // [305,69,71], 
  // [185,26,55], 
  // [342,68,56], 
  // [344,98,67], 
  // [259,51,72], 
  // [164,20,52], 
  // [311,55,54], 
  // [228,65,65], 
  // [259,51,71], 
  // [220,31,27], 
  // [33,100,67], 
//  [324,46,58], 
  [235,75,55], 
  // [166,22,41], 
  // [259,33,61], 
  // [299,52,37], 
  // [163,75,80], 
  // [129,54,80],
  // [51,96,51], 
  // [56,96,82], 
  // [324,87,76], 
  // [192,68,63], 
  // [53,56,26], 
  // [174,87,85], 
  // [342,66,51], 
  // [308,43,47],
];

let random = new c2.Random();
let world = new c2.World(new c2.Rect(0, 0, renderer.width, renderer.height));

for(let i=0; i<renderer.canvas.parentElement.clientWidth/15.5; i++){
  let x = random.next(renderer.width);
  let y = random.next(renderer.height);
  let z = Math.floor(random.next(palette.length));
  let p = new c2.Particle(x, y);
  p.radius = random.next(10, renderer.height/15);
  p.color = c2.Color.hsl(palette[z][0], palette[z][1], palette[z][2]);

  world.addParticle(p);
}

let collision = new c2.Collision();
world.addInteractionForce(collision);

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
    renderer.size(parent.clientWidth, parent.clientWidth / parent.clientWidth * parent.clientHeight);
}


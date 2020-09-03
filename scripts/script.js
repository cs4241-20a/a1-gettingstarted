var drawingSurface = document.getElementById( 'drawingDiv' );

let size = 200;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 20, 1.0, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
renderer.setSize(size, size);

drawingSurface.appendChild(renderer.domElement)

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshPhongMaterial ( { color: 0xbfab49 } );
var cube = new THREE.Mesh( geometry, material );
var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );
scene.add( cube );

light.position.set( 10, 10, 10 );
camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();
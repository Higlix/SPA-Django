//console.log("This is Test Sup {{ username }}");
//canvas = document.getElementById("myCanvas");
//ctx = canvas.getContext("2d");

//ctx.beginPath();
//ctx.rect(20, 20, 150, 100);
//ctx.stroke();

import * as THREE from 'three';

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

canvas = document.getElementById("myCanvas");
renderer = new THREE.WebGLRenderer( {stencil: true, canvas: canvas} );
renderer.setSize( window.innerWidth, window.innerHeight );


document.getElementById("app").appendChild( renderer.domElement );

geometry = new THREE.BoxGeometry( 1, 1, 1 );
material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
    if (isRunning)
	    requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();
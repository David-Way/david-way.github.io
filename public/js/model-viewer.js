import * as THREE from '/js/three.module.min.js';
import { OrbitControls } from '/js/OrbitControls.js';
import { STLLoader } from "/js/STLLoader.js";

document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".c-model-viewer").forEach(initViewer);
});

function initViewer(container) {
	const width = container.dataset.width;
	const height = container.dataset.height;
	const modelPath = container.dataset.model;

	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
	camera.position.set(0, 0.5, 2.5); // slightly above and back

	const renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(width, height);
	renderer.setClearColor(0xe0f0ff);
	const canvas = renderer.domElement;
	container.appendChild(canvas);

	const controls = new OrbitControls(camera, renderer.domElement);
	controls.autoRotate = true;
	controls.enableDamping = true;
	controls.dampingFactor = 0.05;
	controls.target.set(0, 0.1, 0); // focus slightly above ground

	const light = new THREE.HemisphereLight(0xffffff, 0x444444);
	scene.add(light);

	const ambient = new THREE.AmbientLight(0xffffff, 0.6);
	scene.add(ambient);

	const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
	dirLight.position.set(5, 10, 7);
	scene.add(dirLight);

	const rimLight = new THREE.DirectionalLight(0xffffff, 0.2);
	rimLight.position.set(-5, 5, -5);
	scene.add(rimLight);

	var grid = new THREE.GridHelper(10, 10);
	scene.add(grid);

	const loader = new STLLoader();
	loader.load(
		modelPath,
		(geometry) => {
			// const material = new THREE.MeshStandardMaterial({ color: 0x888888 });
			const material = new THREE.MeshPhongMaterial({
				color: 0xcccccc,      // light gray
				specular: 0xffffff,   // shiny highlights
				shininess: 30,        // soft reflections
			});
			const mesh = new THREE.Mesh(geometry, material);
			// Rotate Z-up to Y-up
			mesh.rotation.x = -Math.PI / 2; // 90 degrees around X

			// Compute bounding box
			geometry.computeBoundingBox();
			const bbox = geometry.boundingBox;
			const size = new THREE.Vector3();
			bbox.getSize(size); // width, height, depth
			const center = new THREE.Vector3();
			bbox.getCenter(center); // model center#

			// Scale model to fit viewport
			const maxDim = Math.max(size.x, size.y, size.z);
			const desiredSize = 1.5; // how big you want it in world units
			const scale = desiredSize / maxDim;
			mesh.scale.setScalar(scale);

			controls.target.set(0, .65, 0);
			controls.update();

			scene.add(mesh);
		},
		undefined,
		(error) => console.error(error),
	);

	function animate() {
		requestAnimationFrame(animate);
		camera.aspect = canvas.clientWidth / canvas.clientHeight;
		camera.updateProjectionMatrix();
		controls.update();
		renderer.render(scene, camera);
	}

	animate();
}

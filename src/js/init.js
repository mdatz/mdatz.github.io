		//Show page contents once Textures Loaded
		function showBody(){
			document.getElementById("loader").style.display = "none";
			document.getElementById("curtains").style.display = "none";
			document.getElementById("main-body").style.display = "block";
			document.getElementById("main-text").style.display = "block";
			document.getElementById("main-header").style.display = "block";
		}

		//Resize Window Canva on Resize 
		function onWindowResize(){

			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(window.innerWidth, window.innerHeight);
		}

    function toggleCameraPositionB() {
      console.log('Click detected.');
      camera.translateY( -1 );
      camera.translateZ( -1 );    
    }

		//Create a texture loader
		var loader = new THREE.TextureLoader();
		
		//Choose random sphere to display
		var seed = Math.floor(Math.random()*10);
		var texture_count = 0;
		
		var sphere_path = '../../assets/spheres/' + seed + '/';

		//Load Floor Textures
		var floorNormal = loader.load('../../assets/floor/normal.png');
		
		//Load Sphere Textures
		var sphereMap = loader.load(sphere_path + 'color.png', function(){texture_count++;});
		var sphereNormal = loader.load(sphere_path + 'normal.png', function(){texture_count++;});
		var sphereMetal = loader.load(sphere_path + 'metallic.png', function(){texture_count++;});
		var sphereRoughness = loader.load(sphere_path + 'roughness.png', function(){texture_count++;});
		var sphereEmissive = loader.load(sphere_path + 'emissive.png', function(){texture_count++;});
		var sphereAo = loader.load(sphere_path + 'ao.png', function(){texture_count++;});
		var sphereDisplacement = loader.load(sphere_path + 'height.png', function(){texture_count++;});

		//Create renderer & attach to HTML DOM
		var renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.shadowMap.enabled = true;
		
		//Add renderer to HTML
		body = document.getElementById("main-body");
		body.appendChild(renderer.domElement);

		//Create camera & scene
		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500);
		
		//Create lighting elements
		var pointLight = new THREE.PointLight(0xffffff, 1, 100);
		pointLight.castShadow = true;
		pointLight.position.set(25,25,25);
		scene.add(pointLight);
		
		var ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
		scene.add(ambientLight);

		//Create sphere geometry
		var sphereGeometry = new THREE.SphereGeometry(15, 64, 64);

		//Create 3D sphere materials from texture files
		var sphereMaterial = new THREE.MeshStandardMaterial(
			{color:0xffffff,
			map:sphereMap,
			normalMap:sphereNormal,
			metalnessMap:sphereMetal,
			roughnessMap:sphereRoughness,
			emissiveMap:sphereEmissive,
			aoMap:sphereAo,
			displacementMap:sphereDisplacement,
			displacementScale:1.0});
		
		//Generate 3D sphere
		var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
		
		//Toggle sphere shadow
		sphere.position.y = 18;
		sphere.castShadow = true;

		//Add cubes to scene
		scene.add(sphere);
		
		//Wrap floor textures
		floorNormal.wrapS = floorNormal.wrapT = THREE.RepeatWrapping;

		//Create floor geometry
		var waterGeometry = new THREE.PlaneBufferGeometry(1000,1000);
		
		water = new THREE.Water(waterGeometry,
			{textureWidth: 512,
			textureHeight: 512,
			waterNormals: floorNormal,
			alpha: 1.0,
			sunDirection: pointLight.position.clone().normalize(),
			sunColor: 0xffffff,
			waterColor: 0x00000a,
			distortionScale: 20.0,
			fog: scene.fog !== undefined});

		water.rotation.x = -Math.PI/2;
		water.position.y = -1.5;

		scene.add(water);

		//Adjust camera
		camera.position.z = 75;
		camera.position.y = 15;
		camera.lookAt(0,15,0);
		
		var loaded = false;
		
		//Animation loop
		var animate = function() {

			requestAnimationFrame(animate);
			sphere.rotation.y += 0.001;
			
			var time = performance.now() * 0.0001;
			water.material.uniforms['time'].value += 1.0/60.0;

			renderer.render(scene,camera);
			
			if((texture_count == 7) && !loaded){
				showBody();
				loaded = true;
			}
		};
		
		window.addEventListener('resize', onWindowResize, false);

		animate();

		

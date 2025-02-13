Ponder.registry((event) => {
    event.create(['botania:alfheim_portal', 'botania:natura_pylon']).scene("alfheim_portal", "通往精灵传送门", "kubejs:alfheim_portal", (scene, util) => {
		scene.showBasePlate();
		scene.idle(10);
		fadeInSection(scene, [4, 1, 3], [0, 0, 1], Direction.UP, 10);
		scene.text(45, "这是§2精灵门的核心", [4, 1.5, 4])
			.placeNearTarget();
		scene.idle(55);
		scene.text(45, "围绕它建造一个3x3的活木框架", [2, 1.5, 4.5])
			.placeNearTarget();
		scene.idle(10);
		scene.world.showSection([3,1,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([5,1,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([2,2,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([6,2,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([2,3,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([6,3,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([2,4,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([6,4,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([3,5,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([4,5,4], Direction.up);
		scene.idle(3);
		scene.world.showSection([5,5,4], Direction.up);
		scene.idle(20);
		scene.text(45, "每一面中央都应该放置§2发光的§2活木", [2, 3.5, 4])
			.placeNearTarget()
			.attachKeyFrame();
		scene.idle(55);
		scene.text(45, "在传送门旁边放置两个充满魔力的水池...", [1, 1.5, 3])
			.placeNearTarget();
		scene.idle(10);
		scene.world.showSection([1,1,3], Direction.up);
		scene.idle(3);
		scene.world.showSection([7,1,3], Direction.up);
		scene.idle(45);
		scene.text(45, "并且在它们上方放置两个§2自然§2祭坛", [1, 2.5, 3])
			.placeNearTarget();
		scene.idle(10);
		scene.world.showSection([1,2,3], Direction.up);
		scene.idle(3);
		scene.world.showSection([7,2,3], Direction.up);
	    scene.idle(45);
		scene.world.showSection([4,1,4], Direction.up);
		scene.idle(3);
		scene.world.replaceBlocks([4, 1, 3], "air", false);
	    scene.idle(5);
		scene.text(25, "哒！§2精灵传送门§r已经完全启动", [2, 1.5, 4.5])
			.independent();
	    scene.idle(25);
    });
});

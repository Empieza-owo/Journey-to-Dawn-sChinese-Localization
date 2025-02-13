Ponder.registry((event) => {
    event.create(['forbidden_arcanus:arcane_crystal_obelisk']).scene("obelisk", "神秘的水晶方尖碑", "kubejs:arcane_crystal_obelisk", (scene, util) => {
		scene.world.showSection([0,0,0,  4,0,4], Direction.up);
        scene.idle(20);
		scene.world.showSection([2,1,2], Direction.down);
		scene.idle(5);
	    scene.text(35, "首先，放置神秘的抛光黑暗石", [2, 1.5, 2.5])
			.placeNearTarget()
			.attachKeyFrame();
	    scene.idle(35);
		scene.world.showSection([2,2,2,  2,3,2], Direction.down);
		scene.idle(5);
		scene.text(40, "然后，放置2个神秘的水晶块在顶部", [2, 3, 2.5])
			.placeNearTarget();
		scene.idle(45);
        scene.text(50, "这是完成的神秘水晶方尖碑结构", [2, 2.5, 2.5])
     		.placeNearTarget()
        	.attachKeyFrame();
        scene.idle(60);
		scene.text(70, "右键点击它，使用净化粉末来形成结构", [2.0, 2.5, 2.5])
			.attachKeyFrame();
		scene.idle(10);
        scene.showControls(30, [2.5, 3, 1], "right")
        	.rightClick()
           	.withItem("forbidden_arcanus:mundabitur_dust");
        scene.idle(20);
        scene.world.modifyBlock([2, 1, 2], () => Block.id("forbidden_arcanus:arcane_crystal_obelisk").with("part", "lower"), true);
        scene.world.modifyBlock([2, 2, 2], () => Block.id("forbidden_arcanus:arcane_crystal_obelisk").with("part", "middle"), true);
        scene.world.modifyBlock([2, 3, 2], () => Block.id("forbidden_arcanus:arcane_crystal_obelisk").with("part", "upper"), true);
    });
});



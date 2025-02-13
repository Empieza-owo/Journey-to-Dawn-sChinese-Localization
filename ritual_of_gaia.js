Ponder.registry((event) => {
    event.create(['botania:gaia_pylon', 'minecraft:beacon']).scene("ritual_of_gaia", "盖亚召唤仪式", "kubejs:ritual_of_gaia", (scene, util) => {
        scene.scaleSceneView(0.85);
        scene.showBasePlate();
        scene.world.showSection([1,1,1], Direction.up);
        scene.world.showSection([2,1,9], Direction.up);
        scene.world.showSection([4,1,10], Direction.up);
        scene.world.showSection([7,1,3], Direction.up);
        scene.world.showSection([8,1,3], Direction.up);
        scene.world.showSection([11,1,0], Direction.up);
        scene.world.showSection([10,1,6], Direction.up);
        scene.world.showSection([11,1,11], Direction.up);
        scene.idle(10);
        scene.text(45, "首先，清理掉区域中的所有方块", [0, 1.5, 5])
            .independent();
        scene.idle(30);
        scene.world.replaceBlocks([1,1,1], "air", true);
        scene.world.replaceBlocks([2,1,9], "air", true);
        scene.world.replaceBlocks([4,1,10], "air", true);
        scene.world.replaceBlocks([7,1,3], "air", true);
        scene.world.replaceBlocks([8,1,3], "air", true);
        scene.world.replaceBlocks([11,1,0], "air", true);
        scene.world.replaceBlocks([10,1,6], "air", true);
        scene.world.replaceBlocks([11,1,11], "air", true);
        scene.idle(30);
        scene.text(45, "接下来，放置一个信标。只需要一个一级信标就可以了", [5, 1.5, 5])
            .placeNearTarget();
        scene.idle(10);
        scene.world.showSection([5,1,5], Direction.up);
        scene.idle(1);
        scene.world.showSection([6,1,5], Direction.up);
        scene.idle(1);
        scene.world.showSection([5,1,6], Direction.up);
        scene.idle(1);
        scene.world.showSection([7,1,5], Direction.up);
        scene.idle(1);
        scene.world.showSection([6,1,6], Direction.up);
        scene.idle(1);
        scene.world.showSection([5,1,7], Direction.up);
        scene.idle(1);
        scene.world.showSection([7,1,6], Direction.up);
        scene.idle(2);
        scene.world.showSection([6,1,7], Direction.up);
        scene.idle(2);
        scene.world.showSection([7,1,7], Direction.up);
        scene.idle(3);
        scene.world.showSection([6,2,6], Direction.up);
        scene.idle(35);
        scene.text(45, "最后一步——在信标的旁边，放置盖亚的祭坛柱，距离信标3格，垂直1格", [2, 3.5, 2])
            .placeNearTarget();
        scene.idle(10);
        scene.world.showSection([2,3,2], Direction.up);
        scene.idle(3);
        scene.world.showSection([10,3,2], Direction.up);
        scene.idle(3);
        scene.world.showSection([2,3,10], Direction.up);
        scene.idle(3);
        scene.world.showSection([10,3,10], Direction.up);
        scene.idle(35);
        scene.text(40, "完成！盖亚召唤结构已准备好", [0, 1.5, 5])
            .independent();
        scene.idle(50);
    });
});

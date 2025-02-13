Ponder.registry((event) => {
    event.create(['totemic:totem_whittling_knife']).scene("totem", "制作图腾", "kubejs:totem", (scene, util) => {
        scene.world.showSection([0, 0, 0, 4, 0, 4], Facing.UP);
        scene.idle(5);
        fadeInSection(scene, [1, 1, 1], [1, 0, 1], Direction.UP, 0);
        fadeInSection(scene, [1, 2, 1], [1, 0, 1], Direction.UP, 15);
        scene.text(45, "首先，建造一个由原木组成的柱子", [1, 1.5, 1])
            .independent();
        scene.idle(55);
        scene.text(45, "它的最大高度是6个方块", [1, 1.5, 1])
            .independent();
        scene.idle(10);
        fadeInSection(scene, [1, 3, 1], [1, 0, 1], Direction.DOWN, 5);
        fadeInSection(scene, [1, 4, 1], [1, 0, 1], Direction.DOWN, 5);
        fadeInSection(scene, [1, 5, 1], [1, 0, 1], Direction.DOWN, 5);
        fadeInSection(scene, [1, 6, 1], [1, 0, 1], Direction.DOWN, 5);
        scene.idle(20);
        scene.text(50, "右键点击底部方块并按住Shift键来创建图腾的基座", [2.0, 2, 1.5])
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(10);
        scene.showControls(40, [2.5, 2.2, 1], "right")
            .rightClick()
            .whileSneaking()
            .withItem("totemic:totem_whittling_knife");
        scene.idle(50);
        replaceBlocks(scene, "minecraft:air", [1, 1, 1]);
        scene.world.showSection([2,1,2], Direction.down);
        scene.idle(10);
        scene.text(50, "通过切换小刀的模式，您可以制作不同效果的图腾", [2.0, 2, 1.5])
            .placeNearTarget();
        replaceBlocks(scene, "minecraft:air", [1, 2, 1]);
        scene.world.showSection([2,2,2], Direction.down);
        scene.idle(7);
        replaceBlocks(scene, "minecraft:air", [1, 3, 1]);
        scene.world.showSection([2,3,2], Direction.down);
        scene.idle(7);
        replaceBlocks(scene, "minecraft:air", [1, 4, 1]);
        scene.world.showSection([2,4,2], Direction.down);
        scene.idle(7);
        replaceBlocks(scene, "minecraft:air", [1, 5, 1]);
        scene.world.showSection([2,5,2], Direction.down);
        scene.idle(7);
        replaceBlocks(scene, "minecraft:air", [1, 6, 1]);
        scene.world.showSection([2,6,2], Direction.down);
        scene.idle(30);
    });
});

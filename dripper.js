Ponder.registry((event) => {
    event.create('ftbdripper:dripper').scene("dripper", "滴水器", "kubejs:dripper", (scene, util) => {
        scene.world.showSection([0,0,0,  4,0,4], Direction.up);
        scene.world.showSection([2,2,2], Direction.up);
        scene.idle(25);
        scene.text(45, "这就是滴水器", [2, 3, 2])
            .placeNearTarget();
        scene.idle(55);
        scene.text(45, "在它下面放一个处理块...", [2, 3, 2])
            .placeNearTarget();
        scene.idle(55);
        scene.world.showSection([2,1,2], Direction.up);
        scene.idle(20);
        scene.text(45, "...倒入所需的液体...", [2, 3, 2])
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(55);
        scene.showControls(30, [2, 1.5, 2], "right")
            .rightClick()
            .withItem("ftbdripper:water_bowl");
        scene.idle(25)
        scene.text(45, "...然后等待", [2, 2.5, 2])
            .placeNearTarget();
        scene.idle(80);
        scene.world.replaceBlocks([2, 1, 2], "cobblestone", false);
        scene.idle(5);
        scene.text(25, "完成！滴水器已经改变了方块", [2, 3, 2])
            .independent();
        scene.idle(25);
    });
});

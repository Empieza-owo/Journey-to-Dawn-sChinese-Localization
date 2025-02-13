Ponder.registry((event) => {
    event.create(['ars_nouveau:imbuement_chamber']).scene("imbuement_chamber", "吸收室", "kubejs:imbuement_chamber", (scene, util) => {
        scene.showBasePlate();
        scene.idle(10);
        scene.world.showSection([2, 1, 2], Direction.up);
        scene.text(45, "这是吸收室。它能够积累并释放源力", [2, 1.5, 2])
            .placeNearTarget();
        scene.idle(50);
        scene.text(45, "某些配方可能需要放置在阿卡那祭坛上的物品", [1, 1.5, 1])
            .placeNearTarget();
        scene.idle(10);
        scene.world.showSection([1, 1, 1], Direction.up);
        scene.idle(3);
        scene.world.showSection([1, 1, 3], Direction.up);
        scene.idle(3);
        scene.world.showSection([3, 1, 1], Direction.up);
        scene.idle(3);
        scene.world.showSection([3, 1, 3], Direction.up);
        scene.idle(35);
        scene.text(45, "你还可以使用阿卡那平台", [2, 1.5, 1])
            .placeNearTarget();
        scene.idle(10);
        scene.world.showSection([2, 1, 1], Direction.up);
        scene.idle(3);
        scene.world.showSection([1, 1, 2], Direction.up);
        scene.idle(3);
        scene.world.showSection([3, 1, 2], Direction.up);
        scene.idle(3);
        scene.world.showSection([2, 1, 3], Direction.up);
        scene.idle(35);
        
        addText(scene, 30, '请记住，它们应该与吸收室保持不超过1格的距离！', PonderPalette.RED, [2.0, 1.5, 1.0]);
        scene.text(55, "你还可以添加源力瓶来加速过程", [0, 1.5, 0])
            .placeNearTarget();
        scene.idle(10);
        
        fadeInSection(scene, [0, 1, 0], [0, 0, 0], Direction.UP, 10);
        fadeInSection(scene, [4, 1, 0], [0, 0, 0], Direction.UP, 10);
        fadeInSection(scene, [0, 1, 4], [0, 0, 0], Direction.UP, 10);
        fadeInSection(scene, [4, 1, 4], [0, 0, 0], Direction.UP, 15);
        
        scene.world.replaceBlocks([0, 1, 0], "air", true);
        scene.world.replaceBlocks([0, 1, 4], "air", true);
        scene.world.replaceBlocks([4, 1, 0], "air", true);
        scene.world.replaceBlocks([4, 1, 4], "air", true);
        scene.idle(20);
    });
});

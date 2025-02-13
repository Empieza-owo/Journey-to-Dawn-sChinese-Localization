Ponder.registry((event) => {
    event.create(['botania:terra_plate']).scene("terra_plate", "聚合板", "kubejs:terra_plate", (scene, util) => {
        scene.showBasePlate();
        scene.idle(10);
        scene.text(45, "首先，在四周放置青金石块", [2, 1.5, 2.5])
            .placeNearTarget();
        scene.idle(10);
        scene.world.showSection([2,1,1], Direction.up);
        scene.idle(3);
        scene.world.showSection([1,1,2], Direction.up);
        scene.idle(3);
        scene.world.showSection([3,1,2], Direction.up);
        scene.idle(3);
        scene.world.showSection([2,1,3], Direction.up);
        scene.idle(30);
        scene.text(45, "然后，用活石填充空隙", [2, 1.5, 2.5])
            .placeNearTarget();
        scene.idle(10);
        scene.world.showSection([1,1,1], Direction.up);
        scene.idle(3);
        scene.world.showSection([2,1,2], Direction.up);
        scene.idle(3);
        scene.world.showSection([3,1,1], Direction.up);
        scene.idle(3);
        scene.world.showSection([1,1,3], Direction.up);
        scene.idle(3);
        scene.world.showSection([3,1,3], Direction.up);
        scene.idle(30);
        scene.text(35, "最后，将聚合板放置在顶部的中心", [2, 1.5, 2.5])
            .placeNearTarget();
        scene.world.showSection([2,2,2], Direction.up);
        scene.idle(45);
        scene.text(25, "完成！聚合结构已建成", [2, 1.5, 2.5])
            .placeNearTarget();
        scene.idle(25);
    });
});

Ponder.registry((event) => {
    event.create(['ars_nouveau:enchanting_apparatus']).scene("enchanting_apparatus", "魔法装置", "kubejs:enchanting_apparatus", (scene, util) => {
        scene.showBasePlate();
        scene.idle(10);
        scene.world.showSection([4,2,4], Direction.up);
        scene.text(45, "这就是魔法装置。它能够使用源力制造物品", [4, 2.5, 4])
            .placeNearTarget();
        scene.idle(55);
        scene.world.showSection([4,1,4], Direction.up);
        scene.text(45, "为了使其工作，下面必须放置一个奥术核心", [4, 1.5, 4])
            .placeNearTarget();
        scene.idle(55);
        scene.text(45, "用于制作物品的材料需要放置在奥术座架和平台上", [3, 1.5, 3])
            .placeNearTarget();
        scene.idle(10);
        scene.world.showSection([3,1,3], Direction.up);
        scene.idle(3);
        scene.world.showSection([5,1,3], Direction.up);
        scene.idle(3);
        scene.world.showSection([3,1,5], Direction.up);
        scene.idle(3);
        scene.world.showSection([5,1,5], Direction.up);
        scene.idle(30);
        scene.text(45, "它们可以放置在与魔法装置相距一个...", [3, 1.5, 3])
            .placeNearTarget();
        scene.idle(55);
        scene.world.showSection([2,1,2], Direction.up);
        scene.idle(3);
        scene.text(25, "...两个...", [2, 1.5, 2])
            .placeNearTarget();
        scene.world.showSection([6,1,2], Direction.up);
        scene.idle(3);
        scene.world.showSection([2,1,6], Direction.up);
        scene.idle(3);
        scene.world.showSection([6,1,6], Direction.up);
        scene.idle(35);
        scene.world.showSection([4,1,1], Direction.up);
        scene.idle(3);
        scene.text(45, "...或者距离装置三格的位置", [4, 1.5, 1])
            .placeNearTarget();
        scene.world.showSection([1,1,4], Direction.up);
        scene.idle(3);
        scene.world.showSection([7,1,4], Direction.up);
        scene.idle(3);
        scene.world.showSection([4,1,7], Direction.up);
        scene.idle(55);
        scene.text(55, "你还需要在旁边放置源力的水壶", [1, 1.5, 1])
            .placeNearTarget();
        scene.idle(5);
        scene.world.showSection([1,1,1], Direction.up);
        scene.idle(3);
        scene.world.showSection([7,1,1], Direction.up);
        scene.idle(3);
        scene.world.showSection([1,1,7], Direction.up);
        scene.idle(3);
        scene.world.showSection([7 ,1,7], Direction.up);
        scene.idle(45);
    });
});

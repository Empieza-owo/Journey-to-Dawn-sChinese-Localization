Ponder.registry((event) => {
    event.create("forbidden_arcanus:hephaestus_forge").scene("hephaestus", "赫淮斯托斯的锻炉建造", "kubejs:hephaestus_forge", (scene, util) => {
        scene.showStructure();
        scene.idle(20);
        scene.text(55, "§9赫淮斯托斯的锻炉 §r是一个 9x9 的多方块结构", [0, 1.5, 5])
            .independent();
        scene.idle(45);
        scene.world.hideSection([0, 1, 0, 10, 4, 10], Direction.down);
        scene.idle(10);
        scene.text(55, "如果你想建造它，请跟随这个指南", [0, 1.5, 5])
            .independent()
            .attachKeyFrame();
        scene.idle(25);
        
        // 设置灯具
        scene.world.setBlock([5, 0, 5], "supplementaries:blackstone_lamp", false);
        scene.idle(5);
        scene.world.setBlock([5, 0, 2], "supplementaries:blackstone_lamp", false);
        scene.idle(4);
        scene.world.setBlock([3, 0, 3], "supplementaries:blackstone_lamp", false);
        scene.idle(4);
        scene.world.setBlock([2, 0, 5], "supplementaries:blackstone_lamp", false);
        scene.idle(4);
        scene.world.setBlock([3, 0, 7], "supplementaries:blackstone_lamp", false);
        scene.idle(4);
        scene.world.setBlock([5, 0, 8], "supplementaries:blackstone_lamp", false);
        scene.idle(4);
        scene.world.setBlock([7, 0, 7], "supplementaries:blackstone_lamp", false);
        scene.idle(3);
        scene.world.setBlock([8, 0, 5], "supplementaries:blackstone_lamp", false);
        scene.idle(3);
        scene.world.setBlock([7, 0, 3], "supplementaries:blackstone_lamp", false);
        scene.idle(7);
        
        scene.text(55, "首先，在指定位置放置 §9神秘雕刻的抛光黑石块 §r", [5, 1.5, 5])
            .placeNearTarget();
        scene.idle(20);
        scene.world.showSection([5, 1, 5], Direction.down);
        scene.world.showSection([5, 1, 2], Direction.down);
        scene.world.showSection([3, 1, 3], Direction.down);
        scene.world.showSection([2, 1, 5], Direction.down);
        scene.world.showSection([3, 1, 7], Direction.down);
        scene.world.showSection([5, 1, 8], Direction.down);
        scene.world.showSection([7, 1, 7], Direction.down);
        scene.world.showSection([8, 1, 5], Direction.down);
        scene.world.showSection([7, 1, 3], Direction.down);
        scene.idle(45);
        
        scene.text(55, "然后，在中央块周围放置 4 个 §9雕刻的神秘抛光黑石块", [4, 1.5, 5])
            .placeNearTarget();
        scene.idle(10);
        scene.world.showSection([4, 1, 5, 6, 1, 5], Direction.up);
        scene.world.showSection([5, 1, 4, 5, 1, 6], Direction.up);
        scene.idle(50);
        
        scene.text(55, "为了完成第一层，使用 §9抛光黑石块 §r将周围围起来", [0, 1.5, 5])
            .independent();
        scene.idle(10);
        scene.world.showSection([0, 1, 0, 10, 1, 10], Direction.up);
        scene.idle(50);
        
        scene.text(50, "最后，在中心放置 §9锻造桌 §r...", [0, 1.5, 5])
            .independent()
            .attachKeyFrame();
        scene.world.setBlock([5, 2, 5], "minecraft:smithing_table", false);
        scene.idle(10);
        scene.world.showSection([5, 2, 5], Direction.down);
        scene.idle(40);
        
        scene.text(50, "...并右键点击使用 §4清洁粉 §r", [0, 1.5, 5])
            .independent();
        scene.idle(10);
        
        scene.showControls(30, [5, 3.5, 4], "right")
            .rightClick()
            .withItem("forbidden_arcanus:mundabitur_dust");
        scene.idle(25);
        scene.world.createEntity("forbidden_arcanus:crimson_lightning_bolt", [5, 3, 5]);
        scene.idle(10);
        scene.world.setBlock([5, 2, 5], "forbidden_arcanus:hephaestus_forge", true);
        scene.idle(15);
        
        scene.text(50, "啪！§9赫淮斯托斯的锻炉 §r已经完全建成", [0, 1.5, 5])
            .independent()
            .attachKeyFrame();
        scene.idle(30);
    });
});

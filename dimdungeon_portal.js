Ponder.registry((event) => {
    event.create("dimdungeons:block_portal_keyhole").scene("dimdungeon_portal", "建造地下维度传送门", "kubejs:dimdungeon_portal", (scene, util) =>{
        scene.showBasePlate();
        scene.world.showSection([0,1,4, 8,3,4], Direction.up);
        scene.world.showSection([4,4,4], Direction.up);
        scene.idle(20)
        scene.text(55, "这就是 §e地下维度 §r传送门的样子", [0, 1.5, 7])
            .independent();
        scene.idle(55)
        scene.world.hideSection([0, 1, 4, 8, 3, 4], Direction.down)
        scene.world.hideSection([4, 4, 4], Direction.down);
        scene.idle(10)
        scene.text(55, "按照这个指南来建造它", [0, 1.5, 7])
            .independent();
        scene.idle(65);
        scene.text(55, "首先，按指定位置放置 §e石砖 §r", [1, 1.5, 4])
            .placeNearTarget();
        scene.idle(10);
        scene.world.showSection([1,1,4], Direction.down);
        scene.idle(3);
        scene.world.showSection([4,1,4], Direction.down);
        scene.idle(3);
        scene.world.showSection([7,1,4], Direction.down);
        scene.idle(3);
        scene.world.showSection([1,2,4], Direction.down);
        scene.idle(3);
        scene.world.showSection([3,2,4], Direction.down);
        scene.idle(3);
        scene.world.showSection([5,2,4], Direction.down);
        scene.idle(3);
        scene.world.showSection([7,2,4], Direction.down);
        scene.idle(3);
        scene.world.showSection([3,3,4], Direction.down);
        scene.idle(3);
        scene.world.showSection([5,3,4], Direction.down);
        scene.idle(30);
        scene.text(45, "接着，把 §e镀金 §e传送门 §e方块 §r放到石柱上", [1, 3.5, 4])
            .placeNearTarget();
        scene.idle(10);
        scene.world.showSection([1,3,4], Direction.up);
        scene.idle(3);
        scene.world.showSection([7,3,4], Direction.up);
        scene.idle(35);
        scene.text(55, "为了完成建造，围绕传送门框架放置 §e传送门 §e钥匙孔", [4, 4.5, 4])
            .placeNearTarget();
        scene.world.modifyBlock([4, 4, 4], (curState) => curState.with("lit", "false"), false);
        scene.world.showSection([4,4,4], Direction.down);
        scene.idle(65)
        scene.text(50, "将已激活的 §e传送门 §e钥匙 插入钥匙孔...§r", [4, 4.5, 4])
            .placeNearTarget();
        scene.idle(10);
        scene.showControls(30, [4.6, 4.5, 4], "right")
            .rightClick()
            .withItem("dimdungeons:item_portal_key");
        scene.idle(25)
        scene.world.modifyBlock([4, 4, 4], (curState) => curState.with("lit", "true"), false);
        scene.world.showSection([4,3,4], Direction.north);
        scene.world.showSection([4,2,4], Direction.north);
        scene.idle(10);
        scene.text(25, "...完成！ §e地下维度 §r传送门已打开", [0, 1.5, 7])
            .independent();
        scene.idle(25);
    });
});


Ponder.registry((event) => {
    event.create("dimdungeons:block_portal_keyhole").scene("dimdungeon_portal_upg", "升级地下维度传送门", "kubejs:dimdungeon_portal", (scene, util) =>{
        scene.showBasePlate();
        scene.world.showSection([0,1,0, 3,3,8], Direction.up);
        scene.world.showSection([8,1,0, 5,3,8], Direction.up);
        scene.world.showSection([4,1,4], Direction.up);
        scene.world.modifyBlock([4, 4, 4], (curState) => curState.with("lit", "false"), false);
        scene.world.showSection([4,4,4], Direction.up);
        scene.idle(15)
        scene.text(45, "升级 §e地下维度 §r传送门所需的步骤:", [0, 1.5, 7])
            .independent();
        scene.idle(55)
        scene.text(55, "第一步：在传送门顶部两侧放置 §e传送门 §e王冠 §e方块", [3, 4.5, 4])
            .placeNearTarget();
        scene.idle(10);
        scene.world.showSection([3,4,4], Direction.down);
        scene.idle(3);
        scene.world.showSection([5,4,4], Direction.down);
        scene.idle(30);
        scene.text(45, "第二步：在 §e镀金 §e传送门 §e方块 上放置旗帜...", [0, 1.5, 7])
            .independent();
        scene.idle(55)
        scene.world.setBlock([1, 3, 3], "minecraft:white_wall_banner", true);
        scene.text(35, "...白色的旗帜...", [1, 3.5, 3])
            .placeNearTarget();
        scene.idle(40);
        scene.world.setBlock([7, 3, 3], "minecraft:purple_wall_banner", true);
        scene.text(35, "...或者紫色的旗帜", [7, 3.5, 3])
            .placeNearTarget();
        scene.idle(45);
        scene.text(50, "现在你可以使用 §a高级 §a传送门 §a钥匙", [4, 4.5, 4])
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(10);
        scene.showControls(30, [4.6, 4.5, 4], "right")
            .rightClick()
            .withItem("dimdungeons:item_blank_advanced_key");
        scene.idle(25)
        scene.world.modifyBlock([4, 4, 4], (curState) => curState.with("lit", "true"), false);
        scene.world.showSection([4,3,4], Direction.north);
        scene.world.showSection([4,2,4], Direction.north);
        scene.text(50, "地下维度 §r传送门已成功升级", [0, 1.5, 7])
            .independent();
        scene.idle(30);
    });
});
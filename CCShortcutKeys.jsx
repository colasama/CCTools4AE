(function (thisObj) {
    var Info = {
        scriptName: "CC 快捷键",
        version: "0.0.5",
    }

    function buildUI(thisObj) {
        /*
        Code for Import https://scriptui.joonas.me — (Triple click to select): 
        {"activeId":14,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"dialog","windowType":"Palette","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":true},"text":"Dialog","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Button","parentId":3,"style":{"enabled":true,"varName":"pointCenter","text":"锚点居中","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"使当前选中的图层锚点居中放置。"}},"item-2":{"id":2,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"快捷操作","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-3":{"id":3,"type":"Group","parentId":2,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":"left"}},"item-4":{"id":4,"type":"Button","parentId":3,"style":{"enabled":true,"varName":"adaptComp","text":"适应复合","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"使当前选中的图层适应复合大小。"}},"item-5":{"id":5,"type":"Button","parentId":3,"style":{"enabled":true,"varName":"centerComp","text":"视点居中","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"使视点放置在合成中心。"}},"item-6":{"id":6,"type":"Group","parentId":9,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":5,"alignChildren":["left","center"],"alignment":null}},"item-7":{"id":7,"type":"Button","parentId":6,"style":{"enabled":true,"varName":"transComp","text":"前后渐隐","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"使当前选中的图层前后渐隐。"}},"item-8":{"id":8,"type":"EditText","parentId":6,"style":{"enabled":true,"varName":"transTime","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0.2","justify":"left","preferredSize":[54,0],"alignment":null,"helpTip":"渐隐时间"}},"item-9":{"id":9,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"图层动画","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-10":{"id":10,"type":"Group","parentId":2,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-11":{"id":11,"type":"Button","parentId":10,"style":{"enabled":true,"varName":"newCam","text":"新摄像机","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"Group","parentId":9,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":5,"alignChildren":["left","center"],"alignment":null}},"item-13":{"id":13,"type":"Button","parentId":12,"style":{"enabled":true,"varName":"glitchComp","text":"当前闪烁","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"在当前位置增加一个闪烁效果。"}},"item-14":{"id":14,"type":"EditText","parentId":12,"style":{"enabled":true,"varName":"glitchTime","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0.05","justify":"left","preferredSize":[54,0],"alignment":null,"helpTip":"闪烁时间"}},"item-15":{"id":15,"type":"StaticText","parentId":6,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"秒","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"StaticText","parentId":12,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"秒","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-17":{"id":17,"type":"Group","parentId":9,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-18":{"id":18,"type":"EditText","parentId":17,"style":{"enabled":true,"varName":"frameRate","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"30","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-19":{"id":19,"type":"StaticText","parentId":17,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"帧率","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-20":{"id":20,"type":"Button","parentId":17,"style":{"enabled":true,"varName":"frameExtract","text":"图层抽帧","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"在合成帧率不变的情况下改变图层帧率。"}},"item-21":{"id":21,"type":"Button","parentId":10,"style":{"enabled":true,"varName":"saveFrame","text":"保存单帧","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"保存当前位置的帧为png格式到桌面。"}}},"order":[0,2,3,4,1,5,10,11,21,9,6,8,15,7,12,14,16,13,17,18,19,20],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
        */ 

        // DIALOG
        // ======
        var dialog = (thisObj instanceof Panel) ? thisObj : new Window("palette", undefined, undefined, {resizeable: true});
        dialog.text = Info.scriptName + " v" + Info.version; 
        dialog.alignChildren = ["center","top"]; 
        dialog.spacing = 10; 
        dialog.margins = 16; 
        // PANEL1
        // ======
        var panel1 = dialog.add("panel", undefined, undefined, {name: "panel1"}); 
        panel1.text = "快捷操作"; 
        panel1.orientation = "row"; 
        panel1.alignChildren = ["left","top"]; 
        panel1.spacing = 10; 
        panel1.margins = 10; 

        // GROUP1
        // ======
        var group1 = panel1.add("group", undefined, {name: "group1"}); 
        group1.orientation = "column"; 
        group1.alignChildren = ["left","center"]; 
        group1.spacing = 10; 
        group1.margins = 0; 
        group1.alignment = ["left","top"]; 

        var adaptComp = group1.add("button", undefined, undefined, {name: "adaptComp"}); 
        adaptComp.helpTip = "使当前选中的图层适应复合大小。"; 
        adaptComp.text = "适应复合"; 

        var pointCenter = group1.add("button", undefined, undefined, {name: "pointCenter"}); 
        pointCenter.helpTip = "使当前选中的图层锚点居中放置。"; 
        pointCenter.text = "锚点居中"; 

        var centerComp = group1.add("button", undefined, undefined, {name: "centerComp"}); 
        centerComp.helpTip = "使视点放置在合成中心。"; 
        centerComp.text = "视点居中"; 

        // GROUP2
        // ======
        var group2 = panel1.add("group", undefined, {name: "group2"}); 
        group2.orientation = "column"; 
        group2.alignChildren = ["left","center"]; 
        group2.spacing = 10; 
        group2.margins = 0; 

        var newCam = group2.add("button", undefined, undefined, {name: "newCam"}); 
        newCam.text = "新摄像机"; 

        var saveFrame = group2.add("button", undefined, undefined, {name: "saveFrame"}); 
        saveFrame.helpTip = "保存当前位置的帧为png格式到桌面。"; 
        saveFrame.text = "保存单帧";

        // PANEL2
        // ======
        var panel2 = dialog.add("panel", undefined, undefined, {name: "panel2"}); 
        panel2.text = "图层动画"; 
        panel2.orientation = "column"; 
        panel2.alignChildren = ["left","top"]; 
        panel2.spacing = 10; 
        panel2.margins = 10; 

        // GROUP3
        // ======
        var group3 = panel2.add("group", undefined, {name: "group3"}); 
        group3.orientation = "row"; 
        group3.alignChildren = ["left","center"]; 
        group3.spacing = 5; 
        group3.margins = 0; 

        var transTime = group3.add('edittext {properties: {name: "transTime"}}'); 
        transTime.helpTip = "渐隐时间"; 
        transTime.text = "0.2"; 
        transTime.preferredSize.width = 54; 

        var statictext1 = group3.add("statictext", undefined, undefined, {name: "statictext1"}); 
        statictext1.text = "秒"; 

        var transComp = group3.add("button", undefined, undefined, {name: "transComp"}); 
        transComp.helpTip = "使当前选中的图层前后渐隐。"; 
        transComp.text = "前后渐隐"; 

        // GROUP4
        // ======
        var group4 = panel2.add("group", undefined, {name: "group4"}); 
        group4.orientation = "row"; 
        group4.alignChildren = ["left","center"]; 
        group4.spacing = 5; 
        group4.margins = 0; 

        var glitchTime = group4.add('edittext {properties: {name: "glitchTime"}}'); 
        glitchTime.helpTip = "闪烁时间"; 
        glitchTime.text = "0.05"; 
        glitchTime.preferredSize.width = 54; 

        var statictext2 = group4.add("statictext", undefined, undefined, {name: "statictext2"}); 
        statictext2.text = "秒"; 

        var glitchComp = group4.add("button", undefined, undefined, {name: "glitchComp"}); 
        glitchComp.helpTip = "在当前位置增加一个闪烁效果。"; 
        glitchComp.text = "当前闪烁"; 
        
        // GROUP5
        // ======
        var group5 = panel2.add("group", undefined, {name: "group5"}); 
        group5.orientation = "row"; 
        group5.alignChildren = ["left","center"]; 
        group5.spacing = 10; 
        group5.margins = 0; 

        var frameRate = group5.add('edittext {properties: {name: "frameRate"}}'); 
        frameRate.text = "30"; 
        frameRate.preferredSize.width = 30; 

        var statictext3 = group5.add("statictext", undefined, undefined, {name: "statictext3"}); 
        statictext3.text = "帧率"; 

        var frameExtract = group5.add("button", undefined, undefined, {name: "frameExtract"}); 
        frameExtract.helpTip = "在合成帧率不变的情况下改变图层帧率。"; 
        frameExtract.text = "图层抽帧"; 
        //////////////////////////////////////////////////////
        // layer handler function
        function selectedLayerHandler(process) {
            if(app.project.activeItem instanceof CompItem) {
                var comp = app.project.activeItem;
                for(var i=0; i<comp.selectedLayers.length; i++) {
                    var layer = comp.selectedLayers[i];
                    process(comp, layer);
                }
            }
        }
        // adaptCompButton Function
        function adaptCompHandler(comp, layer) {
            if(layer.height != 0) {
                var originRatio = layer.width / layer.height;
                if(originRatio <= 16.78) {
                    var scaleValue = layer.height / comp.height;
                } else {
                    var scaleValue = layer.width / comp.width;
                }
                layer.transform.scale.setValue([100/scaleValue, 100/scaleValue, 100/scaleValue]);
                layer.transform.position.setValue([comp.width/2, comp.height/2, 0]);
            }
        }
        adaptComp.onClick = function () { selectedLayerHandler(adaptCompHandler); }

        // pointCenterButton Function
        function pointCenterHandler(comp, layer) {
            if(layer.height != 0) {
                layer.transform.anchorPoint.setValue([layer.width/2, layer.height/2, 0]);
            }
        }
        pointCenter.onClick = function () { selectedLayerHandler(pointCenterHandler); }

        // centerCompButton Function
        function centerCompHandler(comp, layer) {
            if(layer.height != 0) {
                layer.transform.position.setValue([comp.width/2, comp.height/2, 0]);
            }
        }
        centerComp.onClick = function () { selectedLayerHandler(centerCompHandler); }
        
        // newCamButton Function
        function newCamHandler() {
            if(app.project.activeItem instanceof CompItem) {
                var comp = app.project.activeItem;
                var camera = comp.layers.addCamera("New Camera", [comp.width / 2, comp.height / 2]);
                camera.transform.position.setValue([comp.width / 2, comp.height / 2, - camera.cameraOption.focusDistance.value]);
                var newnull = comp.layers.addNull();
                newnull.length;
                newnull.threeDLayer = true;
                camera.parent = newnull;
            } else {
                alert("请在合成中进行该操作！");
            }
        }
        newCam.onClick = function() { newCamHandler() };

        // saveFrameButton Function
        function saveFrameHandler() {
            var a = currentFormatToTime("1:25", 30);
            
            Date.prototype.Format = function (fmt) { //author: meizz
                var o = {
                "M+": this.getMonth() + 1, //月份
                "d+": this.getDate(), //日
                "h+": this.getHours(), //小时
                "m+": this.getMinutes(), //分
                "s+": this.getSeconds(), //秒
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                "S": this.getMilliseconds() //毫秒
                };
                if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            }

            // TODO
            var comp = app.project.activeItem;
            var fileName = (new Date()).Format("yyyy-MM-dd-hh-mm-ss-S");
            comp.saveFrameToPng(comp.time, File("~/Desktop/" + fileName + "-" + comp.time.toFixed(2)+".png"));
        }
        saveFrame.onClick = function() { saveFrameHandler() };

        // function to get the length of a item
        // app.project.item(index).duration
        // transCompButton Function
        function transCompHandler(comp, layer) {
            layer.transform.opacity.addKey(layer.inPoint);
            layer.transform.opacity.addKey(layer.inPoint + parseFloat(transTime.text));
            layer.transform.opacity.addKey(layer.outPoint - parseFloat(transTime.text));
            layer.transform.opacity.addKey(layer.outPoint);
            layer.transform.opacity.setValueAtKey(1, 0);
            layer.transform.opacity.setValueAtKey(4, 0);
        }

        // glitchCompButton Function
        function glitchCompHandler(comp, layer) {
            for(var i=1; i<=7; i++) {
                layer.transform.opacity.addKey(comp.time + (i - 1) * parseFloat(glitchTime.text));
                layer.transform.opacity.setValueAtKey(i, i%2*100);
            }
        }
        glitchComp.onClick = function () { selectedLayerHandler(glitchCompHandler); }
        if (dialog instanceof Window) {
            dialog.center();
            dialog.show();
        } else {
            dialog.layout.layout(true);
        }
    }
////////////////////////////
// build the user interface
////////////////////////////
    buildUI(thisObj);
})(this);
function CCShortcutKeys(thisObj) {
    var Info = {
        scriptName: "CC 快捷键",
        version: "0.0.1",
    }

    function buildUI(thisObj) {
        var res =   "Group{\
                        addTheme: Panel{\
                            text:'第一批',\
                            orientation:'column',\
                            myButtonGroup:Group{\
                                alignment:'center',\
                                orientation:'column',\
                                adaptCompButton:Button{text:'适合复合',helptip:'将选中图层适合复合'},\
                                btn2:Button{text:'Cancel',helptip:'第二个按钮！'}\
                            },\
                        },\
                    }";
        /*
        Code for Import https://scriptui.joonas.me — (Triple click to select): 
        {"activeId":1,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":null,"windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Dialog","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Button","parentId":3,"style":{"enabled":true,"varName":"pointCenter","text":"锚点居中","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-2":{"id":2,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"第一批","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-3":{"id":3,"type":"Group","parentId":2,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-4":{"id":4,"type":"Button","parentId":3,"style":{"enabled":true,"varName":"adaptComp","text":"适应复合","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":"使当前选中的图层适应复合大小。"}},"item-5":{"id":5,"type":"Button","parentId":3,"style":{"enabled":true,"varName":"centerComp","text":"复合居中","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,2,3,4,1,5],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
        */ 
    
        // DIALOG
        // ======
        // var dialog = new Window("dialog");
        var dialog = (thisObj instanceof Panel) ? thisObj : new Window("dialog");
        dialog.text = Info.scriptName + " v" + Info.version; 
        dialog.alignChildren = ["center","top"]; 
        dialog.spacing = 10; 
        dialog.margins = 16; 
        dialog.resizeable = true;
        dialog.onResizing = dialog.onResize = function () {
            this.layout.resize();
        }
        // PANEL1
        // ======
        var panel1 = dialog.add("panel", undefined, undefined, {name: "panel1"}); 
        panel1.text = "第一批"; 
        panel1.orientation = "column"; 
        panel1.alignChildren = ["left","top"]; 
        panel1.spacing = 10; 
        panel1.margins = 10; 
    
        // GROUP1
        // ======
        var group1 = panel1.add("group", undefined, {name: "group1"}); 
        group1.orientation = "row"; 
        group1.alignChildren = ["left","center"]; 
        group1.spacing = 10; 
        group1.margins = 0; 
    
        var adaptComp = group1.add("button", undefined, undefined, {name: "adaptComp"}); 
        adaptComp.helpTip = "使当前选中的图层适应复合大小。"; 
        adaptComp.text = "适应复合"; 
    
        var pointCenter = group1.add("button", undefined, undefined, {name: "pointCenter"}); 
        pointCenter.text = "锚点居中"; 
    
        var centerComp = group1.add("button", undefined, undefined, {name: "centerComp"}); 
        centerComp.text = "复合居中"; 
        
        // 图层操作部分
        // PANEL1
        // ======
        var panel2 = dialog.add("panel", undefined, undefined, {name: "panel2"}); 
        panel2.text = "图层操作"; 
        panel2.orientation = "column"; 
        panel2.alignChildren = ["left","top"]; 
        panel2.spacing = 10; 
        panel2.margins = 10; 
    
        var group2 = panel2.add("group", undefined, {name: "group2"}); 
        group2.orientation = "row"; 
        group2.alignChildren = ["left","center"]; 
        group2.spacing = 10; 
        group2.margins = 0; 
    
        var transComp = group2.add("button", undefined, undefined, {name: "transComp"}); 
        transComp.helpTip = "使当前选中的图层前后渐隐。"; 
        transComp.text = "前后渐隐";
    
        var glitchComp = group2.add("button", undefined, undefined, {name: "glitchComp"}); 
        glitchComp.helpTip = "在当前位置增加一个闪烁效果。"; 
        glitchComp.text = "当前闪烁";
    
        // adaptCompButton Function
        adaptComp.onClick = function () {
            if(app.project.activeItem instanceof CompItem) {
                var comp = app.project.activeItem;
                alert(app.project.activeItem);
                alert(comp.selectedLayers[0]);
                // 如果大于16:9则按照宽度，反之按照长度设置
                // var layer = getLayers();
                // alert(layer.name);
                // alert(app.project.activeItem.width, app.project.activeItem.height);
            }
        }
        return dialog;
    }
    
    var scriptPanel = buildUI(thisObj);
    if ((scriptPanel !== null) && (scriptPanel instanceof Window)) {
		scriptPanel.center();
		scriptPanel.show();
	}
}

/****************************************************
Creates the user interface.
************************************************/

////////////////////////////
// build the user interface
////////////////////////////
CCShortcutKeys(this);
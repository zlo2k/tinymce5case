tinymce.PluginManager.add('zcase', function (ed, url) {
    'use strict';

    function setToUp() {
        String.prototype.upperCase = function () {
            return this.toLocaleUpperCase();
        };
        var sel = ed.dom.decode(ed.selection.getContent());
        sel = sel.replace(/i/g, "İ").toLocaleUpperCase();
        ed.selection.setContent(sel);
        ed.save();
        ed.isNotDirty = true;
    }

    function setToDown() {
        String.prototype.lowerCase = function () {
            return this.toLocaleLowerCase();
        };
        var sel = ed.dom.decode(ed.selection.getContent());
        sel = sel.replace(/I/g, "ı").toLocaleLowerCase();
        ed.selection.setContent(sel);
        ed.save();
        ed.isNotDirty = true;
    }

    ed.ui.registry.addMenuButton('zcase', {
        tooltip: 'Смена регистра, доступны горячие клавиши (ctrl + shift + (u или l) upper\lower)',
        icon: 'change-case',
        fetch: function (callback) {
            var items = [
                {
                    type: 'menuitem',
                    text: 'Строчные',
                    onAction: setToDown
                },
                {
                    type: 'menuitem',
                    text: 'Заглавные',
                    onAction: setToUp
                }
            ];
            callback(items);
        }
    });

    ed.shortcuts.add('ctrl+shift+u', "Uppercase", setToUp);
    ed.shortcuts.add('ctrl+shift+l', "Lowercase", setToDown);
});
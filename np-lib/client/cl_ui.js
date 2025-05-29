const registered = [];

function RegisterUICallback(name, cb) {
    AddEventHandler(`_qbx_uiReq:${name}`, cb);

    if (GetResourceState('rp-ui') === 'started') exports["rp-ui"].RegisterUIEvent(name);

    registered.push(name);
}

function SendUIMessage(data) {
    exports["rp-ui"].SendUIMessage(data);
}

function SetUIFocus(hasFocus, hasCursor) {
    exports["rp-ui"].SetUIFocus(hasFocus, hasCursor);
}

function GetUIFocus() {
    return exports["rp-ui"].GetUIFocus();
}

AddEventHandler('_qbx_uiReady', () => {
    registered.forEach((eventName) => exports["rp-ui"].RegisterUIEvent(eventName));
});
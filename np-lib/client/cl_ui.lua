local registered = {}

function RegisterUICallback(name, cb)
    print("HERE RegisterUICb LUA",name)
  local function interceptCb(data, innerCb)
    cb(data, function(result)
      if result.meta.ok then
        result.meta.message = "done"
      end
      innerCb(result)
    end)
  end
  AddEventHandler(('_qbx_uiReq:%s'):format(name), interceptCb)

  if (GetResourceState("rp-ui") == "started") then 
    exports["rp-ui"]:RegisterUIEvent(name) 
  end

  registered[#registered + 1] = name
end

function SendUIMessage(data)
  exports["rp-ui"]:SendUIMessage(data)
end

function SetUIFocus(hasFocus, hasCursor)
  exports["rp-ui"]:SetUIFocus(hasFocus, hasCursor)
end

function GetUIFocus()
  return exports["rp-ui"]:GetUIFocus()
end

AddEventHandler("_qbx_uiReady", function()
  for _, eventName in ipairs(registered) do
    exports["rp-ui"]:RegisterUIEvent(eventName)
  end
end)

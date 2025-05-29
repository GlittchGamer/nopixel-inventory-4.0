function characterExist(cid)
    if not cid then return false end

    local exist = MySQL.scalar.await([[
        SELECT *
        FROM characters
        WHERE id = ?
    ]],
    { cid })

    if not exist then return false end

    return true
end

-- function getCharacter(cid, info)
--     if not cid then return 0 end

--     local info = MySQL.scalar.await([[
--         SELECT ??
--         FROM characters
--         WHERE id = ?
--     ]],
--     { info, cid })

--     if not info then return 0 end

--     return info
-- end

QBCore = exports['qb-core']:GetCoreObject()

function getCharacter(src)
    local Player = QBCore.Functions.GetPlayer(src)
    return {
        id = tonumber(Player.PlayerData.citizenid)
    }
end

exports('getCharacter', getCharacter)
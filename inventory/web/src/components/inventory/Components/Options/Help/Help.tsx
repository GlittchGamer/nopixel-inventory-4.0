import { Show } from "solid-js"
import { getInventoryContext } from "../../../../provider"

export const Help = () => {
    const {
        showingHelpMenu,
        setShowingHelpMenu
    } = getInventoryContext()
    
    return (
        <Show
            when={showingHelpMenu()}
        >
            <div
                class="absolute bottom-[6rem] left-0 right-0 z-50 flex items-center justify-center"
            >
                <div
                    class="flex h-1/2 w-full flex-col overflow-hidden rounded bg-neutral-800"
                >
                    <div
                        class="flex h-1/3 w-full items-center justify-center border-b border-solid border-neutral-700 p-4"
                    >
                        <span
                            class="text-xl text-neutral-400"
                        >
                            Help
                        </span>
                    </div>
                    
                    <div
                        class="flex h-1/3 w-full flex-col items-center justify-center"
                    >
                        <div
                            class="flex w-full flex-col p-4 text-xl text-neutral-400"
                        >
                            Basic Controls:
                            <ul>
                                <li>
                                    Left Click: Start Dragging
                                </li>

                                <li>
                                    Middle Click: Use Item
                                </li>

                                <li>
                                    Right Click: Context Menu
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div
                        class="flex h-1/3 w-full cursor-pointer items-center justify-center border-t border-solid border-neutral-700 p-4 hover:bg-neutral-500"
                        onClick={() => {
                            setShowingHelpMenu(false)
                        }}
                    >
                        <span
                            class="text-xl text-neutral-400"
                        >
                            Close
                        </span>
                    </div>
                </div>
            </div>
        </Show>
    )
}
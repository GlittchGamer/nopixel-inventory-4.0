import { NUI } from "../lib/nui";

export const nuiAction = async(_: string, data: any = {}) => {
    // console.log('Executing NUI Callback ' + _ + ' ' + JSON.stringify(data)) // Debugging
    NUI.execute(_, data);
};


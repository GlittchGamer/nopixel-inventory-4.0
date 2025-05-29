declare global {
    interface Window {
        GetParentResourceName?: () => string;
    }
}

export const fetchNui = async <T = any>(eventName: string, data: any = {}): Promise<T> => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
    };

    const resourceName = (window as any).GetParentResourceName && typeof window.GetParentResourceName === 'function'
        ? window.GetParentResourceName() 
        : 'inventory';
    const resp = await fetch(`https://${resourceName}/${eventName}`, options);
    return await resp.json();
};
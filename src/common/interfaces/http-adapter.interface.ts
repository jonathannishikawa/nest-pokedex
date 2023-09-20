
export interface Httpadapter {
    get<T>(url: string): Promise<T>;
}
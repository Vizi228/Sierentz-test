export type ITable = {
    name: string,
    obj: TableObject[],
};
export type TableObject = {
    name: string,
    obj: TableDate[],
};
export type TableDate = {
    name: string,
    obj: {
        value: number,
        dateRelease: string,
    }
}
type DataSetField = {
    title?: string;
    dataIndex?: string | string[];
};
type DataSetOptions = {
    fields: DataSetField[];
};
declare class DataSet {
    private readonly options;
    name: DataSetField[];
    constructor(options: DataSetOptions);
}

export { DataSet };

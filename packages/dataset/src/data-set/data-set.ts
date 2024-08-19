import { get } from 'es-toolkit/compat';

type DataSetField = {
	title?: string;
	dataIndex?: string | string[];
};
type DataSetOptions = {
	fields: DataSetField[];
};

export class DataSet {
	name: DataSetField[];
	constructor(private readonly options: DataSetOptions) {
		this.name = get(options, 'fields');
	}
}

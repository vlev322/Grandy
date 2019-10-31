import { AxiosRequestConfig } from "axios";

export interface IGetParams {
	id?: string;
	fields?: string[];
	sort?: string;
	order?: "asc" | "desc";
	skip?: number;
	limit?: number;
	[key: string]: any;
}

export interface IPostParams {
	id?: string;
	body: object;
}

export interface IPutParams {
	id?: string;
	body: object;
}

export interface IDeleteParams {
	id?: string;
}

export interface IRouter {
  readonly route: string;
}

export interface ISenderResponse<Data = any> {
	data: Data;
}

export interface IRequestSender {
  readonly url: string;
  get(router?: IRouter, params?: IGetParams): Promise<ISenderResponse>;
  post(router: IRouter, params?: IPostParams): Promise<ISenderResponse>;
  put(router: IRouter, params?: IPutParams): Promise<ISenderResponse>;
  delete(router: IRouter, params?: IDeleteParams): Promise<ISenderResponse>;
}
export type TParamsParser = (params: IGetParams | IPostParams | IPutParams | IDeleteParams) => AxiosRequestConfig;
import { IRequestSender, TParamsParser, IRouter, ISenderResponse, IPostParams } from "../_interfaces";
import { IGetParams } from "./_interfaces";
import Axios from "axios";

// export class RequestSender implements IRequestSender {
export class RequestSender  {
	public url: string;
	private _paramsParser: TParamsParser;

	constructor(url: string, paramsParser?: any) {
		this.url = url;
		this._paramsParser = paramsParser || null;
  }
  
	public get(router: IRouter, params?: IGetParams): Promise<ISenderResponse> {
		// const path = this._getPath(router);
		return Axios.get(`http://localhost:3000/api/users`, { params });
	}

}
import { IRequestSender, IGetParams, ISenderResponse } from "./_interfaces";

export class Communicator {
	private _requestSender: IRequestSender;

	// constructor(props: ICommunicatorProps){
	constructor(props: any) {
		this._requestSender = props.requestSender;
	}

	public getUsers<Data = any>(category?: string, params?: IGetParams): Promise<ISenderResponse<Data>> {
		return this._requestSender.get();
	}
}

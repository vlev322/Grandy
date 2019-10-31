import { RequestSender } from "./request-sender/RequestSender";
import { Communicator } from "./Comunicator";

const requestSender = new RequestSender(`http://localhost:3000/api/users`);

const routing = {
	// campaign: campaignRouter
};
export const communicator = new Communicator({requestSender, routing});